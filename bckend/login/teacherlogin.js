const mysql = require('mysql');
var express = require("express");
var router = express.Router();

router.post('/', function(req, res) {
    this.obj = req.body;
    console.log(this.obj);

    console.log("data sent successfully");
    var con = mysql.createConnection({

        host: "localhost",
        user: "root",
        password: "sunil2000",
        database: 'project_db'
    });

    var t1 = "select exists(select * from teachers where teachers.username=? and teachers.password=?) as EXIST";

    con.connect(function(err) {

        if (err) throw err;
        console.log("Connected!");

        con.query(t1, [req.body.username, req.body.password], function(err, result) {
            if (err) {
                res.status(404).send("error in mysql");
                console.log(err);
            } else {

                res.status(200).send(result[0]);

                console.log(result[0].EXIST);
                console.log(result);

                console.log('success', req.body.username);
            }
        });

    });
});

module.exports = router;