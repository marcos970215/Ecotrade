class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="d-flex justify-content-center">
        <img src="/assets/logo.svg" alt="logo ecotrade" width="125px" />
      </div>
    `;
  }
}

customElements.define('ecotrade-footer', Footer);
