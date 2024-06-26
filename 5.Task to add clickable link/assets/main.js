let dataItemsElem = document.getElementById("container");


let products = [];
// fetch data from api
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        products = data;
        renderProducts(products);
    })
    .catch(error => console.error('Error fetching data:', error));

function renderProducts(products) {
    dataItemsElem.innerHTML = '';

    for (i = 0; i < products.length; i++) {
        const product = products[i];

        const card = document.createElement('div');
        card.classList.add('card');

        let albumId = document.createElement("p");
        let idElem = document.createElement("p");
        let titleElem = document.createElement("p");
        let urlElem = document.createElement("a");
        urlElem.classList.add("url-link");
        let thumbnailUrl = document.createElement("img");

        albumId.innerText = `ID: ${product.albumId}`;
        idElem.innerText = `albumId: ${product.id}`;
        titleElem.innerText = `Title: ${product.title}`;
        urlElem.innerText = `Url: ${product.url}`;
        urlElem.href = product.url; // to open a clickable link
        urlElem.target = "_blank"; // open link in new tab
        thumbnailUrl.src = product.thumbnailUrl;


        card.appendChild(albumId);
        card.appendChild(idElem);
        card.appendChild(titleElem);
        card.appendChild(urlElem);
        card.appendChild(thumbnailUrl);

        dataItemsElem.appendChild(card);
        //console.log("data:", dataItemsElem);
    }
}



