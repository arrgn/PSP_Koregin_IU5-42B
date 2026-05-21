import { SaveCardComponent } from "../../components/save-card/index.js";
import { CardPage } from "../card/index.js";
import { FilterButtonComponent } from "../../components/filter-button/index.js";
import { AddButtonComponent } from "../../components/add-button/index.js";

export class MainPage {
  constructor(parent) {
    this.parent = parent;
    this.status = "pending";

    this.allRecords = [
      {
        id: 1,
        src: "./public/1.jpg",
        desc_src: "./public/1-1.jpg",
        title: "Вывеска «Ателье мод»",
        adress: "Якутск, Чиряева, 4",
        description: "Ремонт вывески 1960-х годов в Якутске.",
        text: "Дом номер четыре на улице Чиряева был построен в 1968 году, и уже при строительстве дома, на специальном выступе, была установлена вывеска «Ателье мод Люкс». Ателье занимало весь первый этаж, поэтому вывеска протянулась вдоль всего дома. Фон сделали из волнистого стеклопластика бордового цвета, а буквы были серебристыми. В 2000-х годах Администрация города по новому регламенту пыталась поменять вывеску, но сами хозяева отказались. Последний раз ремонт вывески был осуществлен в 2007 году — покрасили буквы, подложку; при ремонте строители задели часть правой подложки, где отвалился фрагмент. На зеленой подложке виден бордовый край — это оригинальный цвет вывески.",
        status: "pending",
      },
      {
        id: 2,
        src: "./public/2.jpg",
        desc_src: "./public/2-1.jpg",
        title: "Раскрытие и консервация росписей в доходном доме Городисского",
        adress: "Ростов-на-Дону, Пушкинская ул., 98",
        description: "Раскрытие и консервация настенных росписей в парадной.",
        text: "Бывший доходный дом по современному адресу: ул. Пушкинская, 98 (старый адрес — ул. Пушкинская, 144) был построен в 1905 году присяжным поверенным (юристом) Городисским Абрамом Захаровичем. Городисский родился в 1865 году в Киевской губернии. Окончанил курсы в Харьковском университете со степенью кандидата прав. В 1891 году переехал в Ростов-на-Дону, где занял видное положение в местной адвокатуре. Также принимал активное участие в деятельности благотворительных обществ. В здании сохранилось множество исторических элементов: мраморный пол с лестницей, метлахская плитка, лепнина с природными мотивами, два женских маскарона, изящная лестничная ограда, деревянная фрамуга входной двери. И что самое чудесное: под краской и побелкой обнаружились модерновые росписи!",
        status: "pending",
      },
      {
        id: 3,
        src: "./public/3.jpg",
        desc_src: "./public/3-1.jpg",
        title: "11 памятников Старого кладбища: проект консервации и противоаварийных работ",
        adress: "Таганрог, Лагерный переулок",
        description: "Проектная документация по консервационным и противоаварийным работам.",
        text: "На территории Старого кладбища Таганрога — объекта культурного наследия регионального значения — насчитывается около 200 надгробий, подлежащих сохранению. Многие из них находятся в плохом состоянии. Бюджет города по статье содержания кладбищ стабильно дефицитен, поэтому рассчитывать на финансирование реставрации памятников не приходится: средств порой не хватает даже на вывоз мусора.",
        status: "pending",
      },
      {
        id: 4,
        src: "./public/4.jpg",
        desc_src: "./public/4-1.jpg",
        title: "Вывеска «Миру – мир»: второй этап работ",
        adress: "Петрозаводск, ул. Чарльза Гаскойна, д. 4",
        description:
          "Изготовление запаса ламп для оперативного обслуживания вывески на случай, когда старые лампы будут выходить из строя.",
        text: "Газосветная советская вывеска «Миру – мир» раньше висела на окраине Петрозаводска, а в 2023 году переехала практически в центр. Теперь она украшает фасад бывшего цеха Онежского тракторного завода, где недавно открылся «Музей недавнего». Масштабная световая конструкция стала его главным экспонатом.",
        status: "working",
      },
      {
        id: 5,
        src: "./public/5.jpg",
        desc_src: "./public/5-1.jpg",
        title: "Мозаичное панно «Балканы»: реставрация",
        adress: "Ростов-на-Дону, ул.Нижнебульварная, 14",
        description: "Восстановление советской мозаики.",
        text: "Команда «Том Сойер Феста» в Ростове-на-Дону взялась за восстановление еще одной мозаики. В этом году это большое мозаичное панно, которое украшало вход в культовый советский ресторан «Балканы». ",
        status: "working",
      },
      {
        id: 6,
        src: "./public/6.jpg",
        desc_src: "./public/6-1.jpg",
        title: "Arinan Talo",
        adress: "Выборг, ул. Северная, дом 12",
        description: "Воссоздание парадной двери.",
        text: "Arinan Talo – выборгское здание, построенное в духе финского национального романтизма. Оно было возведено в 1904 году, когда Выборг был вторым крупнейшим и богатейшим городом Финляндии. Экономическая ситуация привела к строительному буму, и в начале XX века город активно застраивался.",
        status: "done",
      },
    ];
    this.newId = this.allRecords.length + 1;
  }

  getHTML() {
    return `
      <h2 class="uppercase">Активные объекты</h2>
      <div id="filters-root"></div>
      <div id="cards-root"></div>
    `;
  }

  getData() {
    if (this.status == "all") {
      return this.allRecords;
    }

    return this.allRecords.filter((el) => el.status == this.status);
  }

  setStatus(status) {
    this.status = status;
  }

  openCard(e) {
    const cardId = e.target.dataset.id;
    const data = this.allRecords.find((el) => el.id == cardId);
    const cardPage = new CardPage(this.parent, data, this);
    cardPage.render();
  }

  delCard(e) {
    const cardId = e.target.dataset.id;
    this.allRecords = this.allRecords.filter((el) => el.id != cardId);

    this.render();
  }

  addCard(e) {
    const newCardOrigin =
      this.status == "all" ? this.allRecords[0] : this.allRecords.find((el) => el.status == this.status);
    const newCard = { ...newCardOrigin };
    if (!newCard) {
      return;
    }

    newCard.id = this.newId++;
    this.allRecords.push(newCard);

    this.renderData();
  }

  setStatusFilter(e) {
    const status = e.target.dataset.status;
    this.status = status;

    this.renderData();
  }

  renderFilters() {
    const filters = document.getElementById("filters-root");
    filters.innerHTML = "";

    const filterAll = new FilterButtonComponent(filters, "all", "Все");
    const filterPending = new FilterButtonComponent(filters, "pending", "Сбор денег");
    const filterWorking = new FilterButtonComponent(filters, "working", "В процессе");
    const filterDone = new FilterButtonComponent(filters, "done", "Завершены");
    filterAll.render(this.setStatusFilter.bind(this));
    filterPending.render(this.setStatusFilter.bind(this));
    filterWorking.render(this.setStatusFilter.bind(this));
    filterDone.render(this.setStatusFilter.bind(this));

    document.getElementById("lbl-pending").classList.add("lbl-active");

    const addCard = new AddButtonComponent(filters);
    addCard.render(this.addCard.bind(this));
  }

  renderData() {
    const cards = document.getElementById("cards-root");
    cards.innerHTML = "";

    const data = this.getData();
    data.forEach((el) => {
      const saveCard = new SaveCardComponent(cards);
      saveCard.render(el, this.openCard.bind(this), this.delCard.bind(this));
    });
  }

  render() {
    this.parent.innerHTML = this.getHTML();

    this.renderFilters();
    this.renderData();
  }
}
