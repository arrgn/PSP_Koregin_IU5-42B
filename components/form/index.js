export class FormComponent {
  constructor(parent, mode = "create") {
    this.parent = parent;
    this.mode = mode;
  }

  getHTML(data = {}) {
    const {
      id,
      title = "",
      adress = "",
      description = "",
      src = "",
      desc_src = "",
      text = "",
      status = "pending",
    } = data;

    const headerTitle =
      this.mode === "edit" ? "Редактировать музей" : "Добавить новый музей";

    // Генерируем выпадающий список для редактирования
    const statusSelect =
      this.mode === "edit"
        ? `
              <div class="form-group">
                <select id="status" name="status" class="form-select">
                  <option value="pending" ${status === "pending" ? "selected" : ""}>Сбор денег</option>
                  <option value="working" ${status === "working" ? "selected" : ""}>В процессе</option>
                  <option value="done" ${status === "done" ? "selected" : ""}>Завершено</option>
                </select>
              </div>
            `
        : `<input type="hidden" id="status" name="status" value="${status}" />`;

    return `
      <div class="form-container">
        <h2 class="uppercase">${headerTitle}</h2>
        <form id="add-form" class="form">
          <input type="hidden" id="id" name="id" value="${id || ""}" />
          <div class="row">
            <div class="col-lg">
              <div class="form-group">
                <input type="text" id="title" name="title" class="form-input" placeholder="Название" value="${title}" required />
              </div>

              <div class="form-group">
                <input type="text" id="adress" name="adress" class="form-input" placeholder="Адрес" value="${adress}" required />
              </div>

              <div class="form-group">
                <input type="text" id="description" name="description" class="form-input" placeholder="Краткое описание" value="${description}" required />
              </div>

              <div class="form-group">
                <input type="hidden" id="src" name="src" class="form-input" placeholder="Изображение" value="${src}" required />
              </div>

              <div class="form-group">
                <input type="hidden" id="desc_src" name="desc_src" class="form-input" placeholder="Изображение описания" value="${desc_src}" required />
              </div>

              <div class="form-group">
                <textarea id="text" name="text" class="form-textarea" rows="6" placeholder="Полное описание" required>${text}</textarea>
              </div>

              ${statusSelect}

              <div class="buttons-row">
                <a type="button" class="btn btn-default uppercase" id="save-button">Сохранить</a>
                <a class="btn btn-default uppercase" id="cancel-button">Отмена</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    `;
  }

  addListeners(submitListener, cancelListener) {
    document
      .getElementById("add-form")
      .addEventListener("submit", submitListener);
    document
      .getElementById("save-button")
      .addEventListener("click", submitListener);
    document
      .getElementById("cancel-button")
      .addEventListener("click", cancelListener);
  }

  render(data, submitListener, cancelListener) {
    const html = this.getHTML(data);
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addListeners(submitListener, cancelListener);
  }

  getFormData() {
    const form = document.getElementById("add-form");
    if (!form) return null;

    const formData = {
      title: form.title.value.trim(),
      adress: form.adress.value.trim(),
      description: form.description.value.trim(),
      src: form.src.value.trim(),
      desc_src: form.desc_src.value.trim(),
      text: form.text.value.trim(),
      status: form.status.value,
    };

    if (this.mode === "edit") {
      formData.id = Number.parseInt(form.id.value.trim());
    }

    return formData;
  }

  reset() {
    const form = document.getElementById("add-form");
    if (form) {
      form.reset();
    }
  }
}
