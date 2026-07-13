-- Portfolio media and project-specific case-study content.
alter table projects add column if not exists thumbnail text default '';
alter table projects add column if not exists video_url text default '';
alter table projects add column if not exists source_url text default '';
alter table projects add column if not exists gallery_urls text[] default '{}';
alter table projects add column if not exists case_study jsonb not null default '{}'::jsonb;
alter table projects add column if not exists sort_order int not null default 100;

-- Founder film credits: title-specific artwork and the most relevant reel/source.
update projects set
  year = 2025, runtime = '01:06',
  hero_url = 'https://www.framestore.com/sites/default/files/styles/image_gallery_mob_688x_387_/public/2025-10/AWS0151_comp_FRM_v0596_1052.jpg?h=242776bc&itok=WKmGR8--',
  thumbnail = 'https://www.framestore.com/sites/default/files/styles/image_gallery_mob_688x_387_/public/2025-10/AWS0151_comp_FRM_v0596_1052.jpg?h=242776bc&itok=WKmGR8--',
  video_url = 'https://vimeo.com/1159635552', source_url = 'https://www.framestore.com/work/superman', sort_order = 10,
  summary = 'Besar Ismaili contributed feature-film compositing as part of Framestore''s Montreal team, helping integrate complex environments, characters, and effects into James Gunn''s Superman.',
  case_study = '{"eyebrow":"Founder film credit","headline":"Feature compositing at blockbuster scale.","overview":"A production-side credit from Besar Ismaili''s work with Framestore before founding V01.","contribution":"Compositing support across Framestore''s Superman delivery, with the wider team responsible for the Fortress of Solitude, Krypto, the Engineer and Kryptonian holograms.","disclaimer":"This is an individual founder credit. V01 was not engaged as a vendor on the production."}'::jsonb
where title = 'Superman' and credit_type = 'Founder Prior Work';

update projects set
  title = 'Transformers: Rise of the Beasts', year = 2023, runtime = '01:15',
  hero_url = 'https://upload.wikimedia.org/wikipedia/en/1/1c/Transformers-_Rise_of_the_Beasts.jpg',
  thumbnail = 'https://upload.wikimedia.org/wikipedia/en/1/1c/Transformers-_Rise_of_the_Beasts.jpg',
  video_url = 'https://vimeo.com/906420046', source_url = 'https://vimeo.com/906420046', sort_order = 20,
  summary = 'Feature-film compositing by Besar Ismaili across MPC and Framestore for the live-action Transformers franchise.',
  case_study = '{"eyebrow":"Founder film credit","headline":"Robots, plates and precision integration.","overview":"A dedicated reel highlighting Besar Ismaili''s compositing contribution to Transformers: Rise of the Beasts.","contribution":"Digital compositing and shot integration delivered within MPC and Framestore feature pipelines.","disclaimer":"This is an individual founder credit. V01 was not engaged as a vendor on the production."}'::jsonb
where title = 'Transformers' and credit_type = 'Founder Prior Work';

update projects set
  year = 2013, runtime = '01:15',
  hero_url = 'https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg',
  thumbnail = 'https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg',
  video_url = 'https://vimeo.com/943691700', source_url = 'https://en.wikipedia.org/wiki/Iron_Man_3', sort_order = 30,
  summary = 'Besar Ismaili contributed compositing work to Marvel Studios'' Iron Man 3 as part of the Framestore team.',
  case_study = '{"eyebrow":"Founder film credit","headline":"Invisible compositing for a Marvel feature.","overview":"Feature-film work completed by Besar Ismaili at Framestore before V01.","contribution":"Compositing and final shot integration inside Framestore''s feature-film pipeline.","disclaimer":"This is an individual founder credit. V01 was not engaged as a vendor on the production."}'::jsonb
where title = 'Iron Man 3' and credit_type = 'Founder Prior Work';

