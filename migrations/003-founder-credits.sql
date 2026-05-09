-- Add founder credit fields to projects
alter table projects add column if not exists credit_type text not null default 'V01 Work';
alter table projects add column if not exists studio text default '';
alter table projects add column if not exists role text default '';

-- Seed founder credits
insert into projects (title, client, category, year, runtime, status, featured, director, vfx_sup, shots, tags, summary, credit_type, studio, role, updated_at) values
  ('Superman',                            '—', 'VFX / Post', 2025, '—', 'Published', false, '—', '—', 0, '{"founder-credit","feature-film"}', 'Feature-film compositing as part of the Framestore team.',                          'Founder Prior Work', 'Framestore',        'Compositor', '2025-01-01'),
  ('Transformers',                        '—', 'VFX / Post', 2025, '—', 'Published', false, '—', '—', 0, '{"founder-credit","feature-film"}', 'Feature-film compositing across MPC and Framestore.',                               'Founder Prior Work', 'MPC / Framestore',  'Compositor', '2025-01-02'),
  ('Iron Man 3',                          '—', 'VFX / Post', 2025, '—', 'Published', false, '—', '—', 0, '{"founder-credit","feature-film"}', 'Feature-film compositing as part of the Framestore team.',                          'Founder Prior Work', 'Framestore',        'Compositor', '2025-01-03'),
  ('Captain America: The Winter Soldier', '—', 'VFX / Post', 2025, '—', 'Published', false, '—', '—', 0, '{"founder-credit","feature-film"}', 'Feature-film compositing as part of the Framestore team.',                          'Founder Prior Work', 'Framestore',        'Compositor', '2025-01-04'),
  ('Maleficent',                          '—', 'VFX / Post', 2025, '—', 'Published', false, '—', '—', 0, '{"founder-credit","feature-film"}', 'Feature-film compositing as part of the MPC team.',                                 'Founder Prior Work', 'MPC',               'Compositor', '2025-01-05');
