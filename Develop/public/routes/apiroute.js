const { Router } = require("express");
const { uuid } = require("crypto");

//GET route for notes
app.get("notes/:id", (req, res) => {
    const note = parsedNotes[req.params.id];
  });

//route to api
app.get("api", (req, res) => res.json(notes));

// export 
module.exports = router; 