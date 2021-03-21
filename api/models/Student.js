const mongoose = require("mongoose");
const College = require("./College");

const StudentSchema = mongoose.Schema({
  Id: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Year_of_batch: {
    type: String,
    required: true,
  },
  College_id: {
    type: String,
    ref:College,
    required: true,
  },
  Skills: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Student", StudentSchema);