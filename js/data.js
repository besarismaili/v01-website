// V01 — Supabase public data layer
// Loaded on public pages to fetch published projects via the anon key.
const SUPABASE_URL = 'https://pmkiunjdkibhjabnyeyl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_EbhbY5qX8DRA6mc4aif18Q_dQtnuRWP';

const _sb = window._supabaseClient || (window._supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY));

const V01 = {
  async getPublishedProjects() {
    const { data, error } = await _sb
      .from('projects')
      .select('*')
      .eq('status', 'Published')
      .order('updated_at', { ascending: false });
    return error ? [] : data;
  },

  async getFeaturedProject() {
    const { data, error } = await _sb
      .from('projects')
      .select('*')
      .eq('featured', true)
      .eq('status', 'Published')
      .limit(1)
      .single();
    return error ? null : data;
  },

  async getProject(id) {
    const { data, error } = await _sb
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();
    return error ? null : data;
  },

  async getSelectedWork(limit = 5) {
    const { data, error } = await _sb
      .from('projects')
      .select('*')
      .eq('status', 'Published')
      .neq('credit_type', 'Founder Prior Work')
      .order('updated_at', { ascending: false })
      .limit(limit);
    return error ? [] : data;
  },

  async getProjectsByCategory(category) {
    const { data, error } = await _sb
      .from('projects')
      .select('*')
      .eq('status', 'Published')
      .eq('category', category)
      .order('year', { ascending: false });
    return error ? [] : data;
  },

  async getCategoryCounts() {
    const { data, error } = await _sb
      .from('projects')
      .select('category')
      .eq('status', 'Published');
    if (error || !data) return {};
    const counts = {};
    data.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
    return counts;
  },

  async getNextProjects(currentId, limit = 2) {
    const { data, error } = await _sb
      .from('projects')
      .select('*')
      .eq('status', 'Published')
      .neq('id', currentId)
      .neq('credit_type', 'Founder Prior Work')
      .order('updated_at', { ascending: false })
      .limit(limit);
    return error ? [] : data;
  },

  async getFounderCredits() {
    const { data, error } = await _sb
      .from('projects')
      .select('*')
      .eq('status', 'Published')
      .eq('credit_type', 'Founder Prior Work')
      .order('updated_at', { ascending: true });
    return error ? [] : data;
  }
};
