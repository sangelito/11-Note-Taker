const { Router } = require("express");
const { uuid } = require("crypto");

//GET route for notes
app.get("notes/:id", (req, res) => {
    const note = parsedNotes[req.params.id];
  });