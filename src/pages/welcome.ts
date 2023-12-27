import { state } from "../estate";

function initWelcomePage(params) {
  const welcomePage = document.createElement("div");
  welcomePage.innerHTML = `  <header-el></header-el>
  <div class="welcome__seccion-container">
    <text-el type="titulo">Bienvenido</text-el>
    <form-el boton="Comenzar" class="welcome-form" label="tu nombre"></form-el>
  </div>`;

  const formulario = welcomePage.querySelector(".welcome-form");

  formulario?.shadowRoot?.children[0].children[0].addEventListener(
    "submit",
    (e) => {
      e.preventDefault();

      state.setState({ nombre: e.target?.texto.value });
      console.log(state.getState());
      params.goTo("/chat");
    }
  );

  return welcomePage;
}

export { initWelcomePage };
