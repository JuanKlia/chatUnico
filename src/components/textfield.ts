function initTextField() {
  class TextFieldComp extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const container = document.createElement("div");
      const labelText = this.getAttribute("label");

      if (labelText) {
        const label = document.createElement("label");
        label.innerHTML = `<text-el type="label">${labelText}</text-el>`;
        label.setAttribute("for", "textfield");
        container.appendChild(label);
      }

      const input = document.createElement("input");
      input.setAttribute("name", "texto");
      input.setAttribute("type", "text");
      input.setAttribute("id", "textfield");
      input.classList.add("input-textfield");
      container.appendChild(input);

      const style = document.createElement("style");
      container.appendChild(style);

      style.innerText = `
           .input-textfield{
            height: 55px;
            width: 100%;
            padding: 10px;
            border-radius: 4px;
            border: 2px solid #000;
            font-size: 20px;
           }
            
        `;
      this.appendChild(container);
    }
  }
  customElements.define("textfield-el", TextFieldComp);
}

export { initTextField };
