export default class ProductItem extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });

        this.styles = document.createElement("style");
        this.root.appendChild(this.styles);

        const loadCss = async () => {
            const request = await fetch("/components/MenuPage.css");
            const css = await request.text();
            this.styles.textContent = css;
        };
        loadCss();
    }

    connectedCallback() {
        const template = document.getElementById("product-item-template");
        const content = template.content.cloneNode(true);

        this.root.appendChild(content);

        const product = JSON.parse(this.dataset.product);
        this.root.querySelector("h4").textContent = product.name;
        this.root.querySelector("p.price").textContent = `$${product.price.toFixed(2)}`;
        this.root.querySelector("img").src = `data/images/${product.image}`;
        this.root.querySelector("a").addEventListener("click", event => {
            console.log(event.target.tagName);
            if (event.target.tagName.toLowerCase()=="button") {
                //TODO
            } else {
                app.router.go(`/product-${product.id}`);
            }
            event.preventDefault();
        })
    }
}