update projects set
  year = 2014, runtime = '01:15',
  hero_url = 'https://upload.wikimedia.org/wikipedia/en/9/9e/Captain_America_The_Winter_Soldier_poster.jpg',
  thumbnail = 'https://upload.wikimedia.org/wikipedia/en/9/9e/Captain_America_The_Winter_Soldier_poster.jpg',
  video_url = 'https://vimeo.com/943691700', source_url = 'https://en.wikipedia.org/wiki/Captain_America:_The_Winter_Soldier', sort_order = 40,
  summary = 'Besar Ismaili contributed feature compositing to Captain America: The Winter Soldier as part of Framestore.',
  case_study = '{"eyebrow":"Founder film credit","headline":"Grounded action, finished frame by frame.","overview":"A founder credit from Besar Ismaili''s tenure at Framestore.","contribution":"Feature compositing and seamless integration for a large-scale action production.","disclaimer":"This is an individual founder credit. V01 was not engaged as a vendor on the production."}'::jsonb
where title = 'Captain America: The Winter Soldier' and credit_type = 'Founder Prior Work';

update projects set
  year = 2014, runtime = '01:15',
  hero_url = 'https://upload.wikimedia.org/wikipedia/en/5/55/Maleficent_poster.jpg',
  thumbnail = 'https://upload.wikimedia.org/wikipedia/en/5/55/Maleficent_poster.jpg',
  video_url = 'https://vimeo.com/943691700', source_url = 'https://en.wikipedia.org/wiki/Maleficent_(film)', sort_order = 50,
  summary = 'Besar Ismaili contributed feature-film compositing to Disney''s Maleficent as part of the MPC team.',
  case_study = '{"eyebrow":"Founder film credit","headline":"Fantasy worlds, integrated with restraint.","overview":"Feature compositing completed by Besar Ismaili at MPC before founding V01.","contribution":"Compositing support for live-action plates, digital environments and fantasy effects.","disclaimer":"This is an individual founder credit. V01 was not engaged as a vendor on the production."}'::jsonb
where title = 'Maleficent' and credit_type = 'Founder Prior Work';

-- Real work from the supplied Vimeo portfolio.
update projects set
  year = 2026, runtime = '01:15', director = 'Besar Ismaili', vfx_sup = 'Besar Ismaili',
  hero_url = 'https://i.vimeocdn.com/video/2128315108-8b9ca3a50eaeedfb99e53d509e08e64b6971e54daa547578d505ab12fcdb2254-d_1280?region=us',
  thumbnail = 'https://i.vimeocdn.com/video/2128315108-8b9ca3a50eaeedfb99e53d509e08e64b6971e54daa547578d505ab12fcdb2254-d_1280?region=us',
  video_url = 'https://vimeo.com/1169528617', source_url = 'https://vimeo.com/1169528617', sort_order = 1,
  tags = '{"generative-ai","commercial","three-day-production"}',
  summary = 'A quirky AI-generated ad for Beige Flag: a lost argyle sock crosses the city and finds its perfect mismatch in a stained food container. Made in three days.',
  case_study = '{"eyebrow":"AI-native commercial","headline":"A love story for the wonderfully imperfect.","overview":"A character-led spot for the Beige Flag dating app, built around an unlikely pair of discarded objects.","brief":"Make a distinctive, funny dating-app ad with a memorable visual hook and a production window measured in days.","approach":"The film was generated and finished as a compact AI-native production, moving from concept and character design through animation, edit, sound and final grade in three days.","contribution":"Creative direction, generative production, VFX, edit and finish by Besar Ismaili.","deliverables":"75-second hero film; social-ready master; campaign stills."}'::jsonb
where title = 'The Perfect Mismatch';

