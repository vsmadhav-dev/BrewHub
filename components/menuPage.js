export class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        const styles = document.createElement('style');
        this.root.appendChild(styles);

        async function loadCss() {
            const request = await fetch('/components/MenuPage.css');
            const css = await request.text();
            styles.textContent = css;
        }
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
            }
        } else {
            menuContainer.innerHTML = 'loading..';
        }
    }
}

customElements.define('menu-page', MenuPage);