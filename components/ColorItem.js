class ColorItem extends HTMLElement {
    constructor() {
        super();
        this.self = this;
    }

    connectedCallback() {
        this.render();
    }


    render() {
      
        const colorItemContainer = document.createElement('div');
        colorItemContainer.className = 'colorItemContainer';
        const colorItemCheckBoxContainer = document.createElement('label');
        colorItemCheckBoxContainer.className = 'colorItemCheckBoxContainer';
        const colorItemCheckBox = document.createElement('input');
        colorItemCheckBox.className = 'colorItemCheckBox';
        colorItemCheckBox.type = 'checkbox';
        colorItemCheckBoxContainer.appendChild(colorItemCheckBox);
        const colorItemCheckmark = document.createElement('span');
        colorItemCheckmark.className = 'colorItemCheckmark';
        colorItemCheckBoxContainer.appendChild(colorItemCheckmark);
        colorItemContainer.appendChild(colorItemCheckBoxContainer);
        const colorItemName = document.createElement('p');
        colorItemName.className = 'colorItemName';
        colorItemName.innerText = 'Green';
        colorItemContainer.appendChild(colorItemName);
        const colorItemCount = document.createElement('p');
        colorItemCount.className = 'colorItemCount';
        colorItemCount.innerText = '11,221';
        colorItemContainer.appendChild(colorItemCount);

        this.self.parentElement.appendChild(colorItemContainer);
    }
}

window.customElements.define('app-color-item', ColorItem);