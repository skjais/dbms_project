const mysql = require('mysql');
var express = require("express");
var router = express.Router();
var multer = require('multer');
var upload = multer();

var obj;
router.post('/', upload.single("picurl"), function(req, res) {

    console.log(req.body);
    console.log(req.file);

    this.obj = req.body;

    var con = mysql.createConnection({

        host: "localhost",
        user: "root",
        password: "sunil2000",
        database: 'project_db'
    });


    var t1 = `create table if not exists students(fname varchar(30),lname varchar(30),
              username varchar(30),password varchar(30),email varchar(30),dob varchar(30),
              phoneno varchar(30),address varchar(30),zip varchar(30),gender varchar(30))`;

    var t2 = `create table if not  exists state(city varchar(30),state varchar(30))`;

    var t3 = `create table if not  exists city(zip varchar(30),city varchar(30))`;

    var student = [
        [
            this.obj.fname,
            this.obj.lname,
            this.obj.username,
            this.obj.password,
            this.obj.email,
            this.obj.dob,
            this.obj.phoneNumber,
            this.obj.address,
            this.obj.zip,
            this.obj.gender

        ]

    ];
    var state = [
        [
            this.obj.city,
            this.obj.stateName,
        ]
    ]
    var city = [
        [this.obj.zip,
            this.obj.city,

        ]
    ]
    console.log(student);
    var insertStudent = "insert into students values ?";
    var insertCity = "insert into city values ?";
    var insertState = "insert into state values ?";


    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

        con.query(t1);
        con.query(t2);
        con.query(t3);


        con.query(insertStudent, [student], function(err, result) {
            console.log(err);
            if (err) res.status(404).send({ "error": "user already exist" })

            else {
                res.status(200).send("student added successfully");
            }


        });
        con.query(insertCity, [city]);

        con.query(insertState, [state]);



    });
});
module.exports = router;