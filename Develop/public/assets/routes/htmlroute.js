const path = require("path");
const router = require("express").Router();

//Defining GET route/callback function
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
//GET route for notes 
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  
// fall back GET route 
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

//export
module.exports = router; 