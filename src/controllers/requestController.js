const db = require("../config/dbContext");

const requestController = async(req, res) => {
    const { requestType, requestTitle, requestContent } = req.body;
    //TODO validation

    const request = await db.Request.create({
        data :{
            title: requestTitle,
            description: requestContent,
            requestType : {
                connect: {
                    id: parseInt(requestType)
                }
            }
        }
    });

    res.redirect("/");
}

module.exports =  {
    requestController
};