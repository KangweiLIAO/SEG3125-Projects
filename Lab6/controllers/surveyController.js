/**
 * MongoDB models
 */
const { detectOverflow } = require("@popperjs/core");
const AnalysisModel = require("../models/analysis.js");
const QuestionModel = require("../models/question.js");

const question_get = (req, res) => {
	QuestionModel.find().then((qDoc) => {
		// send all questions to survey
		res.render("niceSurvey", { title: "Survey", questions: qDoc });
	});
};

const question_data_update = (req, res) => {
	const data = req.body;
	var user = {};
	console.log("form data = " + data);
	for (const key in data) {
		switch (key) {
			case "email":
				user.email = data[key];
				break;
			case "firstName":
				user.firstname = data[key];
				break;
			case "lastName":
				user.lastname = data[key];
				break;
			case "comment":
				user.comment = data[key];
				break;
			default:
				// survey question data:
				const qid = key.substring(3);
				var exist = false;
				AnalysisModel.findOne({ questionID: qid })
					.then((aDoc1) => {
						QuestionModel.findById(qid).then((qDoc) => {
							// find the question(qDoc) with (qid) in DB
							if (aDoc1 == null) {
								// document not exist, create new
								console.log(
									`Analysis doc with qid(${qid}) not found, creating new doc...`
								);
								// update countArr base on current data:
								const countArr = updateCounts(data, key, qDoc);
								new AnalysisModel({
									questionID: `${qid}`,
									counts: countArr,
								})
									.save()
									.then((qDoc) => {
										res.render("success", { title: "Survey" });
									})
									.catch((err) => {
										console.error(err);
										res.status(503);
									});
							} else {
								// document exist, update count
								console.log(
									`Analysis doc with qid(${qid}) found: updating...`
								);
								const countArr = updateCounts(data, key, qDoc, aDoc1);
								AnalysisModel.findOneAndUpdate(
									{ questionID: qid },
									{
										counts: countArr, // update countArr
									}
								)
									.then((aDoc2) => {
										res.render("success", { title: "Survey" });
									})
									.catch((err) => {
										console.error(err);
										res.status(503);
									});
							}
						});
					})
					.catch((err) => console.error(err));
				break;
		}
	}
};

const question_test = (req, res) => {
	new QuestionModel({
		question: "Test question",
		type: "single",
		choices: ["A", "B", "C"],
	})
		.save()
		.then((qDoc) => {
			res.send(qDoc);
		})
		.catch((err) => console.error(err));
};

function updateCounts(data, key, qDoc, aDoc = null) {
	var countArr = new Array(qDoc.choices.length).fill(0); // will be saved in analysis <counts> property later
	if (aDoc) countArr = aDoc.counts;
	if (qDoc.type == "single") {
		// if question is a single choice question
		for (let i = 0; i < countArr.length; i++) {
			if (qDoc.choices[i] == data[key]) {
				countArr[i]++;
			}
		}
	} else if (qDoc.type == "multiple") {
		// if question is a multiple choice question
		for (let i = 0; i < data[key].length; i++) {
			for (let j = 0; j < countArr.length; j++) {
				if (qDoc.choices[j] == data[key][i]) {
					countArr[j]++;
				}
			}
		}
	}
	return countArr;
}

module.exports = {
	question_get,
	question_test,
	question_data_update,
};
