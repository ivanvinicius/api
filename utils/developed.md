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


# Compositions
TODO
- ensure is provider
- Create composition *** How to treat insert with array informations? bulkInsert()? ***
- Update composition *** How to treat insert with array informations? bulkInsert()? ***
- Delete by `provider_id` and `culture_id` and `productivity` to make sure you are deleting the right composition
- List with joins
