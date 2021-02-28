class Dot extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <span style="color:#f37121;">.</span>
        `;
    }
}

window.customElements.define("dot", Dot);