const express = require("express");
const path = require("path");
const htmlRoutes = require("./routes/htmlroutes");
const apiRoutes = require("./routes/apiroutes");

// JSON files = termData
const { request } = require("http");
const termData = require("./terms.json");
const PORT = process.env.PORT || 3001;

