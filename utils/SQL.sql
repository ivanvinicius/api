CREATE DATABASE farmbud;

CREATE TABLE measures (
  id uuid NOT NULL,
  name VARCHAR NOT NULL,
  CONSTRAINT pk_measures PRIMARY KEY (id)
);

CREATE TABLE cultures (
  id uuid NOT NULL,
  name VARCHAR NOT NULL,
  CONSTRAINT pk_cultures PRIMARY KEY (id)
);

CREATE TABLE brands (
  id uuid NOT NULL,
  name VARCHAR NOT NULL,
  CONSTRAINT pk_brands PRIMARY KEY (id)
);

CREATE TABLE categories (
  id uuid NOT NULL,
  parent_id uuid,
  name VARCHAR NOT NULL,
  mpath VARCHAR DEFAULT '' NOT NULL,
  CONSTRAINT pk_categories PRIMARY KEY (id)
);

CREATE TABLE products (
  id uuid NOT NULL,
  category_id uuid NOT NULL,
  brand_id uuid NOT NULL,
  name VARCHAR NOT NULL,
  composition VARCHAR,
  CONSTRAINT pk_products PRIMARY KEY (id)
);

CREATE TABLE addresses (
  id uuid NOT NULL,
  parent_id uuid,
  name VARCHAR NOT NULL,
  mpath VARCHAR DEFAULT '' NOT NULL,
  CONSTRAINT pk_addresses PRIMARY KEY (id)
);

CREATE TABLE users (
  id uuid NOT NULL,
  address_id uuid,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  provider BOOLEAN NOT NULL,
  CONSTRAINT pk_users PRIMARY KEY (id)
);

CREATE TABLE portfolios (
  id uuid NOT NULL,
  parent_id uuid,
  provider_id uuid NOT NULL,
  product_id uuid,
  culture_id uuid,
  measure_id uuid,
  size VARCHAR,
  price VARCHAR,
  recommentation VARCHAR,
  productivity NUMERIC,
  mpath VARCHAR DEFAULT '' NOT NULL,
  CONSTRAINT pk_portfolios PRIMARY KEY (id)
);

CREATE TABLE seasons (
  id uuid NOT NULL,
  user_id uuid NOT NULL,
  name VARCHAR NOT NULL,
  description VARCHAR,
  start_at DATE NOT NULL,
  end_at DATE NOT NULL,
  CONSTRAINT pk_seasons PRIMARY KEY (id)
);

CREATE TABLE areas (
  id uuid NOT NULL,
  user_id uuid NOT NULL,
  name VARCHAR NOT NULL,
  description VARCHAR,
  size NUMERIC(10,2) NOT NULL,
  longitude NUMERIC NOT NULL,
  latitude NUMERIC NOT NULL,
  CONSTRAINT pk_areas PRIMARY KEY (id)
);

CREATE TABLE budgets (
  id uuid NOT NULL,
  area_id uuid NOT NULL,
  season_id uuid NOT NULL,
  portfolio_id uuid NOT NULL,
  created_at DATE NOT NULL,
  updated_at DATE NOT NULL,
  CONSTRAINT pk_budgets PRIMARY KEY (id)
);


-- CONSTRAINTS


ALTER TABLE portfolios ADD CONSTRAINT measures_portfolio_fk
FOREIGN KEY (measure_id)
REFERENCES measures (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE portfolios ADD CONSTRAINT cultures_portfolio_fk
FOREIGN KEY (culture_id)
REFERENCES cultures (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE products ADD CONSTRAINT brands_products_fk
FOREIGN KEY (brand_id)
REFERENCES brands (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE categories ADD CONSTRAINT categories_categories_fk
FOREIGN KEY (parent_id)
REFERENCES categories (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE products ADD CONSTRAINT categories_products_fk
FOREIGN KEY (category_id)
REFERENCES categories (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE portfolios ADD CONSTRAINT products_portfolio_fk
FOREIGN KEY (product_id)
REFERENCES products (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE addresses ADD CONSTRAINT addresses_addresses_fk
FOREIGN KEY (parent_id)
REFERENCES addresses (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE users ADD CONSTRAINT addresses_users_fk
FOREIGN KEY (address_id)
REFERENCES addresses (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE areas ADD CONSTRAINT users_areas_fk
FOREIGN KEY (user_id)
REFERENCES users (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE seasons ADD CONSTRAINT users_seasons_fk
FOREIGN KEY (user_id)
REFERENCES users (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE portfolios ADD CONSTRAINT users_portfolio_fk
FOREIGN KEY (provider_id)
REFERENCES users (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE portfolios ADD CONSTRAINT portfolio_portfolio_fk
FOREIGN KEY (parent_id)
REFERENCES portfolios (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE budgets ADD CONSTRAINT portfolios_budgets_fk
FOREIGN KEY (portfolio_id)
REFERENCES portfolios (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE budgets ADD CONSTRAINT seasons_budgets_fk
FOREIGN KEY (season_id)
REFERENCES seasons (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE budgets ADD CONSTRAINT areas_budgets_fk
FOREIGN KEY (area_id)
REFERENCES areas (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;


-- INSERTS

insert into categories (id, parent_id, name, mpath) values (
  'e5b69bc8-7677-424d-88da-d603a6b38dc2',
  null,
  'Fertilizantes',
  'e5b69bc8-7677-424d-88da-d603a6b38dc2'
)

insert into categories (id, parent_id, name, mpath) values (
	'f9e23f62-1d42-4a22-bda0-1c2c549e313a',
	'e5b69bc8-7677-424d-88da-d603a6b38dc2',
	'Químico',
	'e5b69bc8-7677-424d-88da-d603a6b38dc2.f9e23f62-1d42-4a22-bda0-1c2c549e313a'
)


