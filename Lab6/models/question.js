const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
	//mongoose schema
    question: {type: String, required: true}, // the question string: (e.g."What's your favorite fruit?")
	type: { type: String, required: true }, // question type: ("single", "multiple", "select", "text")
	choices: {type: Object, required: true}, // choices:  A string array of choices (e.g. ["apple", "banana", "orange"])
});

module.exports = mongoose.model("Questions", questionSchema, "questions"); // mongoose model (name, schema, collection-name);