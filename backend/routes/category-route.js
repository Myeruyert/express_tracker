const { Router } = require("express");
const {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category-controller");
const { auth } = require("../middlewares/auth");

const router = Router();

// router.get();
router.route("/:id").get(auth, getAllCategory).post(auth, createCategory);

router.route("/:id").put(updateCategory).delete(deleteCategory);

module.exports = router;
