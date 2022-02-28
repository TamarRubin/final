
var db = require('../db');

const getAllAds = (req, res) => {
    db.query("SELECT * FROM ads", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const getAllOkAds = (req, res) => {
    db.query("SELECT * FROM ads where status = 1", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};
const getAllAdsToConfirm = (req, res) => {
    db.query("SELECT * FROM ads where status = 0", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};
const getFirstOkAd = (req, res) => {
    db.query("SELECT * FROM ads where ads.status = 1 and ads.id = 1", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};
const getAdsBywriter = (req, res) => {
    db.query(`SELECT * FROM ads join users on ads.bookID = users.id 
        where users.writerID=${req.params.writerID} and ads.status = 1`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const getAdsByCity = (req, res) => {
    db.query(`SELECT * FROM ads join users on ads.userID = users.id join cities on cities.id = users.cityID
        where cities.id=${req.params.cityID} and ads.status = 1`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const getAdsByNeighberhood = (req, res) => {
    db.query(`SELECT * FROM ads join users on ads.userID = users.id join neighberhood on neighberhood.id = users.neighberhoodID
        where neighberhood.id=${req.params.cityID} and ads.status = 1`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const getAdsByPublishing = (req, res) => {
    db.query(`SELECT * FROM ads join books on ads.bookID = books.id join publishing on publishing.id = books.publishingID
        where publishing.id=${req.params.publishingID} and ads.status = 1`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const getAdsByIsbn = (req, res) => {
    db.query(`SELECT * FROM ads join books on ads.bookID = books.id
        where books.isbn=${req.params.isbn} and ads.status = 1`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const getAdsByNameBook = (req, res) => {
    db.query(`SELECT * FROM ads join books on ads.bookID = books.id 
        where books.name=${req.params.name} and ads.status = 1`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const getAdsBydId = (req, res) => {
    db.query(`SELECT * FROM ads where id=${req.params.idads}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const AddAd = (req, res) => {
    //  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    
        
    var ad_iduser = req.body.adsiduser;
    var bookId = req.body.adsNamebook;
    var ad_price = req.body.adsprice;
    var ad_type = req.body.adstype;
   
    
    // db.query(`SELECT id FROM books where name=${adsNamebook}`, function (err, result, fields) {
    //     if (err) throw err;
    //     bookId=result;
    // });


    db.query(`INSERT INTO ads (userID, bookID, price, status) VALUES 
    (${ad_iduser},${bookId}, ${ad_price},${ad_type})`, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
};

const DeleteAd = (req, res) => {
    db.query(`DELETE FROM ads where id=${req.body.idads}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        
    });

};

// const UpdateCreditcard = (req, res) => {
//     // "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'"
//     db.query(`UPDATE users set numCard  = ${req.body.numCard}validity =${req.body.validity}cvv = ${req.body.cvv}tz = ${req.body.tz}customer_id =  ${customer_id} where customer_id = ${req.body.idbooks}`, function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//         res.send(result);
//     });
// };

module.exports = {
    getAllAds,
    
    getAllOkAds,
    getAdsBydId,
    AddAd,
    DeleteAd,
    getFirstOkAd,
    getAllAdsToConfirm
};