-- Tablas opcionales del sitio institucional. Aplicar en un proyecto
-- Supabase de Sudamérica, distinto del EHR.

create table if not exists public.quotes (
  id uuid primary key,
  created_at timestamptz not null default now(),
  name text not null,
  rut text,
  phone text not null,
  email text,
  prevision text,
  items jsonb not null,
  consent boolean not null default false
);

create table if not exists public.data_subject_requests (
  id uuid primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  rut text,
  right text not null,
  detail text not null,
  status text not null default 'received'
);

alter table public.quotes enable row level security;
alter table public.data_subject_requests enable row level security;
-- Sin políticas anon: solo service role desde las API routes.
