/**
 * MongoDB models
 */
const AnalysisModel = require("../models/analysis.js");
const QuestionModel = require("../models/question.js");

const analysis_get = (req, res) => {
	AnalysisModel.find().then((aDocs) => {
		// send all questions & analysis data to /analysis
		QuestionModel.find().then((qDocs) => {
			res.render("analysis", { title: "Analysis", aDocs: aDocs, qDocs: qDocs });
		});
	});
};

const analysis_test = (req, res) => {
	new AnalysisModel({
		questionID: "Test-qid",
		count: [1, 3, 2],
	})
		.save()
		.then((result) => {
			res.send(result);
		})
		.catch((err) => console.error(err));
};

module.exports = {
	analysis_get,
	analysis_test,
};
