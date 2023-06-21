// const { Router } = require("express");
// const { uuid } = require("crypto");
const path = require("path");
const router = require("express").Router();
//GET route for notes
router.delete("/notes/:id", (req, res) => {
    const note = parsedNotes[req.params.id];
  });

//route to api
router.get("/", (req, res) => res.json(notes));

// export 
module.exports = router; 