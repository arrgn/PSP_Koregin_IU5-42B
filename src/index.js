const express = require("express");
const path = require("node:path");
const savesRouter = require("./routers/save");
const savesService = require("./services/savesService");

const app = express();
const PORT = 3000;

const DATA_FILE_PATH = path.join(__dirname, "data/saves.json");

savesService.init(DATA_FILE_PATH);

app.disable("x-powered-by");

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

app.use("/saves", savesRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Маршрут не найден" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Внутренняя ошибка сервера" });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
});
