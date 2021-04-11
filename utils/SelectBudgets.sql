
-- select all informations on budget

SELECT Budget.id AS id,
    Brand.id AS brand_id,
    Brand.name As brand_name,
    Product.id AS product_id,
    Product.name AS product_name,
	  Budget.amount_usage AS amount_usage,
    Measure.id AS measure_id,
    Measure.name AS measure_name,
	  Budget.amount_quantity AS amount_quantity,
	  Budget.amount_cost AS amount_cost,
    Composition.productivity AS productivity,
	  Culture.id AS culture_id,
    Culture.name AS culture_name,
    Area.id AS area_id,
    Area.name AS area_name,
    Area.size AS area_size,
    Season.id AS season_id,
    Season.name AS season_name,
    Season.description AS season_description,
    Usu.id AS user_id,
    Usu.name AS user_name,
    Provider.id AS provider_id,
    Provider.name AS provider_name
FROM budgets as Budget
LEFT JOIN users AS Usu
ON Budget.user_id = Usu.id
LEFT JOIN users AS Provider
ON Budget.provider_id = Provider.id
LEFT JOIN areas AS Area
ON Budget.area_id = Area.id
LEFT JOIN seasons AS Season
ON Budget.season_id = Season.id
LEFT JOIN portfolios AS Composition
ON Budget.portfolio_id = Composition.id
LEFT JOIN cultures AS Culture
ON Composition.culture_id = Culture.id
LEFT JOIN portfolios AS Portfolio
ON Composition.parent_id = Portfolio.id
LEFT JOIN measures AS Measure
ON Portfolio.measure_id = Measure.id
LEFT JOIN products AS Product
ON Portfolio.product_id = Product.id
LEFT JOIN brands AS Brand
ON Product.brand_id = Brand.id
