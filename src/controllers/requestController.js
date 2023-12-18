const requestRepository = require("../repository/requestRepository");
const { v4: uuidv4 } = require('uuid');

const view = async(req, res) => {
    res.render("request/request", { title: "SAYEM | Talep sorgulama"});
}

const find = async(req, res) => {
    const uuid  = req.params.uuid;
    
    const request = await requestRepository.findFirst({
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

const create = async(req, res) => {
    const { requestType, requestTitle, requestContent } = req.body;

    const request = await requestRepository.create({
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
        
    if(request) {
        res.redirect("/?success=true&uuid=" + request.uuid);
    }
}


module.exports =  {
    view,
    find,
    create
};