const router = require("express").Router();
const { getAllBooks, getBookById, AddBook, DeleteBook, getIdBookByName, getIdBookByNameNotOk, getAdsByFilters } = require("../controllers/books.controller")
const { getAllUsers, getUserById, AddUser, DeleteUser, getUserByPassword } = require("../controllers/users.controller")
const { getAllAds, getAdById, getAllOkAds, getFirstOkAd, AddAd, DeleteAd } = require("../controllers/ads.controller");
const { getAllcities, getCityById } = require("../controllers/cities.controller");
const { getAllneighberhoods, getNeighberhoodById } = require("../controllers/neighberhoods.controller");
//const { getAllDeal, getDealById, AddDeal, DeleteDeal, UpdateDeal } = require("../controllers/deal.controller")


const { getAllPublishings } = require("../controllers/publishings.controller")
const { getAllcategories } = require("../controllers/categories.controller")
// const {getAdsByFilters} = require("../controllers/books.controller")
const { getAllWriters } = require("../controllers/writers.controller")


router.get("/getAllBooks", getAllBooks);
router.get("/getBookById/:id", getBookById);
router.get("/getIdBookByName/:id", getIdBookByName);
router.get("/getIdBookByNameNotOk/:id", getIdBookByNameNotOk);
router.post("/AddBook", AddBook);
router.post("/DeleteBook", DeleteBook);
//router.post("/UpdateRoom", UpdateRoomName);

router.get("/getAdsByFilters", getAdsByFilters);
//router.post("/UpdateRoom", UpdateRoomName);

router.get("/getAllUsers", getAllUsers);
router.get("/getAllCities", getAllcities);
router.get("/getAllPublishings", getAllPublishings);
router.get("/getAllWriters", getAllWriters);
router.get("/getAllCategories", getAllcategories);

// router.get("/getAdsByFilters", getAdsByFilters);

router.get("/getAllUsers", getAllUsers);
router.get("/getUserById/:id", getUserById);
router.post("/getUserByPassword", getUserByPassword);
router.post("/AddUser", AddUser);

router.post("/DeleteUser", DeleteUser);
//router.post("/UpdateNameCustomer", UpdateNameCustomer);

router.get("/getAllAds", getAllAds);
router.get("/getAllOkAds", getAllOkAds);
router.get("/getAdById/:id", getAdById);
router.post("/AddAd", AddAd);
router.post("/DeleteAd", DeleteAd);
router.get("/getFirstOkAd", getFirstOkAd)
//router.post("/UpdateCreditcard", UpdateCreditcard);

router.get("/getAllcities", getAllcities)
router.get("/getCityById/:id", getCityById);

router.get("./getAllneighberhoods", getAllneighberhoods)
router.get("/getNeighberhoodById/:id", getNeighberhoodById);
module.exports = router;