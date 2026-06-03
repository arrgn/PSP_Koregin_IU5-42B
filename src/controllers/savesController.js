const savesService = require("../services/savesService");

const getAllSaves = (req, res) => {
  const { status } = req.query;
  const savse = savesService.findAll(status);
  res.json(savse);
};

const getSaveById = (req, res) => {
  const id = Number.parseInt(req.params.id);
  const save = savesService.findOne(id);

  if (!save) {
    return res.status(404).json({ error: "Карточка не найдена" });
  }

  res.json(save);
};

const createSave = (req, res) => {
  const { title, adress, description, text } = req.body;

  if (!title || !adress || !description || !text) {
    return res.status(400).json({ error: "Не все поля заполнены" });
  }

  const newSave = savesService.create({ title, adress, description, text });
  res.status(201).json(newSave);
};

const updateSave = (req, res) => {
  const id = Number.parseInt(req.params.id);
  const updatedSave = savesService.update(id, req.body);

  if (!updatedSave) {
    return res.status(404).json({ error: "Карточка не найдена" });
  }

  res.json(updatedSave);
};

const deleteSave = (req, res) => {
  const id = Number.parseInt(req.params.id);
  const success = savesService.remove(id);

  if (!success) {
    return res.status(404).json({ error: "Карточка не найдена" });
  }

  res.status(204).send();
};

module.exports = {
  getAllSaves,
  getSaveById,
  createSave,
  updateSave,
  deleteSave,
};
