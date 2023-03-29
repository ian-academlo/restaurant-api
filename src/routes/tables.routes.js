const { Router } = require("express");
const {
  createTable,
  getTableById,
  changeAvailability,
  deleteTable,
} = require("../controllers/tables.controllers");
const auth = require("../middlewares/auth.midleware");
const { isAdmin } = require("../middlewares/role.middleware");

const router = Router();
// ! USER SELLER ADMIN
// crear una mesa
router.post("/tables", auth, isAdmin, createTable); // * ADMIN

router
  .route("/tables/:id")
  .get(auth, getTableById) // * USER, SELLER, ADMIN
  .put(auth, changeAvailability) // * SELLER, ADMIN
  .delete(auth, deleteTable); // * ADMIN

module.exports = router;
