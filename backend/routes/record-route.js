const { Router } = require("express");
const { auth } = require("../middlewares/auth");
const {
  // getAllRecords,
  createRecord,
  deleteRecord,
  updateRecord,
  getRecordSum,
  getRecord,
} = require("../controllers/record-controller");

const router = Router();

router.get("/sum", auth, getRecordSum);
router.route("/:id").get(getRecord).delete(deleteRecord).put(updateRecord);
router.post("/", createRecord);

module.exports = router;
