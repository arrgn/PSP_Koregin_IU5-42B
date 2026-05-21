import { SaveComponent } from "../../components/save/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";

export class CardPage {
  constructor(parent, data, mainPage) {
    this.parent = parent;
    this.data = data;
    this.mainPage = mainPage;
  }

  get pageRoot() {
    return document.getElementById("product-page");
  }

  clickBack() {
    this.mainPage.render();
  }

  render() {
    this.parent.innerHTML = "";

    const save = new SaveComponent(this.parent);
    save.render(this.data);

    const backButton = new BackButtonComponent(this.parent);
    backButton.render(this.clickBack.bind(this));
  }
}
