function initTextComp() {
  class TextComp extends HTMLElement {
    etiqueta;
    constructor() {
      super();
      this.render();
    }

    render() {
      const tipo = this.getAttribute("type");
      const shadow = this.attachShadow({ mode: "open" });

      if (tipo == "titulo") {
        this.etiqueta = "h1";
      } else if (tipo == "label") {
        this.etiqueta = "label";
      } else if (tipo == "mensaje") {
        this.etiqueta = "p";
      }

      const elemento = document.createElement(`${this.etiqueta}`);
      elemento.textContent = this.textContent;
      const style = document.createElement("style");
      shadow.appendChild(elemento);
      shadow.appendChild(style);

      style.innerText = `
      *{
        margin: 0px;
        pointer-events: none;
      }
      h1 {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 52px;
      }

      label{
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 24px;
      }

      p{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 18
        px;
      }
      `;
    }
  }

  customElements.define("text-el", TextComp);
}

export { initTextComp };
