const express = require('express')

const homeController  = require("../controllers/homeController");
const requestController = require("../controllers/requestController");
const authController = require("../controllers/authController");
const adminController = require("../controllers/adminController");

const router = express.Router()

// Anasayfa
router.get("/", homeController.view);

// Talep işlemleri
router.get("/request", requestController.view);
router.post("/request", requestController.create);
router.post("/request/:uuid", requestController.find);

// Yetkili işlemleri
router.get("/admin", adminController.view);


// Authentication işlemleri
router.get("/login", authController.view);
router.post("/login", authController.login);
router.get("/notautherized", authController.unauthorized);



module.exports = router