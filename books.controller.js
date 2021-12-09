
var db = require('../db');

const getAllBooks = (req, res) => {
    db.query("SELECT * FROM books", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};
const getBookById = (req, res) => {
    db.query(`SELECT * FROM books where id=${req.params.id}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const AddBook = (req, res) => {
    //  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    var book_id = req.body.idbooks;
    var book_isbn = req.body.customer_id;
    var book_name = req.body.booksname;
    var book_publishing = req.body.bookspublishing;
    var book_writer = req.body.bookswriter;
    var book_status = req.body.booksstatus;
    var book_picture = req.body.bookspicture;
    var book_col = req.body.bookscol;


    db.query(`INSERT INTO books (book_id, book_isbn, book_name, book_publishing, book_writer, book_status, book_picture, book_col) VALUES 
    (${book_id}, ${book_isbn},${book_name}, ${book_publishing},${book_writer}, ${book_status}, ${book_picture}, ${book_col})`, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
};

const DeleteCreditcard = (req, res) => {
    db.query(`DELETE FROM books where id=${req.body.idbooks}`, function (err, result, fields) {
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
    getAllCreditcard,
    getCreditcardById,
    AddCreditcard,
    DeleteCreditcard,
    //UpdateCreditcard
};