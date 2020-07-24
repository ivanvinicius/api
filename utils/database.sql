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
  state_id uuid NOT NULL,
  user_id uuid NOT NULL,
  city VARCHAR NOT NULL,
  CONSTRAINT pk_adresses PRIMARY KEY (id)
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

ALTER TABLE public.adresses ADD CONSTRAINT users_adresses_fk
FOREIGN KEY (user_id)
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


INSERT INTO states (name) VALUES ('SC');
INSERT INTO states (name) VALUES ('PR');
INSERT INTO states (name) VALUES ('RS');

INSERT INTO cultures (name) VALUES ('Soja');
INSERT INTO cultures (name) VALUES ('Milho');
INSERT INTO cultures (name) VALUES ('Tabaco');

INSERT INTO measures (name, type) VALUES ('Kg', 1);
INSERT INTO measures (name, type) VALUES ('Lt', 1);
INSERT INTO measures (name, type) VALUES ('Hectares', 2);
INSERT INTO measures (name, type) VALUES ('Bushels', 2);

INSERT INTO brands (name) VALUES ('Timac');
INSERT INTO brands (name) VALUES ('Nideira');
INSERT INTO brands (name) VALUES ('Pionner');

insert into categories (category_id, name) values (null, 'Agrotóxicos');
insert into categories (category_id, name) values ('f1383621-4f9d-4f90-8f13-96970cf92334', 'Herbicida');
insert into categories (category_id, name) values (null, 'Fertilizantes');

insert into products (category_id, name, composition) values ('c457d187-9f9d-47d9-9e0b-2a65197a6679', 'Prime Plus', null);

insert into users (adresses_id, name, email, password, provider )
values ('a6046f76-7887-44e1-ab57-8c7f7c53498f', 'Ivan Vinicius Boneti', 'ivan@client.com', '123456', false);

insert into users (adresses_id, name, email, password, provider )
values ('97d07b22-ff54-46cb-a46a-2b5e366b9049', 'Cravil Coop', 'cravil@provider.com', '123456', true);

insert into products_measures (
 provider_id,
 product_id,
 brand_id,
 measure_id,
 volume,
 price
)
values (
  '4ab496a7-90a5-49f0-8869-bfdd6cdd0f91',
  '14e19be1-64b1-4248-a727-a658d8053c06',
  'f733e18c-b443-40af-b240-1f550e698273',
  '149cf7fb-6c2f-4e1c-96e2-e52c6f530a35',
  5,
  895.33);
