function redirect(url) {
  window.location.assign(url);
}

function getPaginaAtual() {
  if (window.location.pathname != "/") {
    return window.location.pathname.split('/')[2].split('.')[0];
  } return null
}

window.onload = function () {

  checarUsuarioLogado();

  () => logout();
}

function logout() {
  const redirectPage = getPaginaAtual() ? "login.html" : "/pages/login.html";

  if (localStorage.getItem("ecotrade-auth") != null) {
    localStorage.removeItem('ecotrade-auth');
    redirect(redirectPage)
  }
}

if (document.getElementById('logout-button')) {
  document.getElementById('logout-button').onclick = () => logout();
}


function checarUsuarioLogado() {
  const paginaAtual = getPaginaAtual();
  const autenticado = localStorage.getItem("ecotrade-auth") != null;

  const redirectPage = getPaginaAtual() ? "login.html" : "/pages/login.html";

  if (!autenticado && paginaAtual != "login" && paginaAtual != "cadastro") {
    redirect(redirectPage)
  } else if (autenticado && paginaAtual == "login" ||
    autenticado && paginaAtual == "cadastro") {
    redirect('../index.html')
  }

  if (getPaginaAtual() == "cadastro" || getPaginaAtual() == "login") {
    
    document.getElementById("menu-ecotrade").className = 'hide-element';
    document.getElementById("paginas-navegacao").className = 'hide-element';
  }
}
