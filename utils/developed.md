# States
- list

# Adress
- list with join in states

# Users
- middleware ensure authenticated
- Show Profile with in join adress
- Create Client
- Create Provider
- Authenticate

# Categories
- list categories

# Subcategories
- list subcategwories by category_id

# Products
- list products with join in subcategories and brands

# Brands
- list brands

# Measures
- list Measures

# Cultures
- list cultures

# Products_Measures
- middleware ensure is provider
- Create *** maybe treat numeric informations ***
- Update *** mayber treat numeric informations ***
- Delete
-list measures by provider with join provider product measure


# Areas
- index all by user_id
- Create (verifying duplicated names for the same user ) *** maybe treat numeric informations ***
- Update (verifying duplicated names for the same user ) *** maybe treat numeric informations ***
- Delete


# Seasons

TODO
- index all By user_id
- create (
  <!-- - name gonna be create using year from `startOn` and `endOn` and name (2015/2016 safra soja) -->
  <!-- - verify duplicated names for the same user -->
  - verify if startOn is not less than endOn `on the past season` in database
  <!-- - verify is startOn is not equal than endOn by `month` -->
  <!-- - verify if endOn is not less than startOn for the `current season` -->
  <!-- - verify if a season is not longer than a year -->
)
- update (
  - findById
  - Are the same rules like in create method
)
- Delete



# Compositions

TODO
- ensure is provider
- Create composition *** How to treat insert with array informations? bulkInsert()? ***
- Update composition *** How to treat insert with array informations? bulkInsert()? ***
- Delete by `provider_id` and `culture_id` and `productivity` to make sure you are deleting the right composition
- List with joins


Fazer try catch nos métodos delete pra evita erro de foreign key (implemented areas, productMeasure, season)


select user_id, end_on
from seasons
where user_id = 1
order by end_on desc
limit 1
