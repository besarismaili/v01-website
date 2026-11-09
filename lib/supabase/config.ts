// Shared Supabase connection settings. Env vars win; the fallbacks are the
// project's public (anon) values, so pages and the auth middleware keep
// working when a deployment has no env vars set.
export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://pmkiunjdkibhjabnyeyl.supabase.co";
export const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_EbhbY5qX8DRA6mc4aif18Q_dQtnuRWP";
