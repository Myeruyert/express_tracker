const { Router } = require("express");
const {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/record-controller");

const router = Router();

// router.get();
router.route("/").get(getAllRecord).post(createRecord);

router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
