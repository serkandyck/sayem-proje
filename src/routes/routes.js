const express = require('express')

const { homeController } = require("../controllers/homeController");
const requestController = require("../controllers/requestController");
const { authController, loginController } = require("../controllers/authController");

const { requestCreateCheck } = require("../validators/requestCreate");
const { validateRequestFind } = require("../validators/requestFind");

const router = express.Router()

// Anasayfa
router.get("/", homeController);

// Talep sorgulama
router.get("/request", requestController.requestView);
router.post("/request/create", requestController.createRequest);
router.post("/request/:uuid", requestController.findRequest);
// Talep oluşturma

// Tek talep sorgulama
router.post("/request/find", requestController.findRequest);
// Talep listesi


router.get("/login", authController);
router.post("/login", loginController);



module.exports = router