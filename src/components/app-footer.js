export class AppFooter extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
        <footer style="
          background-color: #7a9e9f;
          color: white;
          text-align: center;
          padding: 20px;
          font-size: 14px;
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;">
          Aul'sNote App &copy; 2025
        </footer>`;
    }
  }
  
  customElements.define('app-footer', AppFooter);