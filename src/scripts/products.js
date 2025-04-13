
let products = ['B0CJ1YZBD1','B07CL1SRNB','B0CM6W6FS1'];

/*for (let product in products) {
	displayProducts(products[product]);
}*/

async function getProduct (asin) {
	const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${asin}&countrys=US`;
	const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7455ddc7f6msh3b39c62d89e23a7p10679fjsneb6804560135',
		'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
	}
};
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
}

async function displayProducts(asin) {
	const products = await getProduct(asin);
	const productContainer = document.getElementById('products');

		const productDiv = document.createElement('div');
		productDiv.classList.add('products','summary-card', 'w3-mobile', 'w3-panel', 'w3-card', 'w3-left');
		productDiv.innerHTML = `
			<img src="${products.data.product_photo}" alt="${products.data.product_title}" class="product-image">
			<h3>${products.data.product_title}</h3>
			<p>${products.data.product_description}</p>
			<p>Price: ${products.data.product_original_price}</p>
			<a href="${products.data.product_url}" target="_blank">View on Amazon</a>`;
		productContainer.appendChild(productDiv);
}