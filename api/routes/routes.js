const express = require('express');
const router = express.Router();

const insertData = require('../controllers/insertRecord');
const getData = require('../controllers/getRecord');

router.post("/insertCollege", insertData.insert_college);
router.post("/insertStudent", insertData.insert_student);
router.get("/findCollege", getData.findCollege);
router.get("/college_byState", getData.college_byState);
router.get("/college_byCourses", getData.college_byCourses);
router.get("/similarCollege_byState", getData.similarCollege_byState);
router.get("/similarColleges", getData.similarColleges);
router.get("/students_filterByCollegeID", getData.students_filterByCollegeID);
router.get("/findStudent", getData.findStudent);

module.exports = router;