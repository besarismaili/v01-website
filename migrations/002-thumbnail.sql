-- Add thumbnail column to projects
alter table projects add column if not exists thumbnail text default '';

-- Create storage bucket for project media (if storage is available)
insert into storage.buckets (id, name, public)
values ('project-media', 'project-media', true)
on conflict (id) do nothing;

-- Storage policies
create policy "public_read_media" on storage.objects for select using (bucket_id = 'project-media');
create policy "auth_upload_media" on storage.objects for insert to authenticated with check (bucket_id = 'project-media');
create policy "auth_update_media" on storage.objects for update to authenticated using (bucket_id = 'project-media');
create policy "auth_delete_media" on storage.objects for delete to authenticated using (bucket_id = 'project-media');
