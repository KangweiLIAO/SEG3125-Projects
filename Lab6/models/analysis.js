const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const analysisSchema = new Schema({
	//mongoose schema
	questionID: { type: String, required: true },	// the question database ID for this analysis
	counts: { type: Object, required: true }, // An array of counts indicating how many times the answers has been chosen (order must be same with the question's choices)
});

module.exports = mongoose.model("Analysis", analysisSchema, "analysis"); // mongoose model (Name should be unique);