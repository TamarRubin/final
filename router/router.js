const router = require("express").Router();
const { getAllBooks, getBookById, AddBook, DeleteBook } = require("../controllers/books.controller")
const { getAllUsers, getUserById, AddUser, DeleteUser, getUserByPassword} = require("../controllers/users.controller")
const { getAllAds, getAdById, AddAd, DeleteAd } = require("../controllers/ads.controller")
//const { getAllDeal, getDealById, AddDeal, DeleteDeal, UpdateDeal } = require("../controllers/deal.controller")

router.get("/getAllBooks", getAllBooks);
router.get("/getBookById/:id", getBookById);
router.post("/AddBook", AddBook);
router.post("/DeleteBook", DeleteBook);
//router.post("/UpdateRoom", UpdateRoomName);

router.get("/getAllUsers", getAllUsers);
router.get("/getUserById/:id", getUserById);
router.post("/getUserByPassword", getUserByPassword);
router.post("/AddUser", AddUser);

router.post("/DeleteUser", DeleteUser);
//router.post("/UpdateNameCustomer", UpdateNameCustomer);

router.get("/getAllAds", getAllAds);
//router.get("/getAllOkAds", getAllOkAds);
//router.get("/ getAdById", getAdsById);
router.post("/AddAd", AddAd);
router.post("/DeleteAd", DeleteAd);
//router.post("/UpdateCreditcard", UpdateCreditcard);



module.exports = router;