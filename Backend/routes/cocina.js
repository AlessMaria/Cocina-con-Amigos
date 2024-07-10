var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ams92004004',
    database : 'amigoscocinando'
});

connection.connect();



/* GET home page. */
router.get('/', function(req, res, next) {

    connection.query('select * from usuario', function (error, results, fields) {
        if (error) throw error;
        res.json({data:results})
    });


// res.render('index', { title: 'Express' });
});

module.exports = router;