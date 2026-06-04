const fileService = require("./fileService");

let dataFilePath;

const init = (filePath) => {
  dataFilePath = filePath;
};

const findAll = (status) => {
  const saves = fileService.readData(dataFilePath);
  if (status) {
    return saves.filter((stock) => stock.status === status);
  }
  return saves;
};

const findOne = (id) => {
  const saves = fileService.readData(dataFilePath);
  return saves.find((save) => save.id === id);
};

const create = (saveData) => {
  const saves = fileService.readData(dataFilePath);

  const newId = saves.length > 0 ? Math.max(...saves.map((s) => s.id)) + 1 : 1;

  const newStock = { id: newId, ...saveData, src: `./public/1.jpg`, desc_src: `./public/1-1.jpg` };
  saves.push(newStock);
  fileService.writeData(dataFilePath, saves);

  return newStock;
};

const update = (id, saveData) => {
  const saves = fileService.readData(dataFilePath);
  const index = saves.findIndex((s) => s.id === id);

  if (index === -1) return null;

  saves[index] = { ...saves[index], ...saveData };
  fileService.writeData(dataFilePath, saves);

  return saves[index];
};

const remove = (id) => {
  const saves = fileService.readData(dataFilePath);
  const filteredStocks = saves.filter((save) => save.id !== id);

  if (filteredStocks.length === saves.length) {
    return false;
  }

  fileService.writeData(dataFilePath, filteredStocks);
  return true;
};

module.exports = { init, findAll, findOne, create, update, remove };
