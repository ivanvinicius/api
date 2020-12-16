CREATE DATABASE farmbud;

--inside farmbud database run the command below
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
  name VARCHAR NOT NULL,
  CONSTRAINT pk_categories PRIMARY KEY (id)
);


CREATE TABLE public.subcategories (
  id uuid DEFAULT uuid_generate_v4 (),
  category_id uuid NOT NULL,
  name VARCHAR NOT NULL,
  CONSTRAINT pk_subcategories PRIMARY KEY (id)
);


CREATE TABLE public.products (
  id uuid DEFAULT uuid_generate_v4 (),
  subcategory_id uuid NOT NULL,
  brand_id uuid NOT NULL,
  name VARCHAR NOT NULL,
  composition VARCHAR,
  CONSTRAINT pk_products PRIMARY KEY (id)
);


CREATE TABLE public.cities (
  id uuid DEFAULT uuid_generate_v4 (),
  state_id uuid NOT NULL,
  name VARCHAR NOT NULL,
  CONSTRAINT pk_cities PRIMARY KEY (id)
);


CREATE TABLE public.users (
  id uuid DEFAULT uuid_generate_v4 (),
  city_id uuid,
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
  start_on DATE NOT NULL,
  end_on DATE NOT NULL,
  CONSTRAINT pk_seasons PRIMARY KEY (id, user_id)
);


CREATE TABLE public.products_measures (
  id uuid DEFAULT uuid_generate_v4 (),
  provider_id uuid NOT NULL,
  product_id uuid NOT NULL,
  measure_id uuid NOT NULL,
  volume VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  CONSTRAINT pk_products_measures PRIMARY KEY (id, provider_id)
);


CREATE TABLE public.compositions (
  id uuid DEFAULT uuid_generate_v4 (),
  provider_id uuid NOT NULL,
  culture_id uuid NOT NULL,
  product_measure_id uuid NOT NULL,
  productivity SMALLINT NOT NULL,
  volume VARCHAR NOT NULL,
  CONSTRAINT pk_compositions PRIMARY KEY (id, provider_id, culture_id, productivity)
);


CREATE TABLE public.areas (
  id uuid DEFAULT uuid_generate_v4 (),
  user_id uuid NOT NULL,
  measure_id uuid NOT NULL,
  name VARCHAR NOT NULL,
  size VARCHAR NOT NULL,
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
  productivity SMALLINT NOT NULL,
  CONSTRAINT pk_budgets PRIMARY KEY (id)
);











ALTER TABLE public.cities ADD CONSTRAINT state_adress_fk
FOREIGN KEY (state_id)
REFERENCES public.states (id)
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
FOREIGN KEY (measure_id)
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

