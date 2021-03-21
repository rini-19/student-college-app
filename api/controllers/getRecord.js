var College = require("../models/College");
var Student = require("../models/Student");

exports.findCollege = function (req, res) {
	College.findOne({ Id: req.query.id }).then((results) => {
		if (results){
			res.json(results);
		} else {
			res.json({ message: "No results found" });
		}
	});
};

exports.college_byState = async function (req, res) {
  var states = [];
  var count = [];
  College.distinct("State", {}).then(async (results) => {
    await Promise.all(
      results.map(async (state) => {
        await College.findOne({ State: state })
          .count()
          .then((cnt) => {
            states.push(state);
            count.push(cnt);
          });
      })
    );
    res.json({ states, count });
  });
};

exports.college_byCourses = async function (req, res) {
  var courses = [];
  var count = [];
  College.distinct("Courses", {}).then(async (results) => {
    await Promise.all(
      results.map(async (course) => {
        await College.findOne({ Courses: course })
          .count()
          .then((cnt) => {
            courses.push(course);
            count.push(cnt);
          });
      })
    );
    res.json({ courses, count });
  });
};

exports.similarCollege_byState = function (req, res) {
  College.find({ State: req.query.state }).then((results) => {
    if (results) res.json(results);
    else {
      res.json({ message: "No results found" });
    }
  });
};

exports.students_filterByCollegeID = function (req, res) {
  Student.find({ College_id: req.query.college_id }).then((results) => {
    if (results.length > 0) res.json(results);
    else {
      res.json({ message: "No results found" });
    }
  });
};

exports.similarColleges = function (req, res) {
  var state = req.query.state;
  var courses = [];
  courses = req.query.courses.split(",");

  const number_of_students = Number(req.query.number_of_students);
  const min = number_of_students - 100;
  const max = number_of_students + 100;
  College.find({
    State: state,
    Number_of_students: {
      $gte: min,
      $lte: max,
    },
    Courses: courses,
  }).then((results) => {
    if (results.length > 0) {
      res.json(results);
    } else {
      res.json({ message: "No results found" });
    }
  });
};
exports.findStudent = function (req, res) {
  Student.findOne({ Id: req.query.id }).then((results) => {
    if (results) res.json(results);
    else {
      res.json({ message: "No results found" });
    }
  });
};