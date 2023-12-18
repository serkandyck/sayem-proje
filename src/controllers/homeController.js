const requestTypeRepository = require("../repository/requestTypeRepository");

const view = async(req, res) => {
    const types = await requestTypeRepository.findMany()
    res.render("home", { title: "SAYEM | Talep toplama formu", data: types});
}

module.exports =  {
    view
};