const express = require('express')

const { homeController } = require("../controllers/homeController");
const { createRequest, findRequest, findRequestView } = require("../controllers/requestController");
const { authController, loginController } = require("../controllers/authController");

const { requestCreateCheck } = require("../validators/requestCreate");
const { validateRequestFind } = require("../validators/requestFind");

const router = express.Router()

// Anasayfa
router.get("/", homeController);

// Talep sorgulama
router.get("/request", findRequestView);
// Talep oluşturma
router.post("/request", createRequest);
// Tek talep sorgulama
router.post("/request/find", validateRequestFind, findRequest);
// Talep listesi


router.get("/login", authController);
router.post("/login", loginController);



module.exports = router