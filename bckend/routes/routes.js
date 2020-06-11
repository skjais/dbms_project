const router = require("express").Router();


const StudentLogin = require('../login/studentlogin');
router.use('/studentlogin', StudentLogin);


const TeacherLogin = require('../login/teacherlogin');
router.use('/teacherlogin', TeacherLogin);


const StudentRegister = require('../register/studentregister');
router.use('/studentregister', StudentRegister);


const TeacherRegister = require('../register/teacherregister');
router.use('/teacherregister', TeacherRegister);

const TeacherData = require('../getdata/teacherdata');
router.use('/teacherdata', TeacherData);



module.exports = router;