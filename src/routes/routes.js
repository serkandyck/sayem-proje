const express = require('express')

const { homeController } = require("../controllers/homeController");
const { createRequest, findRequest, findRequestView } = require("../controllers/requestController");
const { authController, loginController } = require("../controllers/authController");

const { requestCreateCheck } = require("../validators/requestCreate");

const router = express.Router()

// Anasayfa
router.get("/", homeController);

// Talep
router.get("/request/:uuid", findRequest);
// Talep oluşturma
router.post("/request/create", createRequest);
// Talep sorgulama
router.get("/find-request", findRequestView);
// Talep detayı
router.post("/find-request", findRequest);

router.get("/login", authController);
router.post("/login", loginController);



module.exports = router