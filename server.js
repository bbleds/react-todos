"use strict";
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const MONGODB_URL = "mongodb://demo:demo@ds027415.mlab.com:27415/reacttodo";
const PORT = process.env.PORT || 3000;
const app = express();

// use app directory for static files
app.use(express.static(path.join(__dirname, 'app')));

// body parser config
app.use(bodyParser.json());

// routes
app.use(require("./routes"));

//-----------------  connect to mongo and spin up app
mongoose.connect(MONGODB_URL, (err) =>
{
  if (err) throw err;
  app.listen(PORT, () =>
  {
    console.log(`App listening on port ${PORT}`);
  });
});
