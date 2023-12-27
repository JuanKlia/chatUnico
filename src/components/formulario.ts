function initFormComp() {
  class FormComp extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const container = document.createElement("div");
      const label = this.getAttribute("label");
      const boton = this.getAttribute("boton");
      if (label) {
        container.innerHTML = `
        <form class="form">
           
           <textfield-el label='${label}'></textfield-el>
           <button is="boton-el" texto='${boton}'></button>
      </form>
        `;
      } else {
        container.innerHTML = `
        <form class="form">
         <textfield-el ></textfield-el>
         <button is="boton-el" texto='${boton}'></button>
      </form>
        `;
      }

      shadow.appendChild(container);
      const style = document.createElement("style");
      shadow.appendChild(style);
      style.innerText = `

      * {
      box-sizing: border-box;
    }
      
        div{
          width: auto;
            margin: 0 auto;
            
        }

        div button{
            margin-top: 15px;
        }
      
      `;
    }
  }

  customElements.define("form-el", FormComp);
}

export { initFormComp };
