CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE public.states (
  id uuid DEFAULT uuid_generate_v4 (),
  name VARCHAR NOT NULL,
  CONSTRAINT pk_states PRIMARY KEY (id)
);


CREATE TABLE public.cultures (
  id uuid DEFAULT uuid_generate_v4 (),
  name VARCHAR NOT NULL,
  CONSTRAINT pk_cultures PRIMARY KEY (id)
);


CREATE TABLE public.measures (
  id uuid DEFAULT uuid_generate_v4 (),
  name VARCHAR NOT NULL,
  type SMALLINT NOT NULL,
  CONSTRAINT pk_measures PRIMARY KEY (id)
);


CREATE TABLE public.brands (
  id uuid DEFAULT uuid_generate_v4 (),
  name VARCHAR NOT NULL,
  CONSTRAINT pk_brands PRIMARY KEY (id)
);


CREATE TABLE public.categories (
  id uuid DEFAULT uuid_generate_v4 (),
  category_id uuid,
  name VARCHAR NOT NULL,
  CONSTRAINT pk_categories PRIMARY KEY (id)
);


CREATE TABLE public.products (
  id uuid DEFAULT uuid_generate_v4 (),
  category_id uuid NOT NULL,
  name VARCHAR NOT NULL,
  composition VARCHAR,
  CONSTRAINT pk_products PRIMARY KEY (id)
);


CREATE TABLE public.adresses (
  id uuid DEFAULT uuid_generate_v4 (),
  provider_id uuid NOT NULL,
  state_id uuid NOT NULL,
  city VARCHAR NOT NULL,
  CONSTRAINT pk_adresses PRIMARY KEY (id, provider_id)
);


CREATE TABLE public.users (
  id uuid DEFAULT uuid_generate_v4 (),
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  provider BOOLEAN NOT NULL,
  CONSTRAINT pk_users PRIMARY KEY (id)
);


CREATE TABLE public.seasons (
  id uuid DEFAULT uuid_generate_v4 (),
  user_id uuid NOT NULL,
  name VARCHAR NOT NULL,
  initiate DATE NOT NULL,
  terminate DATE NOT NULL,
  CONSTRAINT pk_seasons PRIMARY KEY (id, user_id)
);


CREATE TABLE public.products_measures (
  id uuid DEFAULT uuid_generate_v4 (),
  provider_id uuid NOT NULL,
  product_id uuid NOT NULL,
  brand_id uuid NOT NULL,
  measure_id uuid NOT NULL,
  volume NUMERIC(10,2) NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  CONSTRAINT pk_products_measures PRIMARY KEY (id, provider_id)
);


CREATE TABLE public.compositions (
  id uuid DEFAULT uuid_generate_v4 (),
  provider_id uuid NOT NULL,
  culture_id uuid NOT NULL,
  product_measure_id uuid NOT NULL,
  measure_id uuid NOT NULL,
  volume NUMERIC(10,2) NOT NULL,
  productivity SMALLINT NOT NULL,
  CONSTRAINT pk_compositions PRIMARY KEY (id, provider_id, culture_id)
);


CREATE TABLE public.areas (
  id uuid DEFAULT uuid_generate_v4 (),
  user_id uuid NOT NULL,
  measures_id uuid NOT NULL,
  name VARCHAR NOT NULL,
  size NUMERIC(10,2) NOT NULL,
  CONSTRAINT pk_areas PRIMARY KEY (id)
);


CREATE TABLE public.budgets (
  id uuid DEFAULT uuid_generate_v4 (),
  area_id uuid NOT NULL,
  season_id uuid NOT NULL,
  user_id uuid NOT NULL,
  provider_id uuid NOT NULL,
  composition_id uuid NOT NULL,
  culture_id uuid NOT NULL,
  CONSTRAINT pk_budgets PRIMARY KEY (id)
);


ALTER TABLE public.adresses ADD CONSTRAINT states_adresses_fk
FOREIGN KEY (state_id)
REFERENCES public.states (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.adresses ADD CONSTRAINT providers_adresses_fk
FOREIGN KEY (provider_id)
REFERENCES public.users (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.compositions ADD CONSTRAINT cultures_compositions_fk
FOREIGN KEY (culture_id)
REFERENCES public.cultures (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.areas ADD CONSTRAINT measures_areas_fk
FOREIGN KEY (measures_id)
REFERENCES public.measures (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.products_measures ADD CONSTRAINT measures_products_measures_fk
FOREIGN KEY (measure_id)
REFERENCES public.measures (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.compositions ADD CONSTRAINT measures_compositions_fk
FOREIGN KEY (measure_id)
REFERENCES public.measures (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.products_measures ADD CONSTRAINT brands_products_measures_fk
FOREIGN KEY (brand_id)
REFERENCES public.brands (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.categories ADD CONSTRAINT subcategories_categories_fk
FOREIGN KEY (category_id)
REFERENCES public.categories (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.products ADD CONSTRAINT categories_products_fk
FOREIGN KEY (category_id)
REFERENCES public.categories (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.products_measures ADD CONSTRAINT products_products_measures_fk
FOREIGN KEY (product_id)
REFERENCES public.products (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.areas ADD CONSTRAINT users_areas_fk
FOREIGN KEY (user_id)
REFERENCES public.users (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.products_measures ADD CONSTRAINT users_products_measures_fk
FOREIGN KEY (provider_id)
REFERENCES public.users (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.seasons ADD CONSTRAINT users_seasons_fk
FOREIGN KEY (user_id)
REFERENCES public.users (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.budgets ADD CONSTRAINT seasons_budgets_fk
FOREIGN KEY (user_id, season_id)
REFERENCES public.seasons (user_id, id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.compositions ADD CONSTRAINT products_measures_compositions_fk
FOREIGN KEY (provider_id, product_measure_id)
REFERENCES public.products_measures (provider_id, id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.budgets ADD CONSTRAINT compositions_budgets_fk
FOREIGN KEY (provider_id, composition_id, culture_id)
REFERENCES public.compositions (provider_id, id, culture_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.budgets ADD CONSTRAINT areas_budgets_fk
FOREIGN KEY (area_id)
REFERENCES public.areas (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
