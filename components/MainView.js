class MainView extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const mainViewContainer = document.createElement('div');
        mainViewContainer.className = 'mainViewContainer';

        if(window.innerWidth  >= 700 )
        mainViewContainer.appendChild(new Facets());

        window.addEventListener("resize", function(){
           if(window.innerWidth  <= 700 ){
             // document.querySelectorAll('.facetsContainer').forEach(function(a){
             //    a.remove()
             //    })
           }
           else if ( window.innerWidth  >= 700 && document.querySelectorAll('.facetsContainer')!= null && typeof(document.querySelectorAll('.facetsContainer')) != 'undefined' ){
              mainViewContainer.appendChild(new Facets());
                  document.querySelectorAll('.closeFilter').forEach(function(a){
                    a.remove()
                    })
           }
        });      
        mainViewContainer.appendChild(new ProductList());
        document.body.appendChild(mainViewContainer);
    }
}

window.customElements.define('app-main-view', MainView);