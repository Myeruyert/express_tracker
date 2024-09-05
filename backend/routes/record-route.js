const { Router } = require("express");
const {
  getRecord,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/record-controller");

const router = Router();

// router.get();
router.route("/:id").get(getRecord);
router.route("/").post(createRecord);

router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
