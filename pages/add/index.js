import { FormComponent } from "../../components/form/index.js";
import { ajax } from "../../modules/ajax.js";
import { saveUrls } from "../../modules/saveUrls.js";

export class AddPage {
  constructor(parent, mainPage) {
    this.parent = parent;
    this.mainPage = mainPage;
  }

  submitForm(e) {
    e.preventDefault();
    const formData = this.form.getFormData();

    if (!formData.title || !formData.adress || !formData.text) {
      alert("Пожалуйста, заполните обязательные поля");
      return;
    }

    ajax.post(saveUrls.createSave(), formData, (data, status) => {
      if (status === 201 || status === 200) {
        this.mainPage.render();
      } else {
        alert("Ошибка при сохранении карточки");
      }
    });
  }

  cancelForm() {
    this.mainPage.render();
  }

  render() {
    this.parent.innerHTML = "";
    this.form = new FormComponent(this.parent, "create");
    this.form.render({}, this.submitForm.bind(this), this.cancelForm.bind(this));
  }
}
