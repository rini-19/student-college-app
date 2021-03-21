const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");

const config = require("./config/db.config");
const api = require("./routes/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

//DB configuration
mongoose
  .connect(config.MongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//routing
app.use('/api',api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});