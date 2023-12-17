const db = require("../config/dbContext");
const { v4: uuidv4 } = require('uuid');
const { body, validationResult } = require('express-validator')

const findRequestView = async(req, res) => {
    res.render("request/request", { title: "SAYEM | Talep sorgulama"});
}

const findRequest = async(req, res) => {
    const { uuid } = req.body;
    
    const request = await db.Request.findFirst({
        where: {
            uuid: uuid
        },
        include: {
            requestType: true
        },
        include: {
            responses: true
        }
    });
        
    if(request) {
        res.render("request/detail", { title: "SAYEM | Talep durumu", data: request});
    } else {
        res.redirect("/request?error=true");
    }
}

const findRequestWithUUID = async(req, res) => {
    const { uuid } = req.params;
    
    const request = await db.Request.findFirst({
        where: {
            uuid: uuid
        },
        include: {
            requestType: true
        },
        include: {
            responses: true
        }
    });
        
    if(request) {
        res.render("request/request", { title: "SAYEM | Talep sorgulama", request: request});
    } else {
        res.redirect("/request?error=true");
    }
}


const createRequestHTML = async(req, res) => {
    const { requestType, requestTitle, requestContent } = req.body;

    const request = await db.Request.create({
        data :{
            uuid: uuidv4(),
            title: requestTitle,
            content: requestContent,
            requestType : {
                connect: {
                    id: parseInt(requestType)
                }
            }
        }
    });
        
    res.redirect("/?success=true&uuid=" + request.uuid);
}


const createRequestValidationRules = () => {
    return [
        body('requestType').isNumeric().withMessage('Lütfen bir talep türü seçiniz.'),
        body('requestTitle').isLength({ min: 5 }).withMessage('Lütfen talebiniz için en az 5 karakter giriniz.'),
        body('requestContent').isLength({ min: 10 }).withMessage('Lütfen talebiniz için en az 10 karakter giriniz.')
    ]
}

const createRequest = async(req, res) => {
    const { requestType, requestTitle, requestContent } = req.body;

    try {
        const request = await db.Request.create({
            data :{
                uuid: uuidv4(),
                title: requestTitle,
                content: requestContent,
                requestType : {
                    connect: {
                        id: parseInt(requestType)
                    }
                }
            }
        });
        
        res.status(201).json({message: "Talebiniz başarıyla alındı.", uuid: request.uuid});
    } catch (error) {
        res.status(500).json({message: "Beklenmedik bir hata ile karşılaşıldı.",});
    }
}

module.exports =  {
    createRequest,
    createRequestHTML,
    findRequest,
    findRequestView
};