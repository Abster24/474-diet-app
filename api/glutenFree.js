export default async function handler(req, res) {
    const openFoodFactsUrl = 'https://world.openfoodfacts.org/category/gluten-free-foods.json'
  
    try {
      const response = await fetch(openFoodFactsUrl)
      const data = await response.json()
  
      const cleaned = data.products.slice(0, 25).map((product) => ({
        name: product.product_name,
        ingredients: product.ingredients_text || '',
        allergens: (product.allergens_tags || []).join(', '),
        image: product.image_url || ''
      }))
  
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(200).json(cleaned)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data', details: error.message })
    }
  }
  