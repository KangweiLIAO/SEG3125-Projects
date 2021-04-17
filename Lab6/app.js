/**
 * Node modules
 */
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const _ = require("lodash");

const app = express(); // express app

/**
 * Other requires
 */
const surveyRoutes = require("./routes/surveyRoutes.js");
const analysisRoutes = require("./routes/analysisRoutes.js");

/**
 * Connection to MongoDB
 */
const dbURI =
	"mongodb+srv://Guest:Testguest01@seg3125-labs.8pbt5.mongodb.net/lab6?retryWrites=true&w=majority";
let db = mongoose.connect(dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
db.then((res) => {
	// then() will be executed after connection succeed
	console.log(
		"Successfully connected to MongoDB. \nNow listening to port 3000..."
	);
	app.listen(3000); // listen for requests on port 3000
}).catch((err) => console.error(err));
app.set("view engine", "ejs"); // register view engine

/**
 * Middleware & Public files
 */
app.use(express.static("public"));

app.use(morgan("dev")); // log out connection info
app.use(express.urlencoded()); // parse html form data to object that we can use with req.body
app.use((req, res, next) => {
	console.log(`New request from ${req.hostname}:`);
	next(); // move on to next handler
});

/**
 * Routing rules:
 */
app.get("/", (req, res) => {
	res.redirect("/niceSurvey"); // redirect root route to "/niceSurvey"
});
app.use("/niceSurvey", surveyRoutes); // use surveyRoutes only for "/niceSurvey"
app.use("/analysis", analysisRoutes); // routes for "/analysis"

/**
 * 404 page:
 */
app.use((req, res) => {
	// 404 page
	res.status(404).render("404", { title: "Page Not Found" });
});
