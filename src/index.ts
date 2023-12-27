import { initHeaderComp } from "./components/header";
import { initTextComp } from "./components/text";
import { initButtonComp } from "./components/boton";
import { initTextField } from "./components/textfield";
import { initFormComp } from "./components/formulario";
import { initWelcomePage } from "./pages/welcome";
import { initChatPage } from "./pages/chat";

function handleRoute(ruta) {
  //Coleccion  de rutas-funciones , vincula cada path con una funcion a invocar

  const rutas = [
    {
      path: /\/welcome/,
      page: initWelcomePage,
    },
    {
      path: /\/chat/,
      page: initChatPage,
    },
  ];

  for (const r of rutas) {
    if (r.path.test(ruta) == true) {
      const pagina: any = r.page({ goTo: goTo });
      const root = document.querySelector(".root");
      root?.firstChild?.remove();
      root?.appendChild(pagina);
    }
  }
}

function goTo(path) {
  //Cambia la url con el path que le hayan pasado, sin refrescar la pagina
  history.pushState({}, "", path);

  //avisa que cambio la url para ver si hay que montar una escena
  handleRoute(path);
}

function iniciarComponentes() {
  initHeaderComp();
  initTextComp();
  initButtonComp();
  initTextField();
  initFormComp();
}

(function () {
  iniciarComponentes();

  const formulario = document.querySelector("form");

  formulario?.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Hola");
  });

  window.addEventListener("load", () => {
    if (location.pathname == "/") {
      goTo("/welcome");
    } else {
      handleRoute(location.pathname);
    }
  });
})();
