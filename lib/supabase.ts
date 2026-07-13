import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pmkiunjdkibhjabnyeyl.supabase.co';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_EbhbY5qX8DRA6mc4aif18Q_dQtnuRWP';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPublishedProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('status', 'Published')
    .order('updated_at', { ascending: false });
  return error ? [] : data;
}

export async function getFeaturedProject() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('featured', true)
    .eq('status', 'Published')
    .limit(1)
    .single();
  return error ? null : data;
}

export async function getProject(id: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();
  return error ? null : data;
}

export async function getSelectedWork(limit = 5) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('status', 'Published')
    .neq('credit_type', 'Founder Prior Work')
    .order('updated_at', { ascending: false })
    .limit(limit);
  return error ? [] : data;
}

export async function getProjectsByCategory(category: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('status', 'Published')
    .eq('category', category)
    .order('year', { ascending: false });
  return error ? [] : data;
}

export async function getCategoryCounts() {
  const { data, error } = await supabase
    .from('projects')
    .select('category')
    .eq('status', 'Published');
  if (error || !data) return {};
  const counts: Record<string, number> = {};
  data.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
  return counts;
}

export async function getNextProjects(currentId: string, limit = 2) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('status', 'Published')
    .neq('id', currentId)
    .neq('credit_type', 'Founder Prior Work')
    .order('updated_at', { ascending: false })
    .limit(limit);
  return error ? [] : data;
}

export async function getFounderCredits() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('status', 'Published')
    .eq('credit_type', 'Founder Prior Work')
    .order('updated_at', { ascending: true });
  return error ? [] : data;
}
