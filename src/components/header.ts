function initHeaderComp() {
  class HeaderComp extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const header = document.createElement("header");
      header.classList.add("header");
      shadow.appendChild(header);

      const style = document.createElement("style");
      style.innerText = `
      
        .header{
            height: 60px;
            width: 100%;
            background-color: #ff8282;
        }
      `;

      shadow.appendChild(style);
    }
  }
  customElements.define("header-el", HeaderComp);
}

export { initHeaderComp };
