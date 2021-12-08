const router = require("express").Router();
const { getAllRooms, getRoomById, AddRoom, DeleteRoom, UpdateRoomName } = require("../controllers/room.controller")
const { getAllCustomer, getCustomerById, AddCustomer, DeleteCustomer, UpdateNameCustomer } = require("../controllers/customer.controller")
const { getAllCreditcard, getCreditcardById, AddCreditcard, DeleteCreditcard, UpdateCreditcard } = require("../controllers/creditcard.controller")
const { getAllDeal, getDealById, AddDeal, DeleteDeal, UpdateDeal } = require("../controllers/deal.controller")

router.get("/getAllRooms", getAllRooms);
router.get("/getRoomById/:id", getRoomById);
router.post("/AddRoom", AddRoom);
router.post("/DeleteRoom", DeleteRoom);
router.post("/UpdateRoom", UpdateRoomName);

router.get("/getAllCustomer", getAllCustomer);
router.get("/getCustomerById/:id", getCustomerById);
router.post("/AddCustomer", AddCustomer);
router.post("/DeleteCustomer", DeleteCustomer);
router.post("/UpdateNameCustomer", UpdateNameCustomer);

router.get("/getAllCreditcard", getAllCreditcard);
router.get("/ getCreditcardById", getCreditcardById);
router.post("/AddCreditcard", AddCreditcard);
router.post("/DeleteCreditcard", DeleteCreditcard);
router.post("/UpdateCreditcard", UpdateCreditcard);

router.get("/getAllDeal", getAllDeal);
router.get("/ getDealById", getDealById);
router.post("/AddDeal", AddDeal);
router.post("/DeleteDeal", DeleteDeal);
router.post("/UpdateDeal", UpdateDeal);

module.exports = router;