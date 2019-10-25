class StyleItem extends HTMLElement {
    constructor() {
        super();
        this.self = this;
    }

    connectedCallback() {
        this.render();
    }

    handleCheckBox(event) {
        if(event.target.checked) {
            event.target.closest('.styleItemImageContainer').style.border = '1px solid #0c243e';
        }else {
            event.target.closest('.styleItemImageContainer').style.border = '';
        }
    }

    render() {
        const styleItemContainer = document.createElement('div');
        styleItemContainer.className = 'styleItemContainer';
        const styleItemImageContainer = document.createElement('div');
        styleItemImageContainer.className = 'styleItemImageContainer';
        const styleItemImage = document.createElement('img');
        styleItemImage.className = 'styleItemImage';
        styleItemImage.src = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';
        styleItemImageContainer.appendChild(styleItemImage);
        const styleItemImageCheckBoxContainer = document.createElement('label');
        styleItemImageCheckBoxContainer.className = 'styleItemImageCheckBoxContainer';
        const styleItemImageCheckBox = document.createElement('input');
        styleItemImageCheckBox.className = 'styleItemImageCheckBox';
        styleItemImageCheckBox.type = 'checkbox';
        styleItemImageCheckBox.onchange = (event) => this.handleCheckBox(event)
        styleItemImageCheckBoxContainer.appendChild(styleItemImageCheckBox);
        const styleItemImageCheckmark = document.createElement('span');
        styleItemImageCheckmark.className = 'styleItemImageCheckmark';
        styleItemImageCheckBoxContainer.appendChild(styleItemImageCheckmark);
        styleItemImageContainer.appendChild(styleItemImageCheckBoxContainer);
        styleItemContainer.appendChild(styleItemImageContainer);
        const styleItemName = document.createElement('p');
        styleItemName.className = 'styleItemName';
        styleItemName.innerText = 'Bohemian (92)';
        styleItemContainer.appendChild(styleItemName);
        
        this.self.parentElement.appendChild(styleItemContainer);
    }
}

window.customElements.define('app-style-item', StyleItem);