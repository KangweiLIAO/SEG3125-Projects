const express = require("express");
const controller = require("../controllers/analysisController");
const router = express.Router(); // like a mini express router

router.get("/", controller.analysis_get);

// Database test:
router.post("/dbtest/analysis", controller.analysis_test);

module.exports = router;
