class Header extends HTMLElement {

  static observedAttributes = ["logado"];
  
  constructor() {
    super();
  }

  connectedCallback() {

    this.innerHTML = `
    <nav class="navbar sticky-top navbar-expand-md ecotrade-header-navbar">
  <div class="container-fluid">
    <a class="navbar-brand ecotrade-header-logo m-0" href="/">
      <img src="/assets/logo.svg" alt="logo ecotrade" width="100px" /></a>
    
    <ul id="paginas-navegacao" class="navbar-nav mb-2 mb-md-0 me-auto ms-2">
      <li class="nav-item">
        <a class="nav-link" href="/pages/parceiros.html">Parceiros</a>
      </li>
    </ul>

      <ul id="menu-ecotrade" class="navbar-nav mb-2 mb-md-0 col-md-1">
      <li class="nav-item dropdown align-self-end">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Menu
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="/pages/info-cadastro.html">Perfil</a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a id="logout-button" class="dropdown-item" onclick=logout()>Sair</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
    `;
  }
}

customElements.define('ecotrade-header', Header);
