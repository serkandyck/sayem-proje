const { body } = require("express-validator")

const requestCreateCheck = () => {
    return [
        body("requestType").not().isEmpty().withMessage("Lütfen talep tipi seçiniz."),
        body("requestTitle").not().isEmpty().withMessage("Lütfen talep başlığı giriniz."),
        body("requestContent").not().isEmpty().withMessage("Lütfen talep içeriği giriniz."),
    ]
}

module.exports = {
    requestCreateCheck
}