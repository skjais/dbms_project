const mysql = require('mysql');
var express = require("express");
var router = express.Router();

router.post('/', function(req, res) {
    console.log(req.body);

    var con = mysql.createConnection({

        host: "localhost",
        user: "root",
        password: "sunil2000",
        database: 'project_db'
    });

    var t1 = "select * from teachers where  subject=?";




    con.query(t1, [req.body.subject], function(err, result) {
        if (err) {
            res.status(404).send("error in mysql");
            console.log(err);
        } else {


            res.status(200).send(result);

        }


    });
});

module.exports = router;