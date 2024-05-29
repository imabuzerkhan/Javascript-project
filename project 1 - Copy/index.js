
    document.addEventListener('DOMContentLoaded', function() {
        loadProductsFromLocalStorage();

        document.getElementById('product-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const imageUrl = document.getElementById('image-url').value;
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;

            const product = {
                imageUrl: imageUrl,
                title: title,
                description: description
            };

            saveProductToLocalStorage(product);

            addProductToDOM(product);

            document.getElementById('product-form').reset();
        });
    });

    function saveProductToLocalStorage(product) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }

    function loadProductsFromLocalStorage() {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.forEach(product => {
            addProductToDOM(product);
        });
    }

    function addProductToDOM(product) {
        const container = document.getElementById('product-container');

        const card = document.createElement('div');
        card.className = 'max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 my-4 flex flex-col';

        const img = document.createElement('img');
        img.className = 'w-full';
        img.src = product.imageUrl;
        img.alt = product.title;

        const cardBody = document.createElement('div');
        cardBody.className = 'px-6 py-4';

        const cardTitle = document.createElement('h1');
        cardTitle.className = 'font-bold text-xl mb-2';
        cardTitle.innerText = product.title;

        const cardDescription = document.createElement('p');
        cardDescription.className = 'text-gray-700 text-base';
        cardDescription.innerText = product.description;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardDescription);

        card.appendChild(img);
        card.appendChild(cardBody);

        container.appendChild(card);
    }

