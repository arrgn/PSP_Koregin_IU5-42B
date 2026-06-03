const express = require("express");
const router = express.Router();
const savesController = require("../controllers/savesController");

// Определение маршрутов
router.get("/", savesController.getAllSaves);
router.get("/:id", savesController.getSaveById);
router.post("/", savesController.createSave);
router.patch("/:id", savesController.updateSave);
router.delete("/:id", savesController.deleteSave);

module.exports = router;
