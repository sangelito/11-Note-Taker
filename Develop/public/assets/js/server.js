const express = require("express");
const path = require("path");
const htmlRoutes = require("./routes/htmlroutes");
const apiRoutes = require("./routes/apiroutes");

// JSON files = termData
const { request } = require("http");
const termData = require("./terms.json");
const PORT = process.env.PORT || 3001;

// initialize app 
const app = express (); 

// parse incoming data 
app.use(express.urlencoded({ extended: true }));
//parse JSON data 
app.use(express.json());
app.use(express.static("public"));

const parsedNotes = Json.parse(Notes);
console.info("parsed notes", parsedNotes);
// route for notes 

// route for api 

