var College = require("../models/College");
var Student = require("../models/Student");

exports.insert_college = function (req, res) {
  var college_data = new College({
    Id: req.body.id,
    Name: req.body.name.toUpperCase(),
    Year_founded: req.body.year_founded,
    City: req.body.city.toUpperCase(),
    State: req.body.state.toUpperCase(),
    Country: req.body.country.toUpperCase(),
    Number_of_students: req.body.number_of_students,
    Courses: req.body.courses.toUpperCase().split(",").sort(),
  });
  college_data.save((err, result) => {
    if (err) {
      res.json({
        message: "Sorry! Cannot insert record.",
      });
    } else {
      res.json({
        message: "College record added.",
      });
    }
  });
};

exports.insert_student = function (req, res) {
  var student_data = new Student({
    Id: req.body.id,
    Name: req.body.name.toUpperCase(),
    Year_of_batch: req.body.year_of_batch,
    College_id: req.body.college_id,
    Skills: req.body.skills.toUpperCase().split(",").sort(),
  });

  student_data.save((err, result) => {
    if (err) {
      res.json({
        message: "Sorry! Cannot insert record.",
      });
    } else {
      res.json({
        message: "Student record added.",
      });
    }
  });
};