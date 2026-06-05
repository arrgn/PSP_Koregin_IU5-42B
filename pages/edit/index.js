import { FormComponent } from "../../components/form/index.js";
import { ajax } from "../../modules/ajax.js";
import { saveUrls } from "../../modules/saveUrls.js";

export class EditPage {
  constructor(parent, mainPage, cardId) {
    this.parent = parent;
    this.mainPage = mainPage;
    this.cardId = cardId;
  }

  submitForm(e) {
    e.preventDefault();
    const formData = this.form.getFormData();

    if (!formData.title || !formData.adress || !formData.text) {
      alert("Пожалуйста, заполните обязательные поля");
      return;
    }

    ajax.patch(saveUrls.updateSaveById(formData.id), formData, (data, status) => {
      if (status === 200 || status === 201) {
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

    ajax.get(saveUrls.getSaveById(this.cardId), (data) => {
      this.form = new FormComponent(this.parent, "edit");
      this.form.render(data, this.submitForm.bind(this), this.cancelForm.bind(this));
    });
  }
}
