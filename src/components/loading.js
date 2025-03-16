class LoadingIndicator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .loading {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    color: white;
                    font-size: 20px;
                    font-weight: bold;
                }
                .hidden {
                    display: none;
                }
            </style>
            <div class="loading hidden">Loading...</div>
        `;
    }

    show() {
        this.shadowRoot.querySelector('.loading').classList.remove('hidden');
    }

    hide() {
        this.shadowRoot.querySelector('.loading').classList.add('hidden');
    }
}

customElements.define('loading-indicator', LoadingIndicator);
