const dataElem = document.getElementById("data-products");
const searchElem = document.getElementById("search-input");
let products = [];

// Fetch data from the API
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    products = data;
    renderProducts(products);
  })
  .catch(error => console.error('Error fetching data:', error));


function renderProducts(products) {
    dataElem.innerText = '';

  for(let i = 0; i < products.length; i++) {
    let product = products[i];

    const liElem = document.createElement("li");

    const idElem = document.createElement("h2");
    idElem.innerText = `ID: ${product.id}`;

    const titleElem = document.createElement("p");
    titleElem.innerText = `Title: ${product.title}`;

    const priceElem = document.createElement("p")
    priceElem.innerText = `Price: $${product.price}`;

    const descElem = document.createElement("p")
    descElem.innerText = `Description: ${product.description}`;

    const cateElem = document.createElement("p")
    cateElem.innerText = `Category: ${product.category}`;

    const imgElem = document.createElement("img")
    imgElem.src = product.image;
    imgElem.alt = product.title;

    liElem.appendChild(idElem);
    liElem.appendChild(titleElem);  
    liElem.appendChild(priceElem);  
    liElem.appendChild(descElem);  
    liElem.appendChild(cateElem);  
    liElem.appendChild(imgElem);  

    dataElem.appendChild(liElem);
  }
}


// Search functionality
searchElem.addEventListener("keyup", () => {

  const searchText = searchElem.value.toLowerCase();

  const response = [];
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (
        product.title.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText)
    ) {
        response.push(product);
    }
}

  renderProducts(response);

});