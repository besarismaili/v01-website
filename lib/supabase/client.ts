import { createBrowserClient } from '@supabase/ssr';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pmkiunjdkibhjabnyeyl.supabase.co';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_EbhbY5qX8DRA6mc4aif18Q_dQtnuRWP';

export const supabase = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
