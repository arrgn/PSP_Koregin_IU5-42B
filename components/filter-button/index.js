export class FilterButtonComponent {
  constructor(parent, status, text) {
    this.parent = parent;
    this.status = status;
    this.text = text;
  }

  addListeners(listener) {
    document.getElementById(`lbl-${this.status}`).addEventListener("click", listener);
  }

  getHTML() {
    return `<div class="lbl lbl-${this.status}" id="lbl-${this.status}" data-status="${this.status}">${this.text}</div>`;
  }

  render(listener) {
    const html = this.getHTML();
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addListeners(listener);
    this.addListeners((e) => {
      console.log(e);
      const active = document.getElementsByClassName("lbl-active")[0];
      active.classList.remove("lbl-active");

      e.target.classList.add("lbl-active");
    });
  }
}
