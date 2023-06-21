const express = require("express");
const path = require("path");
const htmlRoutes = require("../routes/htmlroute");
const apiRoutes = require("./routes/apiroute");

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
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });
// route for api 
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
