var db = require('../db')

const getAllBooks = (req, res) => {
  db.query('SELECT * FROM books where confirmed = 1', function (
    err,
    result,
    fields
  ) {
    if (err) throw err
    console.log(result)
    res.send(result)
  })
}
const getBookById = (req, res) => {
  db.query(`SELECT * FROM books where id=${req.params.id}`, function (
    err,
    result,
    fields
  ) {
    if (err) throw err
    console.log(result)
    res.send(result)
  })
}

const getIdBookByName = (req, res) => {
  var bookName = JSON.stringify(req.params.id)
  db.query(
    `SELECT id FROM books where name=${bookName} and confirmed = 1`,
    function (err, result, fields) {
      if (err) throw err
      console.log(result)
      res.send(result)
    }
  )
}
const getIdBookByNameNotOk = (req, res) => {
  var bookName = JSON.stringify(req.params.id)
  db.query(
    `SELECT id FROM books where name=${bookName}`,
    function (err, result, fields) {
      if (err) throw err
      console.log(result)
      res.send(result)
    }
  )
}
const AddBook = (req, res) => {
  var book_isbn = JSON.stringify(req.body.isbn)
  var book_name = JSON.stringify(req.body.name)
  var book_publishing = JSON.stringify(req.body.publishing)
  var book_writer = JSON.stringify(req.body.writer)
  var book_status = JSON.stringify(req.body.status)
  var book_image = JSON.stringify(req.body.image)
  var book_confirm = req.body.confirm

  db.query(
    `INSERT INTO books (isbn, name, publishingID, writerID, categoryID, picture, confirmed) VALUES 
     ( ${book_isbn},${book_name}, ${book_publishing},${book_writer}, ${book_status}, ${book_image}, ${book_confirm})`,
    function (err, result, fields) {
      if (err) throw err
      console.log(result)
      res.send(result)
    }
  )
}

const DeleteBook = (req, res) => {
  db.query(`DELETE FROM books where id=${req.body.idbooks}`, function (
    err,
    result,
    fields
  ) {
    if (err) throw err
    console.log(result)
    res.send(result)
  })
}

module.exports = {
  getAllBooks,
  getBookById,
  AddBook,
  DeleteBook,
  getIdBookByName,
  getIdBookByNameNotOk
}
