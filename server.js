const express = require("express");
const path = require("path");
const htmlRoutes = require("./routes/htmlroute");
const apiRoutes = require("./routes/apiroute");


const PORT = process.env.PORT || 3001;

// initialize app 
const app = express (); 

// parse incoming data 
app.use(express.urlencoded({ extended: true }));

//parse JSON data 
app.use(express.json());
app.use(express.static("public"));


// route for api 
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
