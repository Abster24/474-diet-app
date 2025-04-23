import { supabase } from './supabase.js'; // Import the Supabase client


const fetchProductsAndInsertToDB = async () => {
  try {
    // Fetch data from the Vercel proxy endpoint
    const response = await fetch('https://my-vercel-proxy-henna.vercel.app/api/glutenFree')
    const products = await response.json()

    // Iterate over products and insert them into Supabase
    const { data, error } = await supabase
      .from('gluten_free_products')  // Make sure this table exists in Supabase
      .upsert(products, { onConflict: ['name'] })  // Using 'name' as a conflict resolution

    if (error) {
      console.error('Error inserting data into Supabase:', error)
      return
    }

    console.log('Successfully inserted products into Supabase:', data)
  } catch (error) {
    console.error('Error fetching data or inserting into Supabase:', error)
  }
}

// Run the function once
fetchProductsAndInsertToDB()
