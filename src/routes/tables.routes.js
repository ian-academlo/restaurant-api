const { Router } = require("express");
const {
  createTable,
  getTableById,
  changeAvailability,
  deleteTable,
} = require("../controllers/tables.controllers");
const auth = require("../middlewares/auth.midleware");
const { isAdmin, hasRoles } = require("../middlewares/role.middleware");

const router = Router();
// ! USER SELLER ADMIN
// crear una mesa
router.post("/tables", auth, hasRoles("ADMIN"), createTable); // * ADMIN

router
  .route("/tables/:id")
  .get(auth, hasRoles("USER", "SELLER", "ADMIN"), getTableById) // * USER, SELLER, ADMIN
  .put(auth, hasRoles("SELLER", "ADMIN"), changeAvailability) // * SELLER, ADMIN
  .delete(auth, isAdmin, deleteTable); // * ADMIN

module.exports = router;
