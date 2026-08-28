export class DetailsPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.styles = document.createElement('style');
        this.root.appendChild(this.styles);
        this.loadCss();
    }

    async loadCss() {
        const request = await fetch(new URL('./DetailsPage.css', import.meta.url));
        const css = await request.text();
        this.styles.textContent = css;
    }

    connectedCallback() {
        if (this.root.querySelector('header')) return;
        const template = document.getElementById('details-page-template');
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }
}
customElements.define('details-page', DetailsPage);