const db = require("../config/dbContext");
const { v4: uuidv4 } = require('uuid');

const findRequestView = async(req, res) => {
    res.render("request/request", { title: "SAYEM | Talep sorgulama"});
}

const findRequest = async(req, res) => {
    const { uuid } = req.params;

    const request = await db.Request.findUnique({
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
        res.render("request/detail", { title: "SAYEM | Talep detayı", data: request});
    } else {
        res.render("request/request", { title: "SAYEM | Talep sorgulama", error: "Talep bulunamadı!"});
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