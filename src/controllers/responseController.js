const responseRepository = require("../repository/responseRepository");
const requestRepository = require("../repository/requestRepository");


const create = async(req, res) => {
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
    create
};