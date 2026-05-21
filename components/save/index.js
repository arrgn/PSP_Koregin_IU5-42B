export class SaveComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(data) {
    return `
      <div>
        <h1 class="projectname">
          <span class="projectname-span">${data.title}</span>
        </h1>
        <div class="project-adress">${data.adress}</div>
        <div class="row">
          <div class="col-lg-7">
            <div class="tab-content fade show">
              <img class="project-img" src="${data.desc_src}" alt="картинка">
              <h3>Описание объекта</h3>
              <p>${data.text}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  render(data) {
    const html = this.getHTML(data);
    this.parent.insertAdjacentHTML("beforeend", html);
  }
}
