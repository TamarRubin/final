const mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "Tamar",
    password: "tamarubin8484",
    database: 'secondhandbooks'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


module.exports = con;