export class AddButtonComponent {
  constructor(parent) {
    this.parent = parent;
  }

  addListeners(listener) {
    document.getElementById("add-button").addEventListener("click", listener);
  }

  getHTML() {
    return `<a class="btn btn-default" id="add-button">Добавить</a>`;
  }

  render(listener) {
    const html = this.getHTML();
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addListeners(listener);
  }
}
