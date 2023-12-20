const express = require('express')

const homeController  = require("../controllers/homeController");
const requestController = require("../controllers/requestController");
const authController = require("../controllers/authController");
const adminController = require("../controllers/adminController");
const responseController = require("../controllers/responseController");


const requireAuth = require("../middlewares/authGuard");

const router = express.Router()

// Anasayfa
router.get("/", homeController.view);

// Talep işlemleri
router.get("/request", requestController.view);
router.post("/request", requestController.create);
router.post("/request/:uuid", requestController.find);

// Yetkili işlemleri
router.get("/admin", requireAuth, adminController.view);
router.get("/admin/request/:uuid", requireAuth, adminController.detail);

// Cevap işlemleri
router.post("/admin/request/response", requireAuth, responseController.create);


// Authentication işlemleri
router.get("/login", authController.view);
router.post("/login", authController.login);
router.get("/logout", authController.logout);


module.exports = router