const express = require('express')

const { homeController } = require("../controllers/homeController");
const { createRequest, findRequest, findRequestView } = require("../controllers/requestController");
const { authController, loginController } = require("../controllers/authController");

const router = express.Router()

// Anasayfa
router.get("/", homeController);

// Talep oluşturma
router.post("/form-request", createRequest);
// Talep sorgulama
router.get("/find-request", findRequestView);
// Talep detayı
router.get("/find-request/:uuid", findRequest);

router.get("/login", authController);
router.post("/form-login", loginController);



module.exports = router