var db = require("../db/db.json");
var fs = require("fs");

const path = require("path");
const router = require("express").Router();

//working delete function
router.delete("/notes/:id", (req, res) => {
    const note = parsedNotes[req.params.id];
  });

//route to api
router.get("/notes", function (req, res) {
  res.json(db);
});

  // API POST Request
  router.post("/notes", function (req, res) {
    // Receive a new note to save on the request body, add it to the db.json file
    db.push(req.body);
    // Add unique id to each note
    db.forEach((obj, i) => {
      obj.id = i + 1;
    });
    // Return the new note to the client
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
      res.json(db);
    });
  });

// export 
module.exports = router; 

