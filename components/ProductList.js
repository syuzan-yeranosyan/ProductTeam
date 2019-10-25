class ProductList extends HTMLElement {
    constructor() {
        super();
        this.data = [];
        this.self = this;
        this.searchValue = '';
    }

    connectedCallback() {
        fetch('http://search.unbxd.io/fb853e3332f2645fac9d71dc63e09ec1/demo-unbxd700181503576558/search?&q=*')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.data = data;
            this.render();
        })
        .catch(error => console.error(error));
    }

    handleSearch(value) {
        this.searchValue = value;
        fetch(`http://search.unbxd.io/fb853e3332f2645fac9d71dc63e09ec1/demo-unbxd700181503576558/search?&q=${value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.data = data;
            this.render();
        })
    }

    handleAddFacets(parentElement) {
        document.querySelectorAll('.facetsContainer').forEach(function(a){
                a.remove()
                })
        document.querySelectorAll('.closeFilter').forEach(function(a){
                a.remove()
                })
        const closeFilter = document.createElement('div');
        closeFilter.className = 'closeFilter';
        const closeFilterText = document.createElement('p');
        closeFilterText.className = 'closeFilterText';
        const closeFilterIcon = document.createElement('i');
        closeFilterIcon.className = 'fas fa-times closeFilterIcon';
        closeFilterIcon.onclick = (event) => this.handlecloseFilter(event.target);
        closeFilterText.append('Filter');
        closeFilterText.appendChild(closeFilterIcon);
        closeFilter.appendChild(closeFilterText);
        parentElement.appendChild(closeFilter);
        parentElement.appendChild(new Facets());
        document.querySelector('.FilterButton').style.display = "none";
        document.querySelector('.productListHeader').style.height = '1400px';
    }

    handlecloseFilter(element){
        document.querySelector('.FilterButton').style.display = "inline-block";
        element.parentElement.parentElement.parentElement.removeChild(element.parentElement.parentElement.nextSibling.nextSibling);
        element.parentElement.parentElement.parentElement.removeChild(element.parentElement.parentElement);
        document.querySelector('.productListHeader').style.height = 'inherit';
        
    }

    handleChangeInput(value) {
        if(!value) {
            this.searchValue = '';
            fetch('http://search.unbxd.io/fb853e3332f2645fac9d71dc63e09ec1/demo-unbxd700181503576558/search?&q=*')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.data = data;
                this.render();
            })
            .catch(error => console.error(error));
        }
    }

    render() { 
        const element = document.querySelector('.productListContainer');
        if(element) element.parentNode.removeChild(element);
        
        const productListContainer = document.createElement('div');
        productListContainer.className = 'productListContainer';
        
        const searchContainer = document.createElement('div');
        searchContainer.className = 'searchContainer';
        const searchInput = document.createElement('input');
        searchInput.className = 'searchInput';
        searchInput.placeholder = 'Search';
        searchInput.type = 'text';
        searchInput.value = this.searchValue;
        searchInput.onchange = (event) => this.handleChangeInput(event.target.value);
        searchContainer.appendChild(searchInput);
        const searchButton = document.createElement('button');
        searchButton.className = 'searchButton';
        searchButton.onclick = () => this.handleSearch(searchInput.value);
        const searchIcon = document.createElement('i');
        searchIcon.className = 'fas fa-search searchIcon';
        searchButton.appendChild(searchIcon);
        searchContainer.appendChild(searchButton);
        productListContainer.appendChild(searchContainer);
        const productListHeader = document.createElement('div');
        productListHeader.className = 'productListHeader';
        productListHeader.innerHTML = `<p class='New-Arrival'> New Arrival Area Rug </p> <span class='results'>${this.data.response.numberOfProducts} Results</span>`;

        const FilterButton = document.createElement('button');
        FilterButton.className = 'FilterButton';
        FilterButton.innerHTML = `<i class='fas fa-filter filterIcon'> Filter</i>`
        productListHeader.appendChild(FilterButton);
        productListContainer.appendChild(productListHeader);
        FilterButton.onclick = (event) => this.handleAddFacets(event.target.parentElement.parentElement);

        const productList = document.createElement('div');
        productList.className = 'productList';
        this.data.response.products.forEach(prod => {
            const product = new Product(prod);
            productList.appendChild(product);
        });

        productListContainer.appendChild(productList);

        this.self.parentElement.appendChild(productListContainer);
    }
}

window.customElements.define('app-product-list', ProductList);