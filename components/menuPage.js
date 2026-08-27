export class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });

        this.styles = document.createElement('style');
        this.root.appendChild(this.styles);

        const loadCss = async () => {
            const request = await fetch('/components/MenuPage.css');
            const css = await request.text();
            this.styles.textContent = css;
        };
        loadCss();
    }

    connectedCallback() {
        const template = document.getElementById('menu-page-template');
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        window.addEventListener('menuchange', (event) => {
            this.render();
        });

        this.render();
    }

    render() {
        const menuContainer = this.root.querySelector('#menu');
        if (!menuContainer) return;

        if (app.store.menu) {
            menuContainer.innerHTML = '';

            for (let i = 0; i < app.store.menu.length; i++) {
                const liCategory = document.createElement('li');
                liCategory.innerHTML = `
                    <h3>${app.store.menu[i].name}</h3>
                    <ul class="category"></ul>
                `;
                menuContainer.appendChild(liCategory);
                const categoryList = liCategory.querySelector('ul');

                app.store.menu[i].products.forEach((item) => {
                    const productTemplate = document
                        .getElementById('product-item-template')
                        .content
                        .cloneNode(true);
                    const productLink = productTemplate.querySelector('a');
                    const productImage = productTemplate.querySelector('img');
                    const productName = productTemplate.querySelector('h4');
                    const productPrice = productTemplate.querySelector('.price');
                    const addButton = productTemplate.querySelector('button');

                    productLink.href = `/product/${item.name}-${item.id}`;
                    productLink.addEventListener('click', (event) => {
                        event.preventDefault();
                        app.router.go(productLink.href);
                    });
                    productImage.src = `/data/images/${item.image}`;
                    productImage.alt = item.name;
                    productName.textContent = item.name;
                    productPrice.textContent = `$${item.price.toFixed(2)}`;
                    addButton.addEventListener('click', (event) => {
                        event.preventDefault();
                    });

                    categoryList.appendChild(productTemplate);
                });
            }
        } else {
            menuContainer.innerHTML = 'loading..';
        }
    }
}

customElements.define('menu-page', MenuPage);