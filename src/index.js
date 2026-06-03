const express = require("express");
const path = require("node:path");
const savesRouter = require("./routes/saves");
const savesService = require("./services/savesService");

const app = express();
const PORT = 3000;

app.disable("x-powered-by");

const DATA_FILE_PATH = path.join(__dirname, "data/saves.json");

savesService.init(DATA_FILE_PATH);

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use("/stocks", savesRouter);

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