ALTER TABLE public.products ADD CONSTRAINT brands_products_fk
FOREIGN KEY (brand_id)
REFERENCES public.brands (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.subcategories ADD CONSTRAINT categories_subcategories_fk
FOREIGN KEY (category_id)
REFERENCES public.categories (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.products ADD CONSTRAINT subcategories_products_fk
FOREIGN KEY (subcategory_id)
REFERENCES public.subcategories (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.products_measures ADD CONSTRAINT products_products_measures_fk
FOREIGN KEY (product_id)
REFERENCES public.products (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.users ADD CONSTRAINT cities_users_fk
FOREIGN KEY (city_id)
REFERENCES public.cities (id)
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
FOREIGN KEY (provider_id, composition_id, culture_id, productivity)
REFERENCES public.compositions (provider_id, id, culture_id, productivity)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.budgets ADD CONSTRAINT areas_budgets_fk
FOREIGN KEY (area_id)
REFERENCES public.areas (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;













--CULTURES
INSERT INTO cultures (id, name)
VALUES ('c479636b-3b69-4b5a-983f-8740c52b0133', 'Soja');

INSERT INTO cultures (id, name)
VALUES ('411a5c4e-4ccd-43fc-ae1e-5bf728409cc4', 'Tabaco');

INSERT INTO cultures (id, name)
VALUES ('03bbd006-73d1-46a8-9f00-e19fa30b3b36', 'Milho');

INSERT INTO cultures (id, name)
VALUES ('f07dfe2e-dee9-4b27-a3af-9717be02063b', 'Feijão');

INSERT INTO cultures (id, name)
VALUES ('40d446d8-82fe-4592-ab33-628100545a00', 'Trigo');

--STATES
INSERT INTO states (id, name)
VALUES ('4b8ccbb3-d742-43bd-8a45-55da19ebbe98','SC');

INSERT INTO states (id, name)
VALUES ('0809f834-8b99-489c-ae74-4f50f7caa2d0','PR');

INSERT INTO states (id, name)
VALUES ('b89e3743-561a-4271-96b4-43b252d91de7','RS');

--CITIES
INSERT INTO cities (id, state_id, name)
VALUES ('9887a628-275c-400b-92c6-5ea8f64fbeb4', '4b8ccbb3-d742-43bd-8a45-55da19ebbe98','Rio do Sul');

INSERT INTO cities (id, state_id, name)
VALUES ('b0eff998-90e6-4464-9014-e9d53c241d93', '4b8ccbb3-d742-43bd-8a45-55da19ebbe98','Taió');

INSERT INTO cities (id, state_id, name)
VALUES ('f3b48706-ac85-4fdc-bfc1-1ea689349d00', '4b8ccbb3-d742-43bd-8a45-55da19ebbe98','Ituporanga');

INSERT INTO cities (id, state_id, name)
VALUES ('46fabc7a-e3fc-444d-a390-cf7732db4ae5', '4b8ccbb3-d742-43bd-8a45-55da19ebbe98','Campos Novos');

INSERT INTO cities (id, state_id, name)
VALUES ('0a287114-843d-44af-89d5-c9316c53832b', '0809f834-8b99-489c-ae74-4f50f7caa2d0','Curitiba');

INSERT INTO cities (id, state_id, name)
VALUES ('d86cb8e7-5781-4e4c-b566-35f61da1607d', 'b89e3743-561a-4271-96b4-43b252d91de7','Porto Alegre');

--CATEGORIES
INSERT INTO categories (id, name)
VALUES ('ff0c8ea2-c7b4-4285-b6fb-f796dac72cff','Fertilizantes');

INSERT INTO categories (id, name)
VALUES ('502b0598-4650-4b33-a5f2-5b2ca527b2b6','Agrotóxicos');

--SUBCATEGORIES
INSERT INTO subcategories (id, category_id, name)
VALUES ('89dd70e3-532e-4d68-b035-38214a7bfe06','ff0c8ea2-c7b4-4285-b6fb-f796dac72cff','Químico');

INSERT INTO subcategories (id, category_id, name)
VALUES ('37894791-5e1b-4d30-b9ba-0b71f239152e','ff0c8ea2-c7b4-4285-b6fb-f796dac72cff','Orgânico');

INSERT INTO subcategories (id, category_id, name)
VALUES ('218f4073-dee4-4a8a-bfe7-8c037cc4ddc2','502b0598-4650-4b33-a5f2-5b2ca527b2b6','Herbicida');

INSERT INTO subcategories (id, category_id, name)
VALUES ('e089ceef-1d84-44a7-93c9-b506fdc700b7','502b0598-4650-4b33-a5f2-5b2ca527b2b6','Fungicida');

INSERT INTO subcategories (id, category_id, name)
VALUES ('4d2843b5-a0aa-4a5e-be59-c61ec6786d57','502b0598-4650-4b33-a5f2-5b2ca527b2b6','Inseticida');

--BRANDS
INSERT INTO brands (id, name)
VALUES ('de64b65b-c9c0-49db-a409-a6cc7a1ef7f2','Timac');

INSERT INTO brands (id, name)
VALUES ('6f82534a-9726-44f3-a33b-89618a2cb81b','Bayer');

INSERT INTO brands (id, name)
VALUES ('20895509-0776-4ff3-ad95-9fcd376fc1b2','Yara');

--MEASURES
INSERT INTO measures (id, name, type)
VALUES ('de447b6e-5137-4c03-85af-b10ae8c0c997','Ml', 1);

INSERT INTO measures (id, name, type)
VALUES ('6ad926f9-d050-4af1-b6d0-ba32cbef7e4c','L', 1);

INSERT INTO measures (id, name, type)
VALUES ('8d25a17a-3a41-4ddb-a30f-836f2ccd9bcd','Kg', 1);

INSERT INTO measures (id, name, type)
VALUES ('e268ca63-23a1-4a45-8c8f-18075d53e72d','Hectare(s)', 2);

INSERT INTO measures (id, name, type)
VALUES ('b018697a-48c0-4d5a-bb2e-12546283b7f7','Acre(s)', 2);


--PRODUCTS
INSERT INTO products (id, subcategory_id, brand_id, name, composition)
VALUES (
  '90c28094-7024-4a24-b9b5-c3cf33c1e71c',
  '89dd70e3-532e-4d68-b035-38214a7bfe06',
  'de64b65b-c9c0-49db-a409-a6cc7a1ef7f2',
  'Physalg',
  'H2ON13'
  );

INSERT INTO products (id, subcategory_id, brand_id, name, composition)
VALUES (
  '3dd34c5e-3d3b-48bf-a843-fccce491e867',
  '89dd70e3-532e-4d68-b035-38214a7bfe06',
  'de64b65b-c9c0-49db-a409-a6cc7a1ef7f2',
  'Top-phos',
  'K8R19'
  );

INSERT INTO products (id, subcategory_id, brand_id, name, composition)
VALUES (
  'a5688f82-c013-4f90-930c-90e3a86a9b7b',
  '89dd70e3-532e-4d68-b035-38214a7bfe06',
  'de64b65b-c9c0-49db-a409-a6cc7a1ef7f2',
  'Sulfamo',
  'A1N18'
  );

INSERT INTO products (id, subcategory_id, brand_id, name, composition)
VALUES (
  '727747db-ce6e-43e7-a01c-86241b8121ba',
  '89dd70e3-532e-4d68-b035-38214a7bfe06',
  '20895509-0776-4ff3-ad95-9fcd376fc1b2',
  'Ureia Peletizada',
  'N12K8E2'
  );

INSERT INTO products (id, subcategory_id, brand_id, name, composition)
VALUES (
  '0477a3d5-93ec-4ee6-bb98-ed3592c1ead3',
  '89dd70e3-532e-4d68-b035-38214a7bfe06',
  '20895509-0776-4ff3-ad95-9fcd376fc1b2',
  'Ureia',
  'N12'
  );

INSERT INTO products (id, subcategory_id, brand_id, name, composition)
VALUES (
  '82e275da-57cf-4272-994c-ce0b6e1274ef',
  '218f4073-dee4-4a8a-bfe7-8c037cc4ddc2',
  '6f82534a-9726-44f3-a33b-89618a2cb81b',
  'Round Up Ultra',
  null
  );
