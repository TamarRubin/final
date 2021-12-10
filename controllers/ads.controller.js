
var db = require('../db');

const getAllAds = (req, res) => {
    db.query("SELECT * FROM ads", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};
const getAdById = (req, res) => {
    db.query(`SELECT * FROM ads where id=${req.params.idads}`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

const AddAd = (req, res) => {
    //  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    var ad_id = req.body.idads;
    var ad_iduser = req.body.adsiduser;
    var ad_idbook = req.body.adsidbook;
    var ad_price = req.body.adsprice;
    var ad_type = req.body.adstype;
    


    db.query(`INSERT INTO users (ad_id, ad_iduser, ad_idbook, ad_price, ad_type) VALUES 
    (${ad_id}, ${ad_iduser},${ad_idbook}, ${ad_price},${ad_type})`, function (err, result, fields) {
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
//     db.query(`UPDATE books set numCard  = ${req.body.numCard}validity =${req.body.validity}cvv = ${req.body.cvv}tz = ${req.body.tz}customer_id =  ${customer_id} where customer_id = ${req.body.idbooks}`, function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//         res.send(result);
//     });
// };

module.exports = {
    getAllAds,
    getAddById,
    AddAd,
    DeleteAd
    
};