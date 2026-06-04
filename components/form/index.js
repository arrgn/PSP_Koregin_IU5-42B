export class FormComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(data = {}) {
    const {
      title = "",
      adress = "",
      description = "",
      src = "",
      desc_src = "",
      text = "",
    } = data;

    return `
      <div class="form-container">
        <h2 class="uppercase">Добавить новый музей</h2>
        <form id="add-form" class="form">
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

              <!--
              <div class="form-group">
                <input type="text" id="src" name="src" class="form-input" placeholder="Изображение" value="${src}" required />
              </div>

              <div class="form-group">
                <input type="text" id="desc_src" name="desc_src" class="form-input" placeholder="Изображение описания" value="${desc_src}" required />
              </div>
              --!>

              <div class="form-group">
                <textarea id="text" name="text" class="form-textarea" rows="6" placeholder="Полное описание" required>${text}</textarea>
              </div>

              <input type="hidden" id="status" name="status" value="pending" />

              <div class="buttons-row">
                <a type="submit" class="btn btn-default uppercase" id="save-button">Сохранить</button>
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

    return {
      title: form.title.value.trim(),
      adress: form.adress.value.trim(),
      description: form.description.value.trim(),
      src: form.src.value.trim(),
      desc_src: form.desc_src.value.trim(),
      text: form.text.value.trim(),
      status: form.status.value,
    };
  }

  reset() {
    const form = document.getElementById("add-form");
    if (form) {
      form.reset();
    }
  }
}
