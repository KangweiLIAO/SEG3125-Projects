const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
	//mongoose schema
	type: { type: String, required: true },
	name: { type: String, required: true },
	count: { type: Number, required: true },
});

const Answer = mongoose.model("Answer", answerSchema); // mongoose model (Name should be unique)
module.exports = Answer;