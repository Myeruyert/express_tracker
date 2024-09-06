const { Router } = require("express");
const {
  getRecord,
  getSumRecord,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/record-controller");
const { auth } = require("../middlewares/auth");

const router = Router();

// router.get();
router.route("/:id").get(getRecord);
router.route("/sum").get(auth, getSumRecord);
router.route("/").post(createRecord);

router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
