import { SaveCardComponent } from "../../components/save-card/index.js";
import { CardPage } from "../card/index.js";
import { FilterButtonComponent } from "../../components/filter-button/index.js";
import { AddButtonComponent } from "../../components/add-button/index.js";
import { AddPage } from "../add/index.js";
import { EditPage } from "../edit/index.js";
import { ajax } from "../../modules/ajax.js";
import { saveUrls } from "../../modules/saveUrls.js";

export class MainPage {
  constructor(parent) {
    this.parent = parent;
    this.status = "pending";
  }

  getHTML() {
    return `
      <h2 class="uppercase">Активные объекты</h2>
      <div id="filters-root"></div>
      <div id="cards-root"></div>
    `;
  }

  getData() {
    const status = this.status === "all" ? null : this.status;
    ajax.get(saveUrls.getSaves(status), (data) => {
      this.renderData(data);
    });
  }

  openCard(e) {
    const cardId = e.target.dataset.id;
    ajax.get(saveUrls.getSaveById(cardId), (data) => {
      const cardPage = new CardPage(this.parent, data, this);
      cardPage.render();
    });
  }

  delCard(e) {
    const cardId = e.target.dataset.id;
    ajax.delete(saveUrls.removeSaveById(cardId), (data) => {
      this.getData();
    });
  }

  openAddForm(e) {
    this.addPage = new AddPage(this.parent, this);
    this.addPage.render();
  }

  openEditForm(e) {
    const cardId = e.target.dataset.id;
    this.editPage = new EditPage(this.parent, this, cardId);
    this.editPage.render();
  }

  setStatusFilter(e) {
    const status = e.target.dataset.status;
    this.status = status;

    this.getData();
  }

  renderFilters() {
    const filters = document.getElementById("filters-root");
    filters.innerHTML = "";

    const filterAll = new FilterButtonComponent(filters, "all", "Все");
    const filterPending = new FilterButtonComponent(
      filters,
      "pending",
      "Сбор денег",
    );
    const filterWorking = new FilterButtonComponent(
      filters,
      "working",
      "В процессе",
    );
    const filterDone = new FilterButtonComponent(filters, "done", "Завершены");
    filterAll.render(this.setStatusFilter.bind(this));
    filterPending.render(this.setStatusFilter.bind(this));
    filterWorking.render(this.setStatusFilter.bind(this));
    filterDone.render(this.setStatusFilter.bind(this));

    document.getElementById("lbl-pending").classList.add("lbl-active");

    const addCard = new AddButtonComponent(filters);
    addCard.render(this.openAddForm.bind(this));
  }

  renderData(data) {
    const cards = document.getElementById("cards-root");
    cards.innerHTML = "";

    data.forEach((el) => {
      const saveCard = new SaveCardComponent(cards);
      saveCard.render(
        el,
        this.openCard.bind(this),
        this.openEditForm.bind(this),
        this.delCard.bind(this),
      );
    });
  }

  render() {
    this.parent.innerHTML = this.getHTML();

    this.renderFilters();
    this.getData();
  }
}
