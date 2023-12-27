//debe devolver un elemento//
import { dataBase } from "../database";
import { ref, onValue } from "firebase/database";
import { state } from "../estate";

const API_BASE = "http://localhost:3000";

function initChatPage(params) {
  const chatPage = document.createElement("div");

  chatPage.innerHTML = `  <header-el></header-el>
    <div class="chat__seccion-container">
      <text-el class="chat-titulo" type="titulo">Chat</text-el>
      <div class = "chat__seccion-messages">
         <div class="chat__seccion-chat">
         <template class="template">
           <div class="template__card">
               <text-el class="template__card__nombre" type="mensaje"></text-el>           
               <text-el class="template__card__mensaje"type="mensaje"></text-el>           
             </div>
         </template>
         </div>
         <form-el class="chat__seccion-fomulario" boton="Enviar" ></form-el>
      </div>
    </div>`;
  chatPage.classList.add("chatPage");

  const formulario = chatPage.querySelector(".chat__seccion-fomulario");
  formulario?.shadowRoot?.children[0].children[0].addEventListener(
    "submit",
    (e) => {
      e.preventDefault();

      fetch(API_BASE + "/message", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          participante: state.dameElNombre(),
          mensaje: e.target.texto.value,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {});

      formulario?.shadowRoot?.children[0].children[0].reset();
    }
  );
  const template = chatPage.querySelector(".template");
  const contenedorChat = chatPage.querySelector(".chat__seccion-chat");
  conectarChat(template, contenedorChat);

  return chatPage;
}

function conectarChat(template, contenedor) {
  const chatRef = ref(dataBase, "chatroom/mensajes");
  onValue(chatRef, (snap) => {
    console.log(snap.val());
    renderizarMensajes(template, snap.val(), contenedor);
  });
}

function removerHijos(contenedor) {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
}
function mensajePropio(mensaje) {
  return mensaje.participante == state.dameElNombre();
}
function renderizarMensajes(template, mensajes, contenedor) {
  removerHijos(contenedor);
  for (const mensaje of mensajes) {
    const nombre = template.content.querySelector(".template__card__nombre");
    const texto = template.content.querySelector(".template__card__mensaje");

    nombre.textContent = mensaje.participante;
    texto.textContent = mensaje.mensaje;

    const clon = document.importNode(template.content, true);

    if (mensajePropio(mensaje)) {
      const nombreClon = clon.querySelector(".template__card__nombre");
      const textoClon = clon.querySelector(".template__card__mensaje");
      const containerClon = clon.querySelector(".template__card");

      nombreClon.classList.add("eliminarNombre");
      textoClon.classList.add("verde");
      containerClon.classList.add("correr");
    }

    contenedor.appendChild(clon);
    contenedor.scrollTop = contenedor.scrollHeight;
    contenedor.scroll
  }
}
export { initChatPage };
