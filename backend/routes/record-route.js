const { Router } = require("express");
const { auth } = require("../middlewares/auth");
const {
  createRecord,
  deleteRecord,
  updateRecord,
  getRecordSum,
  getRecord,
  getDonutChartData,
  getBarChartData,
} = require("../controllers/record-controller");

const router = Router();

router.get("/sum", auth, getRecordSum);
router.get("/donutchart", auth, getDonutChartData);
router.get("/barchart", auth, getBarChartData);
router.route("/:id").get(getRecord).delete(deleteRecord).put(updateRecord);
router.post("/", createRecord);

module.exports = router;
