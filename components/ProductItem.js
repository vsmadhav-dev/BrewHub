export class ProductItem extends HTMLElement {
    connectedCallback() {
        if (this.querySelector('article')) return;

        const item = this.dataset.item ? JSON.parse(this.dataset.item) : null;
        if (!item) return;

        const template = document.getElementById('product-item-template');
        const content = template.content.cloneNode(true);
        const basePath = app.basePath || '';

        const img = content.querySelector('img');
        img.src = `${basePath}/data/images/${item.image}`;
        img.alt = item.name;

        const title = content.querySelector('h4');
        title.textContent = item.name;

        const price = content.querySelector('.price');
        price.textContent = `$${item.price.toFixed(2)}`;

        const link = content.querySelector('a');
        const slug = item.name.toLowerCase().replace(/\s+/g, '-');
        const route = `/product/${slug}-${item.id}`;
        link.href = `${basePath}${route}`;
        link.addEventListener('click', (event) => {
            event.preventDefault();
            app.router.go(route);
        });

        this.appendChild(content);
    }
}

customElements.define('product-item', ProductItem);
