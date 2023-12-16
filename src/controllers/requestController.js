const db = require("../config/dbContext");

const requestController = async(req, res) => {
    const { request_type, request_title, request_content } = req.body;
    //TODO validation

    const request = await db.Request.create({
        data :{
            title: request_title,
            description: request_content,
            requestType : {
                connect: {
                    id: parseInt(request_type)
                }
            }
        }
    });

    res.redirect("/");
}

module.exports =  {
    requestController
};