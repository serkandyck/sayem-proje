const db = require("../config/dbContext");
const { v4: uuidv4 } = require('uuid');
const { body, validationResult } = require('express-validator')

const findRequestView = async(req, res) => {
    res.render("request/request", { title: "SAYEM | Talep sorgulama"});
}

const findRequest = async(req, res) => {
    const { uuid } = req.body;

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
       console.log(errors.array)
    }
    
    const request = await db.Request.findFirst({
        where: {
            uuid
        },
        include: {
            requestType: true
        },
        include: {
            responses: true
        }
    });
    
    console.log(request)
    
    if(request) {
        res.status(201).json({data: request});
    } else {
        res.status(404).json({message: "Talep bulunamadı."});
    }
}

const createRequest = async(req, res) => {
    const { requestType, requestTitle, requestContent } = req.body;
    //TODO validation

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
    findRequest,
    findRequestView
};