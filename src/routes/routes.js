const express = require('express')

const { homeController } = require("../controllers/homeController");
const { createRequest, findRequest, findRequestView, createRequestHTML } = require("../controllers/requestController");
const { authController, loginController } = require("../controllers/authController");

const { requestCreateCheck } = require("../validators/requestCreate");
const { validateRequestFind } = require("../validators/requestFind");

const router = express.Router()

// Anasayfa
router.get("/", homeController);

// Talep sorgulama
router.get("/request", findRequestView);
//router.get("/request/:uuid", findRequestWithUUID);
// Talep oluşturma
router.post("/request/create", createRequestHTML);
// Tek talep sorgulama
router.post("/request/find", findRequest);
// Talep listesi


router.get("/login", authController);
router.post("/login", loginController);



module.exports = router