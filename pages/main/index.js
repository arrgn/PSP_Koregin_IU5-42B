import { SaveCardComponent } from "../../components/save-card/index.js";
import { CardPage } from "../card/index.js";

export class MainPage {
  constructor(parent) {
    this.parent = parent;
    this.status = "pending";

    this.allRecords = [
      {
        id: 1,
        src: "./public/1.jpg",
        title: "Вывеска «Ателье мод»",
        adress: "Якутск, Чиряева, 4",
        description: "Ремонт вывески 1960-х годов в Якутске.",
        status: "pending",
      },
      {
        id: 2,
        src: "./public/2.jpg",
        title: "Раскрытие и консервация росписей в доходном доме Городисского",
        adress: "Ростов-на-Дону, Пушкинская ул., 98",
        description: "Раскрытие и консервация настенных росписей в парадной.",
        status: "pending",
      },
      {
        id: 3,
        src: "./public/3.jpg",
        title:
          "11 памятников Старого кладбища: проект консервации и противоаварийных работ",
        adress: "Таганрог, Лагерный переулок",
        description:
          "Проектная документация по консервационным и противоаварийным работам.",
        status: "pending",
      },
    ];
  }

  getHTML() {
    return `
      <h2 class="uppercase">Активные объекты</h2>
      <div id="filters-root"></div>
      <div id="cards-root"></div>
    `;
  }

  getData() {
    return this.allRecords.filter((el) => el.status == this.status);
  }

  setStatus(status) {
    this.status = status;
  }

  openCard(e) {
    const cardId = e.target.dataset.id;
    const cardPage = new CardPage(this.parent, cardId);
    cardPage.render();
  }

  delCard(e) {
    const cardId = e.target.dataset.id;
    this.allRecords = this.allRecords.filter((el) => el.id != cardId);

    this.render();
  }

  render() {
    this.parent.innerHTML = this.getHTML();
    const filters = document.getElementById("filters-root");
    const cards = document.getElementById("cards-root");

    const data = this.getData();
    data.forEach((el) => {
      const saveCard = new SaveCardComponent(cards);
      saveCard.render(el, this.openCard.bind(this), this.delCard.bind(this));
    });
  }
}
