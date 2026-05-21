export class SaveCardComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(data) {
    return `
      <div class="card-item">
        <div class="row">
          <div class="col-lg-7">
            <img class="card-img" src="${data.src}" alt="картинка">
          </div>
          <div class="col-lg-5">
            <div class="card-body">
              <h3>${data.title}</h3>
              <div class="card-adress">${data.adress}</div>
              <p class="card-text">${data.description}</p>
              <div class="buttons-row">
                <a class="btn btn-default uppercase" id="open-card-${data.id}" data-id="${data.id}">Подробнее</a>
                <a class="btn btn-default uppercase" id="del-card-${data.id}" data-id="${data.id}">Удалить</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
  }

  addListeners(data, openListener, delListener) {
    document.getElementById(`open-card-${data.id}`).addEventListener("click", openListener);
    document.getElementById(`del-card-${data.id}`).addEventListener("click", delListener);
  }

  render(data, openListener, delListener) {
    const html = this.getHTML(data);
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addListeners(data, openListener, delListener);
  }
}
