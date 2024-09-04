const { Router } = require("express");
const {
  getCurrentUser,
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user-controller");
const { auth } = require("../middlewares/auth");

const router = Router();

// router.get();
router.route("/").get(getAllUser).post(createUser);
router.route("/profile").get(auth, getCurrentUser);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
