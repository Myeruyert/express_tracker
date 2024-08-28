const {Router} = require("express");
const { getAllUser, createUser, updateUser, deleteUser } = require("../controllers/user-controller");

const router = Router();

// router.get();
router.route("/").get(getAllUser).post(createUser);

router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router; 