const path = require("path");
const router = require("express").Router();

//Defining GET route/callback function
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
