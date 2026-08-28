export class OrderPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.styles = document.createElement('style');
        this.root.appendChild(this.styles);
        this.loadCss();
    }

    async loadCss() {
        const request = await fetch(new URL('./OrderPage.css', import.meta.url));
        const css = await request.text();
        this.styles.textContent = css;
    }

    connectedCallback() {
        if (this.root.querySelector('h2')) return;
        this.root.insertAdjacentHTML('beforeend', `
            <section>
                <h2>Your Order</h2>
                <p class="empty">Your cart is empty.</p>
            </section>
        `);
        const formTemplate = document.getElementById('order-form-template');
        this.root.appendChild(formTemplate.content.cloneNode(true));
    }
}
customElements.define('order-page', OrderPage);