insert into projects (title, client, category, year, runtime, status, featured, director, vfx_sup, shots, tags, summary, hero_url, thumbnail, video_url, source_url, credit_type, studio, role, sort_order, case_study)
select 'A Dream in Hand', 'Beki Cars', 'Commercial', 2025, '00:55', 'Published', true, 'Besar Ismaili', 'Besar Ismaili', 0,
  '{"generative-ai","automotive","camera-free"}',
  'A camera-free film for Beki Cars about a lifelong dream made tangible through a 100% generative AI workflow.',
  'https://i.vimeocdn.com/video/2062464677-f193b37425d4795c6a854ae8a3295df9d5f02174238d22aef7c173394d543188-d_1280?region=us',
  'https://i.vimeocdn.com/video/2062464677-f193b37425d4795c6a854ae8a3295df9d5f02174238d22aef7c173394d543188-d_1280?region=us',
  'https://vimeo.com/1121408998', 'https://vimeo.com/1121408998', 'V01 Work', '', '', 2,
  '{"eyebrow":"Generative brand film","headline":"A lifelong dream, made without a camera.","overview":"An emotionally resonant automotive film created for Beki Cars using a fully generative workflow.","brief":"Turn the feeling of a dream car into a human story without a conventional shoot.","approach":"A 100% generative production spanning treatment, visual development, motion, compositing, edit and finish.","contribution":"Creative direction, AI image and video production, compositing and finishing by Besar Ismaili.","deliverables":"55-second hero film; digital master; campaign stills."}'::jsonb
where not exists (select 1 from projects where title = 'A Dream in Hand');

-- Bespoke GPT Image 2 thumbnails for published concept projects that have no source imagery.
update projects set hero_url = '/images/work/echoes-of-tomorrow.png', thumbnail = '/images/work/echoes-of-tomorrow.png', sort_order = 60 where title = 'Echoes of Tomorrow' and coalesce(hero_url,'') = '';
update projects set hero_url = '/images/work/dusk.png', thumbnail = '/images/work/dusk.png', sort_order = 70 where title = 'Dusk' and coalesce(hero_url,'') = '';
update projects set hero_url = '/images/work/the-light-between.png', thumbnail = '/images/work/the-light-between.png', sort_order = 80 where title = 'The Light Between' and coalesce(hero_url,'') = '';
update projects set hero_url = '/images/work/signal-lost.png', thumbnail = '/images/work/signal-lost.png', sort_order = 90 where title = 'Signal Lost' and coalesce(hero_url,'') = '';
update projects set hero_url = '/images/work/carrier-9.png', thumbnail = '/images/work/carrier-9.png', sort_order = 100 where title = 'Carrier-9' and coalesce(hero_url,'') = '';
update projects set hero_url = '/images/work/halflight.png', thumbnail = '/images/work/halflight.png', sort_order = 110 where title = 'Halflight' and coalesce(hero_url,'') = '';
update projects set hero_url = '/images/work/salt-and-static.png', thumbnail = '/images/work/salt-and-static.png', sort_order = 120 where title = 'Salt & Static' and coalesce(hero_url,'') = '';
update projects set hero_url = '/images/work/outpost-7.png', thumbnail = '/images/work/outpost-7.png', sort_order = 130 where title = 'Outpost 7' and coalesce(hero_url,'') = '';
update projects set hero_url = '/images/work/northbound.png', thumbnail = '/images/work/northbound.png', sort_order = 140 where title = 'Northbound' and coalesce(hero_url,'') = '';
update projects set hero_url = '/images/work/glass-coast.png', thumbnail = '/images/work/glass-coast.png', sort_order = 150 where title = 'Glass Coast' and coalesce(hero_url,'') = '';
update projects set hero_url = '/images/work/solar-field.png', thumbnail = '/images/work/solar-field.png', sort_order = 160 where title = 'Solar Field' and coalesce(hero_url,'') = '';
update projects set hero_url = '/images/work/room-24.png', thumbnail = '/images/work/room-24.png', sort_order = 170 where title = 'Room 24' and coalesce(hero_url,'') = '';
