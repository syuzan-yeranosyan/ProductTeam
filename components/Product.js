class Product extends HTMLElement {
    constructor(product) {
        super();
        this.self = this;
        this.product = product;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const productContainer = document.createElement('div');
        productContainer.className = 'productContainer';

        const productImage = document.createElement('img');
        productImage.className = 'productImage';
        productImage.src = this.product.imageUrl[0];

        const productImageContainer = document.createElement('div');
        productImageContainer.className = 'productImageContainer';
        productImageContainer.appendChild(productImage);
        
        productContainer.appendChild(productImageContainer);
        
        const productDetailsContainer = document.createElement('div');
        productDetailsContainer.className = 'productDetailsContainer';

        const productName = document.createElement('p');
        productName.className = 'productName';
        productName.innerText = this.product.title;
        productDetailsContainer.appendChild(productName);

        const productStarContainer = document.createElement('div');
        productStarContainer.className = 'productStarContainer';
        const productStar = document.createElement('p');
        productStar.className = 'productStar';
        productStar.innerHTML = '&#9734;';
        productStarContainer.appendChild(productStar.cloneNode(true));
        productStarContainer.appendChild(productStar.cloneNode(true));
        productStarContainer.appendChild(productStar.cloneNode(true));
        productStarContainer.appendChild(productStar.cloneNode(true));
        productStarContainer.appendChild(productStar.cloneNode(true));
        const productStarNumber = document.createElement('p');
        productStarNumber.className = 'productStarNumber';
        productStarNumber.innerHTML = '(134)';
        productStarContainer.appendChild(productStarNumber);
        productDetailsContainer.appendChild(productStarContainer);

        const productShippingContainer = document.createElement('div');
        productShippingContainer.className = 'productShippingContainer';
        const shippingIcon = document.createElement('i');
        shippingIcon.className = 'fas fa-shipping-fast';
        productShippingContainer.appendChild(shippingIcon);        
        const shippingText = document.createElement('span');
        shippingText.className = 'shippingText';
        shippingText.innerText = 'Shipping Offer';
        productShippingContainer.appendChild(shippingText);
        productDetailsContainer.appendChild(productShippingContainer);
        
        const productPrice = document.createElement('p');
        productPrice.className = 'productPrice';
        const price = this.product.displayPrice.split('.')
        productPrice.innerHTML = `<sup>${price[0].slice(0,1)}</sup>${price[0].slice(1)}<sup>${price[1]}</sup>`;
        productDetailsContainer.appendChild(productPrice);

        const productOptionsContainer = document.createElement('div');
        productOptionsContainer.className = 'productOptionsContainer';
        const productOptions = document.createElement('p');
        productOptions.className = 'productOptions';
        productOptions.innerText = `${this.product.color.length} Colors / ${this.product.size.length} Sizes`;
        productOptionsContainer.appendChild(productOptions);
        const productOptionsIconContainer = document.createElement('p');
        productOptionsIconContainer.className = 'productOptionsIconContainer';
        const productOptionsIcon = document.createElement('i');
        productOptionsIcon.className = 'far fa-heart productOptionsIcon';
        productOptionsIconContainer.appendChild(productOptionsIcon)
        productOptionsContainer.appendChild(productOptionsIconContainer);
        productDetailsContainer.appendChild(productOptionsContainer);
        productContainer.appendChild(productDetailsContainer);

        this.self.parentElement.appendChild(productContainer);
    }
}

window.customElements.define('app-product', Product);