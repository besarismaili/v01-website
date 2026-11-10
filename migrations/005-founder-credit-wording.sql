-- Founder film credits: drop "before V01" from the overviews.
-- V01 work now goes back to 2017 (Kliko, Inkmate), so saying these credits
-- came before V01 is no longer accurate. They are work at other studios.
update projects set case_study = jsonb_set(case_study, '{overview}',
  to_jsonb('A production-side credit from Besar Ismaili''s work with Framestore.'::text))
where title = 'Superman' and credit_type = 'Founder Prior Work';

update projects set case_study = jsonb_set(case_study, '{overview}',
  to_jsonb('Feature-film work completed by Besar Ismaili at Framestore.'::text))
where title = 'Iron Man 3' and credit_type = 'Founder Prior Work';

update projects set case_study = jsonb_set(case_study, '{overview}',
  to_jsonb('Feature compositing completed by Besar Ismaili at MPC.'::text))
where title = 'Maleficent' and credit_type = 'Founder Prior Work';
