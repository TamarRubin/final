
var db = require('../db');

const getAllBooks = (req, res) => {
    db.query("SELECT * FROM books where confirmed = 1", function (err, result, fields) {
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

const getIdBookByName = (req, res) => {
    db.query(`SELECT id FROM books where name=${req.params.name} and confirmed = 1`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const AddBook = (req, res) => {
    //  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    //var raq_json = req.body
    
    // var book_id = req.body.bookID;
     var book_isbn = req.body.isbn;
    var book_name = req.body.name;
     var book_publishing = req.body.publishing;
     var book_writer = req.body.writer;
     var book_status = req.body.status;
    // var book_picture = req.body.picture;
    
    var writerId = 


     db.query(`INSERT INTO books (isbn, name, publishing, writer, status) VALUES 
     ( ${book_isbn},${book_name}, ${book_publishing},${book_writer}, ${book_status})`, function (err, result, fields) {
          if (err) throw err;
           console.log(result);
             res.send(result);
         });
    res.send(result);
};

const DeleteBook = (req, res) => {
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
    getAllBooks,
    getBookById,
    AddBook,
    DeleteBook,
    getIdBookByName

    //UpdateCreditcard
};