-- Enable UUID extension if not already enabled
create extension if not exists "uuid-ossp";

-- ==========================================
-- 1. Create Tables
-- ==========================================

-- LEADS TABLE
create table public.leads (
    id uuid default gen_random_uuid() primary key,
    business_name text not null,
    contact_email text not null,
    niche text,
    website_url text,
    status text default 'New'::text,
    notes text,
    last_contacted_at timestamp with time zone,
    created_at timestamp with time zone default now() not null
);

-- MESSAGES TABLE
create table public.messages (
    id uuid default gen_random_uuid() primary key,
    sender_name text not null,
    sender_email text not null,
    message_body text not null,
    is_read boolean default false not null,
    created_at timestamp with time zone default now() not null
);

-- PROJECTS TABLE
create table public.projects (
    id uuid default gen_random_uuid() primary key,
    lead_id uuid references public.leads(id) on delete set null,
    client_name text not null,
    project_type text,
    status text default 'Not Started'::text,
    notes text,
    due_date timestamp with time zone,
    last_updated_at timestamp with time zone,
    created_at timestamp with time zone default now() not null
);

-- IDEAS TABLE
create table public.ideas (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    description text,
    category text,
    notes text,
    target_date timestamp with time zone,
    created_at timestamp with time zone default now() not null
);

-- CONTENT POSTS TABLE
create table public.content_posts (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    platform text,
    scheduled_date date,
    draft_body text,
    status text default 'Idea'::text,
    notes text,
    created_at timestamp with time zone default now() not null
);

-- RESOURCES TABLE
create table public.resources (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    url text not null,
    category text,
    description text,
    created_at timestamp with time zone default now() not null
);

-- ==========================================
-- 2. Enable Row Level Security (RLS)
-- ==========================================

alter table public.leads enable row level security;
alter table public.messages enable row level security;
alter table public.projects enable row level security;
alter table public.ideas enable row level security;
alter table public.content_posts enable row level security;
alter table public.resources enable row level security;

-- ==========================================
-- 3. Create RLS Policies
-- ==========================================

-- LEADS & MESSAGES: Allow anyone (anon) to insert via website forms, but only authenticated users can read/edit.
create policy "Allow public inserts for leads" on public.leads for insert to anon, authenticated with check (true);
create policy "Allow authenticated read/write for leads" on public.leads for all to authenticated using (true) with check (true);

create policy "Allow public inserts for messages" on public.messages for insert to anon, authenticated with check (true);
create policy "Allow authenticated read/write for messages" on public.messages for all to authenticated using (true) with check (true);

-- ALL OTHER TABLES: Strictly for authenticated admin users only.
create policy "Allow authenticated read/write for projects" on public.projects for all to authenticated using (true) with check (true);
create policy "Allow authenticated read/write for ideas" on public.ideas for all to authenticated using (true) with check (true);
create policy "Allow authenticated read/write for content_posts" on public.content_posts for all to authenticated using (true) with check (true);
create policy "Allow authenticated read/write for resources" on public.resources for all to authenticated using (true) with check (true);
