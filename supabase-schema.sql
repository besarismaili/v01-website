-- ============================================================
-- V01 CMS — Supabase Schema
-- Run this in Supabase SQL Editor (Dashboard > SQL Editor > New Query)
-- ============================================================

-- 1. Projects table
create table if not exists projects (
  id          uuid default gen_random_uuid() primary key,
  title       text not null,
  client      text not null,
  category    text not null default 'Brand Film',
  year        int not null default extract(year from now())::int,
  runtime     text default '',
  status      text not null default 'Draft',
  featured    boolean default false,
  director    text default '',
  vfx_sup     text default '',
  shots       int default 0,
  tags        text[] default '{}',
  summary     text default '',
  hero_url    text default '',
  thumbnail   text default '',
  video_url   text default '',
  source_url  text default '',
  gallery_urls text[] default '{}',
  case_study  jsonb not null default '{}'::jsonb,
  sort_order  int not null default 100,
  credit_type text not null default 'V01 Work',
  studio      text default '',
  role        text default '',
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- 2. Auto-update updated_at on row change
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger projects_updated_at
  before update on projects
  for each row execute function update_updated_at();

-- 3. Row-Level Security
alter table projects enable row level security;

-- Anyone can read published projects (for the public site)
create policy "public_read_published"
  on projects for select
  using (status = 'Published');

-- Authenticated users get full access (admin panel)
create policy "auth_full_select"
  on projects for select
  to authenticated
  using (true);

create policy "auth_insert"
  on projects for insert
  to authenticated
  with check (true);

create policy "auth_update"
  on projects for update
  to authenticated
  using (true)
  with check (true);

create policy "auth_delete"
  on projects for delete
  to authenticated
  using (true);

-- 4. Storage bucket for project media
-- Create this manually in the Supabase dashboard:
--   Go to Storage > New Bucket > name: "project-media" > toggle "Public bucket" > Create
-- Then add these policies via Storage > Policies, or run this AFTER storage is enabled:
--
-- insert into storage.buckets (id, name, public)
-- values ('project-media', 'project-media', true)
-- on conflict (id) do nothing;
--
-- create policy "public_read_media" on storage.objects for select using (bucket_id = 'project-media');
-- create policy "auth_upload_media" on storage.objects for insert to authenticated with check (bucket_id = 'project-media');
-- create policy "auth_update_media" on storage.objects for update to authenticated using (bucket_id = 'project-media');
-- create policy "auth_delete_media" on storage.objects for delete to authenticated using (bucket_id = 'project-media');

-- 5. Seed data
insert into projects (title, client, category, year, runtime, status, featured, director, vfx_sup, shots, tags, summary, updated_at) values
  ('Echoes of Tomorrow', 'Atlas Pictures',    'Brand Film',   2026, '04:32', 'Published', true,  'Mara Voss',   'Idris Khoury', 214, '{"hero","virtual-stage","hdr"}',    'An immersive brand film exploring the architecture of memory.',         '2026-04-24'),
  ('Dusk',               'Halflight Records', 'Music Video',  2026, '03:48', 'Published', false, 'Jin Reyes',   'Idris Khoury', 96,  '{"portrait","low-light"}',          'Portrait-driven music video for Halflight Records.',                    '2026-04-18'),
  ('The Light Between',  'Pearl & Wave',      'Short Film',   2026, '12:48', 'Published', false, 'Sofia Marin', 'Theo Park',    182, '{"festival","seascape"}',           'A father, a daughter, and the lighthouse between them.',                '2026-04-11'),
  ('Outpost 7',          'Northbound',        'VFX / Post',   2026, '02:30', 'Draft',     false, 'Mara Voss',   'Idris Khoury', 64,  '{"sci-fi","spacesuit"}',            'Compositing-heavy VFX delivery for streaming spot.',                    '2026-04-30'),
  ('Signal Lost',        'Atlas Pictures',    'Brand Film',   2025, '01:30', 'Published', false, 'Mara Voss',   'Idris Khoury', 48,  '{"vertical-light"}',                'Brand spot — light from above, hope from below.',                       '2025-12-12'),
  ('Carrier-9',          'Northbound',        'Commercial',   2025, '01:00', 'Published', false, 'Theo Park',   'Theo Park',    32,  '{"vehicle","night"}',               'Hero vehicle commercial with full virtual stage.',                      '2025-11-04'),
  ('Halflight',          'Halflight Records', 'Music Video',  2025, '04:01', 'Published', false, 'Jin Reyes',   'Theo Park',    88,  '{"rain","close-up"}',               'Rain-soaked second single from the Halflight EP.',                      '2025-09-22'),
  ('Solar Field',        'Verdant Energy',    'Commercial',   2025, '00:60', 'Archived',  false, 'Sofia Marin', 'Theo Park',    24,  '{"eclipse","outdoor"}',             'Eclipse-coded brand spot for clean energy launch.',                     '2025-08-11'),
  ('Salt & Static',      'Independent',       'Short Film',   2024, '09:12', 'Published', false, 'Sofia Marin', 'Idris Khoury', 142, '{"desert","figure"}',               'Festival-circuit short, desert-set, dialogue-light.',                   '2024-06-02'),
  ('Room 24',            'Halflight Records', 'Music Video',  2024, '03:14', 'Archived',  false, 'Jin Reyes',   'Theo Park',    54,  '{"interior","warm"}',               'Interior-lit music video, single-take pacing.',                         '2024-03-18'),
  ('Northbound',         'Northbound',        'Brand Film',   2026, '02:14', 'Scheduled', false, 'Mara Voss',   'Idris Khoury', 74,  '{"origin-film","hero"}',            'Origin film for the Northbound spring campaign.',                       '2026-05-02'),
  ('Glass Coast',        'Pearl & Wave',      'Commercial',   2026, '00:45', 'Draft',     false, 'Theo Park',   'Theo Park',    22,  '{"ocean","brand"}',                 'Beverage brand commercial, oceanic mood film.',                         '2026-05-04');
