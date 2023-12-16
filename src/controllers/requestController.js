const db = require("../config/dbContext");
const { v4: uuidv4 } = require('uuid');


const requestController = async(req, res) => {
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
    requestController
};