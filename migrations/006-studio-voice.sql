-- Studio voice: keep the founder's name out of the copy stored in Supabase.
-- Founder film credits stay labelled as founder credits; they now say
-- "our founder" instead of naming him. V01 projects credit the studio.

-- Founder film credits: summaries (page lede and meta description).
update projects set summary = 'Our founder contributed feature-film compositing as part of Framestore''s Montreal team, helping integrate complex environments, characters, and effects into James Gunn''s Superman.'
where title = 'Superman' and credit_type = 'Founder Prior Work';

update projects set summary = 'Feature-film compositing by our founder across MPC and Framestore for the live-action Transformers franchise.'
where title = 'Transformers: Rise of the Beasts' and credit_type = 'Founder Prior Work';

update projects set summary = 'Our founder contributed compositing work to Marvel Studios'' Iron Man 3 as part of the Framestore team.'
where title = 'Iron Man 3' and credit_type = 'Founder Prior Work';

update projects set summary = 'Our founder contributed feature compositing to Captain America: The Winter Soldier as part of Framestore.'
where title = 'Captain America: The Winter Soldier' and credit_type = 'Founder Prior Work';

update projects set summary = 'Our founder contributed feature-film compositing to Disney''s Maleficent as part of the MPC team.'
where title = 'Maleficent' and credit_type = 'Founder Prior Work';

-- Founder film credits: case-study overviews.
update projects set case_study = jsonb_set(case_study, '{overview}',
  to_jsonb('A production-side credit from our founder''s work with Framestore.'::text))
where title = 'Superman' and credit_type = 'Founder Prior Work';

update projects set case_study = jsonb_set(case_study, '{overview}',
  to_jsonb('A dedicated reel highlighting our founder''s compositing contribution to Transformers: Rise of the Beasts.'::text))
where title = 'Transformers: Rise of the Beasts' and credit_type = 'Founder Prior Work';

update projects set case_study = jsonb_set(case_study, '{overview}',
  to_jsonb('Feature-film work completed by our founder at Framestore.'::text))
where title = 'Iron Man 3' and credit_type = 'Founder Prior Work';

update projects set case_study = jsonb_set(case_study, '{overview}',
  to_jsonb('A founder credit from compositing work at Framestore.'::text))
where title = 'Captain America: The Winter Soldier' and credit_type = 'Founder Prior Work';

update projects set case_study = jsonb_set(case_study, '{overview}',
  to_jsonb('Feature compositing completed by our founder at MPC.'::text))
where title = 'Maleficent' and credit_type = 'Founder Prior Work';

-- V01 projects: credit the studio, not one named person.
update projects set director = 'VERSION ONE',
  case_study = jsonb_set(case_study, '{contribution}',
    to_jsonb('Creative direction, generative production, VFX, edit and finish by VERSION ONE.'::text))
where title = 'The Perfect Mismatch';

update projects set director = 'VERSION ONE',
  case_study = jsonb_set(case_study, '{contribution}',
    to_jsonb('Creative direction, AI image and video production, compositing and finishing by VERSION ONE.'::text))
where title = 'A Dream in Hand';
