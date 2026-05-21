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
              <div class="accordion" id="accordion-${data.id}">
                <div class="accordion-item">
                  <div class="accordion-header" id="heading-${data.id}">
                    <h3 class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${data.id}" aria-expanded="true" aria-controls="collapse-${data.id}">
                      ${data.title}
                    </h3>
                  </div>
                  <div id="collapse-${data.id}" class="accordion-collapse collapse" aria-labelledby="heading-${data.id}" data-bs-parent="#accordion-${data.id}">
                    <div class="accordion-body">
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
