const requestRepository = require("../repository/requestRepository");
const responseRepository = require("../repository/responseRepository");

const view = async(req, res) => {
    const requests = await requestRepository.findMany()
    res.render("admin/dashboard", { layout: "../layouts/admin-layout", title: "SAYEM | Yetkili paneli", data: requests});
}

const detail = async(req, res) => {
    const uuid  = req.params.uuid;

    const request = await requestRepository.findUnique({
        where: {
            uuid: uuid
        },
        include: {
            requestType: true
        },
        include: {
            responses: true
        }
    })

    res.render("admin/request-detail", { layout: "../layouts/admin-layout", title: "SAYEM | Talep Detay", data: request});
}

const response = async(req, res) => {
    const { requestId, responseContent } = req.body;

    const response = await responseRepository.create({
        data :{
            message: responseContent,
            request: {
                connect: {
                    id: parseInt(requestId)
                }
            },
            author: {
                connect: {
                    username: req.session.username
                }
            }
        }
    });
    
    if(response) {
        const request = await requestRepository.update({
            where: {
                id: response.requestId
            },
            data: {
                status: true
            }
        });

        res.redirect("/admin/request/" + request.uuid);
    }
}

module.exports =  {
    view,
    detail,
    response
};