const proxy = 'https://corsproxy.io/?key=868412b1'
const url = '&url=https://world.openfoodfacts.org/category/gluten-free-foods.json'

const response = await fetch(proxy + encodeURIComponent(url))
const data = await response.json()
console.log(data)

// fix the proxy server, gfseed code is in Word doc bc I'm lazy. 
// cors proxy is meant to bypass restictions on the open food facts api
// currently i need to find out how to structure the corsprocy url