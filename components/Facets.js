class Facets extends HTMLElement {
    constructor() {
        super();
        this.self = this;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const facetsContainer = document.createElement('div');
        facetsContainer.className = 'facetsContainer';

        const stylesContainer = document.createElement('div');
        stylesContainer.className = 'stylesContainer';
        const stylesHeaderContainer = document.createElement('div');
        stylesHeaderContainer.className = 'stylesHeaderContainer';
        const stylesHeader = document.createElement('p');
        stylesHeader.className = 'stylesHeader';
        stylesHeader.innerText = 'Styles';
        stylesHeaderContainer.appendChild(stylesHeader);
        const stylesIsDisplayedIconContainer = document.createElement('p');
        stylesIsDisplayedIconContainer.className = 'stylesIsDisplayedIconContainer';
        const stylesIsDisplayedIcon = document.createElement('i');
        stylesIsDisplayedIcon.className = 'fas fa-chevron-up stylesIsDisplayedIcon';
        stylesIsDisplayedIconContainer.appendChild(stylesIsDisplayedIcon);
        stylesHeaderContainer.appendChild(stylesIsDisplayedIconContainer);
        stylesContainer.appendChild(stylesHeaderContainer);
        const stylesList = document.createElement('div');
        stylesList.className = 'stylesList';
        stylesList.appendChild(new StyleItem());
        stylesList.appendChild(new StyleItem());
        stylesList.appendChild(new StyleItem());
        stylesList.appendChild(new StyleItem());
        stylesList.appendChild(new StyleItem());
        stylesList.appendChild(new StyleItem());
        stylesContainer.appendChild(stylesList);
        const moreStylesButton = document.createElement('button');
        moreStylesButton.className = 'moreStylesButton';
        moreStylesButton.innerText = 'More Styles +';
        stylesContainer.appendChild(moreStylesButton);
        facetsContainer.appendChild(stylesContainer);

        const priceRangeContainer = document.createElement('div');
        priceRangeContainer.className = 'priceRangeContainer';
        const priceRangeHeader = document.createElement('p');
        priceRangeHeader.className = 'priceRangeHeader';
        priceRangeHeader.innerText = 'Price Range';
        priceRangeContainer.appendChild(priceRangeHeader);
        const rangeContainer = document.createElement('div');
        rangeContainer.className = 'rangeContainer';
        const rangeMinInputLabel = document.createElement('label');
        rangeMinInputLabel.className = 'rangeInputLabel';
        rangeMinInputLabel.innerText = 'Min $ ';
        const rangeMinInput = document.createElement('input');
        rangeMinInput.className = 'rangeInput';
        rangeMinInput.type = 'text';
        rangeMinInput.value = 0;
        rangeMinInputLabel.appendChild(rangeMinInput);
        rangeContainer.appendChild(rangeMinInputLabel);
        const rangeMaxInputLabel = document.createElement('label');
        rangeMaxInputLabel.className = 'rangeInputLabel';
        rangeMaxInputLabel.innerText = 'Max $ ';
        const rangeMaxInput = document.createElement('input');
        rangeMaxInput.className = 'rangeInput';
        rangeMaxInput.type = 'text';
        rangeMaxInput.value = '4,061';
        rangeMaxInputLabel.appendChild(rangeMaxInput);
        rangeContainer.appendChild(rangeMaxInputLabel);
        const rangeButton = document.createElement('button');
        rangeButton.className = 'rangeButton';
        rangeButton.innerText = 'Go';
        rangeContainer.appendChild(rangeButton);
        priceRangeContainer.appendChild(rangeContainer);
        const rangeLine = document.createElement('div');
        rangeLine.className = 'rangeLine';
        priceRangeContainer.appendChild(rangeLine);
        const startRange = document.createElement('div');
        startRange.className = 'startRange';
        priceRangeContainer.appendChild(startRange);
        const dotsIsDisplayedIconContainer = document.createElement('p');
        dotsIsDisplayedIconContainer.className = 'dotsIsDisplayedIconContainer';
        const dotsIsDisplayedIcon = document.createElement('i');
        dotsIsDisplayedIcon.className = 'fas fa-ellipsis-v dotsIsDisplayedIcon';
        dotsIsDisplayedIconContainer.appendChild(dotsIsDisplayedIcon);
        const dots1IsDisplayedIcon = document.createElement('i');
        dots1IsDisplayedIcon.className = 'fas fa-ellipsis-v dotsIsDisplayedIcon';
        dotsIsDisplayedIconContainer.appendChild(dots1IsDisplayedIcon);
        const dots2IsDisplayedIcon = document.createElement('i');
        dots2IsDisplayedIcon.className = 'fas fa-ellipsis-v dotsIsDisplayedIcon';
        dotsIsDisplayedIconContainer.appendChild(dots2IsDisplayedIcon);
        startRange.appendChild(dotsIsDisplayedIconContainer);


        const RangeInputLine = document.createElement('div');
        RangeInputLine.className = 'RangeInputLine';
        priceRangeContainer.appendChild(RangeInputLine);

        const endRange = document.createElement('div');
        endRange.className = 'endRange';
        priceRangeContainer.appendChild(endRange);
        const enddotsIsDisplayedIconContainer = document.createElement('p');
        enddotsIsDisplayedIconContainer.className = 'enddotsIsDisplayedIconContainer';
        const enddotsIsDisplayedIcon = document.createElement('i');
        enddotsIsDisplayedIcon.className = 'fas fa-ellipsis-v enddotsIsDisplayedIcon';
        enddotsIsDisplayedIconContainer.appendChild(enddotsIsDisplayedIcon);
        const enddots1IsDisplayedIcon = document.createElement('i');
        enddots1IsDisplayedIcon.className = 'fas fa-ellipsis-v enddotsIsDisplayedIcon';
        enddotsIsDisplayedIconContainer.appendChild(enddots1IsDisplayedIcon);
        const enddots2IsDisplayedIcon = document.createElement('i');
        enddots2IsDisplayedIcon.className = 'fas fa-ellipsis-v enddotsIsDisplayedIcon';
        enddotsIsDisplayedIconContainer.appendChild(enddots2IsDisplayedIcon);
        endRange.appendChild(enddotsIsDisplayedIconContainer);

        facetsContainer.appendChild(priceRangeContainer);



        const colorsContainer = document.createElement('div');
        colorsContainer.className = 'colorsContainer';
        const colorsHeaderContainer = document.createElement('div');
        colorsHeaderContainer.className = 'colorsHeaderContainer';
        const colorsHeader = document.createElement('p');
        colorsHeader.className = 'colorsHeader';
        colorsHeader.innerText = 'Colors';
        colorsHeaderContainer.appendChild(colorsHeader);
        const colorsIsShowedIconContainer = document.createElement('p');
        colorsIsShowedIconContainer.className = 'colorsIsShowedIconContainer';
        const colorsIsShowedIcon = document.createElement('i');
        colorsIsShowedIcon.className = 'fas fa-info-circle stylesIsDisplayedIcon';  
        colorsIsShowedIconContainer.appendChild(colorsIsShowedIcon);
        colorsHeaderContainer.appendChild(colorsIsShowedIconContainer);
        const colorsIsDisplayedIconContainer = document.createElement('p');
        colorsIsDisplayedIconContainer.className = 'colorsIsDisplayedIconContainer'; 
        const colorsIsDisplayedIcon = document.createElement('i');
        colorsIsDisplayedIcon.className = 'fas fa-chevron-up stylesIsDisplayedIcon';  
        colorsIsDisplayedIconContainer.appendChild(colorsIsDisplayedIcon);
        colorsHeaderContainer.appendChild(colorsIsDisplayedIconContainer);
        colorsContainer.appendChild(colorsHeaderContainer);
        const rangeLinesecond = document.createElement('div');
        rangeLinesecond.className = 'rangeLinesecond';
        colorsContainer.appendChild(rangeLinesecond);
        const colorsList = document.createElement('div');
        colorsList.className = 'colorsList';
        colorsList.appendChild(new ColorItem());
        colorsList.appendChild(new ColorItem());
        colorsList.appendChild(new ColorItem());
        colorsList.appendChild(new ColorItem());
        colorsList.appendChild(new ColorItem());
        colorsContainer.appendChild(colorsList);
        const moreColorsButton = document.createElement('button');
        moreColorsButton.className = 'moreColorsButton';
        moreColorsButton.innerText = 'More Colors +';
        colorsContainer.appendChild(moreColorsButton);
        facetsContainer.appendChild(colorsContainer);  

        const reviewsContainer = document.createElement('div');
        reviewsContainer.className = 'reviewsContainer'; 
        facetsContainer.appendChild(reviewsContainer);   
        const reviewsHeaderContainer = document.createElement('div');
        reviewsHeaderContainer.className = 'reviewsHeaderContainer';
        const reviewsHeader = document.createElement('p');
        reviewsHeader.className = 'reviewsHeader';
        reviewsHeader.innerText = 'Reviews';
        reviewsHeaderContainer.appendChild(reviewsHeader);
        reviewsContainer.appendChild(reviewsHeaderContainer);
        const reviewsStarContainer = document.createElement('div');
        reviewsStarContainer.className = 'reviewsStarContainer';
        reviewsStarContainer.appendChild(new StarItem());
        reviewsStarContainer.appendChild(new StarItem());
        reviewsStarContainer.appendChild(new StarItem());
        reviewsStarContainer.appendChild(new StarItem());
        reviewsStarContainer.appendChild(new StarItem());
        reviewsContainer.appendChild(reviewsStarContainer);

        this.self.parentElement.appendChild(facetsContainer);
    }
}

window.customElements.define('app-facets', Facets);