class StarItem extends HTMLElement {
    constructor() {
        super();
        this.self = this;
    }

    connectedCallback() {
        this.render();
    }


    render() {
        const starItemContainer = document.createElement('div');
        starItemContainer.className = 'starItemContainer';
        const starsIsDisplayedIconContainer = document.createElement('p');
        starsIsDisplayedIconContainer.className = 'starsIsDisplayedIconContainer';
        const starsIsDisplayedIcon = document.createElement('i');
        starsIsDisplayedIcon.className = 'fas fa-star starsIsDisplayedIcon';
        starsIsDisplayedIconContainer.appendChild(starsIsDisplayedIcon);
        starItemContainer.appendChild(starsIsDisplayedIconContainer);
        
        this.self.parentElement.appendChild(starItemContainer);
    }
}

window.customElements.define('app-star-item', StarItem);