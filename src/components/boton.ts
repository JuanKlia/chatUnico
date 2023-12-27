function initButtonComp() {
  class ButtonComp extends HTMLButtonElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const style = document.createElement("style");

      this.innerHTML = `<text-el type="label">${this.getAttribute(
        "texto"
      )}</text-el>`;
      this.classList.add("boton-form");
      style.innerText = `
           
           .boton-form{
                height: 55px;
                width: 100%;
                background-color: #9CBBE9;
                border: none;
                padding: 15px;
                border-radius: 4px;
                cursor: pointer;
            }
          `;
      this.appendChild(style);
    }
  }
  customElements.define("boton-el", ButtonComp, { extends: "button" });
}

export { initButtonComp };
