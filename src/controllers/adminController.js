const db = require("../config/dbContext");

const view = async(req, res) => {
    const requests = await db.Request.findMany()
    res.render("admin/dashboard", { layout: "../layouts/admin-layout", title: "SAYEM | Yetkili paneli", data: requests});
}

const detail = async(req, res) => {
    const uuid  = req.params.uuid;

    const request = await db.Request.findUnique({
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

    const response = await db.Response.create({
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
        const request = await db.Request.update({
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