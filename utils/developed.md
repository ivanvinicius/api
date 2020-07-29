const user = await this.ormRepository
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .innerJoinAndSelect('user.adress', 'adress')
      .innerJoinAndSelect('adress.state', 'state')
      .getRawAndEntities()

    return user.entities[0];


# States
- list

# Adress
- list with join in states

# Users
- Show Profile with or without join adress
- Create Client
- Create Provider
- Create Session

# Categories
*** TODO create a querySelector to select categories and subcategories together  ***
- list categories
- list subcategories by category_id

# Products
- list products with join in categories

# Brands
- list brands

# Measures
- list Measures

# Cultures
- list cultures

# Products_Measures

*** TODO Colorcar joins nas entities  / fazer a listagem de products_measures coma informações relevantes para as compositions ***
- Create
- Update
- Delete


