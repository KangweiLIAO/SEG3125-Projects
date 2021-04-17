const express = require("express");
const controller = require("../controllers/surveyController");
const router = express.Router(); // like a mini express router

router.get("/", controller.question_get);
router.post("/", controller.question_data_update);

// Database test:
router.post("/dbtest/question", controller.question_test);

module.exports = router;
