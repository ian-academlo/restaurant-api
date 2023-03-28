const { Router } = require("express");
const {
  createTable,
  getTableById,
  changeAvailability,
  deleteTable,
} = require("../controllers/tables.controllers");

const router = Router();

// crear una mesa
router.post("/tables", createTable);

router
  .route("/tables/:id")
  .get(getTableById)
  .put(changeAvailability)
  .delete(deleteTable);

module.exports = router;
