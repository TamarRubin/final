const mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "Michal",
    password: "ms0504109521",
    database: 'dbproject'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


module.exports = con;