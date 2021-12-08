
var db = require('../db');

const getAllCustomer = (req, res) => {
    db.query("SELECT * FROM customer", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};
const getCustomerById = (req, res) => {
    db.query(`SELECT * FROM customer where id=${req.params.id}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const AddCustomer = (req, res) => {
    //  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    var id = req.body.id;
    var mail = req.body.mail;
    var nameCustomer = req.body.nameCustomer;
    var passwordCustomer = req.body.passwordCustomer;
    var phone = req.body.phone;
    var addressCustomer = req.body.addressCustomer;

    db.query(`INSERT INTO customer (id, mail, nameCustomer, passwordCustomer,phone, addressCustomer) VALUES (${id}, ${JSON.stringify(req.body.mail)}, ${JSON.stringify(req.body.nameCustomer)}
    ,${JSON.stringify(req.body.passwordCustomer)},${phone}, ${JSON.stringify(req.body.addressCustomer)})`, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
};

const DeleteCustomer = (req, res) => {
    db.query(`DELETE FROM customer where id=${req.body.id}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const UpdateNameCustomer = (req, res) => {
    // "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'"
    db.query(`UPDATE customer set nameCustomer =  ${JSON.stringify(req.body.UpdateNameCustomer)} where id = ${req.body.id}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};
module.exports = {
    getAllCustomer,
    getCustomerById,
    AddCustomer,
    DeleteCustomer,
    UpdateNameCustomer
};