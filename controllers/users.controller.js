
var db = require('../db');

const getAllUsers = (req, res) => {
    db.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};
const getUserById = (req, res) => {
    db.query(`SELECT * FROM users where id=${req.params.idusers}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const AddUser = (req, res) => {
    //  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    var user_id = req.body.idusers;
    var user_name = req.body.username;
    var user_phone1 = req.body.userphone1;
    var user_phone2 = req.body.userphone2;
    var user_adress = req.body.useradress;
    var user_mail = req.body.usermail;
    var user_password = req.body.password;
    


    db.query(`INSERT INTO users (user_id, user_name, user_phone1, user_phone2, user_adress, user_mail, user_password) VALUES 
    (${user_id}, ${user_name},${user_phone1}, ${user_phone2},${user_adress}, ${user_mail}, ${user_password})`, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
};

const DeleteUser = (req, res) => {
    db.query(`DELETE FROM users where id=${req.body.idusers}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        
    });

};

// const UpdateCreditcard = (req, res) => {
//     // "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'"
//     db.query(`UPDATE books set numCard  = ${req.body.numCard}validity =${req.body.validity}cvv = ${req.body.cvv}tz = ${req.body.tz}customer_id =  ${customer_id} where customer_id = ${req.body.idbooks}`, function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//         res.send(result);
//     });
// };

module.exports = {
    getAllUsers,
    getUserById,
    AddUser,
    DeleteUser
    
};