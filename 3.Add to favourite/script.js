const dataElem = document.getElementById("data-products");
    const favoritesElem = document.getElementById("favourites");
    
    let products = [];
    let favourites = JSON.parse(localStorage.getItem("favourites")) ||  [];
    
    renderFavourites();

    // Fetch data from the API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        products = data;
        renderProducts(products);
      })
      .catch(error => console.error('Error fetching data:', error));

    // Function to render products
    function renderProducts(products) {
      dataElem.innerHTML = '';  
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

        const favButton = document.createElement("button");
        favButton.innerText = "Add to Favorites";
        favButton.addEventListener('click', () => 
        addToFavourites(product)
        );


        liElem.appendChild(idElem);
        liElem.appendChild(titleElem);  
        liElem.appendChild(priceElem);  
        liElem.appendChild(descElem);  
        liElem.appendChild(cateElem);  
        liElem.appendChild(favButton);

        dataElem.appendChild(liElem);
      }
    }

    // Function to add product to favorites
    function addToFavourites(product) {
      if (!favourites.includes(product)) {
        favourites.push(product);
        
        localStorage.setItem("favourites", JSON.stringify(favourites));
        renderFavourites();
      }
    }

    // Function to render favorites
    function renderFavourites() {
      favoritesElem.innerHTML = '';
      for(let i = 0; i < favourites.length; i++) {
        let favourite = favourites[i];
        const liElem = document.createElement("li");

        const idElem = document.createElement("h2");
        idElem.innerText =  `ID: ${favourite.id}`;

        const titleElem = document.createElement("p");
        titleElem.innerText = `Title: ${favourite.title}`;

        const priceElem = document.createElement("p");
        priceElem.innerText = `Price: $${favourite.price}`;

        const descElem = document.createElement("p");
        descElem.innerText = `Description: ${favourite.description}`;

        const cateElem = document.createElement("p");
        cateElem.innerText = `Category: ${favourite.category}`;

        liElem.appendChild(idElem);
        liElem.appendChild(titleElem);  
        liElem.appendChild(priceElem);  
        liElem.appendChild(descElem);  
        liElem.appendChild(cateElem);  

        favoritesElem.appendChild(liElem);
      }
    }
