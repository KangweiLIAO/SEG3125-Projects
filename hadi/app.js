const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const AnswerModel = require("./models/answer.js")
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const fs = require("fs");

const app = express();

// connect to MongoDB
const dbURI =
	"mongodb+srv://Guest:Testguest01@seg3125-labs.8pbt5.mongodb.net/lab6?retryWrites=true&w=majority";
let db = mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
db.then((res) => {
	// then() will be executed after connection succeed
	console.log("Successfully connected to MongoDB. \nNow listening to port 3000...");
    app.listen(3000); // listen for requests on port 3000
}).catch((err) => console.error(err));
app.set("view engine", "ejs"); // register view engine

// Reading Function for json
function read(fileName){
	let fileRead = fs.readFileSync('./models/' + fileName + '.json');
    let dataRead = JSON.parse(fileRead);
    return dataRead;
}

// Writing Function for json
function write(data, fileName){
	stringData = JSON.stringify(data);
	fs.writeFileSync('./models/' + fileName + '.json', stringData);
}

// Adding to the json fileSize
function add(fileName, response){
	data = read(fileName);
	var located = false;
	for (var i=0; i<data.length; i++){
		if(data[i][fileName] === response){
			data[i].count=parseInt(data[i].count)+1;
			located = !located;
		}
	}
	if (!located){
		data.push({[fileName]:response, count: 1});
	}
	write(data,fileName);
}

// Middleware & Public files
app.use(express.static("public"));

app.use(morgan("dev")); // log out connection info
app.use((req, res, next) => {
	console.log(`New request from ${req.hostname}: ${req.method} ${req.path}`);
	next(); // move on to next handler
});

// Routing rules:
app.get("/", (req, res) => {
	res.redirect("/niceSurvey"); // redirect root to "/survey"
});

app.get("/niceSurvey", (req, res) => {
	res.render("niceSurvey", { title: "Survey" });
});

app.post("/niceSurvey", urlencodedParser, (req, res) => {
	var data = req.body;
	for (var setKey in data){
		console.log(setKey + ":" + data[setKey]);
		if ((setKey === "site")||(setKey === "layout")&&(data[setKey] instanceof Array)){
			for (var checked in data[setKey]){
				add(setKey,data[setKey][checked]);
			}
		}
		else{
			add(setKey,data[setKey]);
		}
	}
});

app.get("/analysis", (req, res) => {
	var theme = read("theme");
    var filter = read("filter");
	var easy = read("easy");
	var experience = read("experience");
	var site = read("site");
	var layout = read("layout");
	var region = read("region");
	res.render('tabulatedResults', {results: [theme,filter,easy,experience,site,layout,region]});
});

app.get("/admin", (req, res) => {
	res.render("admin", { title: "Admin" });
});

app.get("/DBTest", (req, res) => {
    const answer = new AnswerModel({
        type : "fruit",
        name : "apple",
        count: 12
    });
    // save this entry to DB:
    answer.save().then((result) => {
        res.send(result);
    }).catch((err) => console.error(err));
})

app.use((req, res) => {
	// 404 page
	res.status(404).render("404", { title: "Page Not Found" });
});
