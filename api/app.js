const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path')
var cors = require("cors");

const config = require("./config/db.config");
const api = require("./routes/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

//DB configuration
mongoose
  .connect(config.MongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//routing
app.use('/api',api);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('../frontend/build'));
  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});