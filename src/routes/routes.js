const express = require('express')

const { homeController } = require("../controllers/homeController");
const { requestController } = require("../controllers/requestController");
const { authController, loginController } = require("../controllers/authController");

const router = express.Router()

router.get("/", homeController);

router.post("/form-request", requestController);

router.get("/login", authController);
router.post("/form-login", loginController);

router.get("/dashboard", requestController);

module.exports = router