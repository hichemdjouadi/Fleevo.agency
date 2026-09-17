ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS phone_number text;
NOTIFY pgrst, 'reload schema';
