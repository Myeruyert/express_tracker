const { Router } = require("express");
const {
  getAllCategory,
  // getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category-controller");
const { auth } = require("../middlewares/auth");

const router = Router();

// router.get();
router.route("/").get(getAllCategory).post(auth, createCategory);
// router.route("/").get(getCategory).post(auth, createCategory);
router.route("/:id").put(updateCategory).delete(deleteCategory);

module.exports = router;
