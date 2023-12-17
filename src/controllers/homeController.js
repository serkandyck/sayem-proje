const db = require("../config/dbContext");

const view = async(req, res) => {
    const types = await db.RequestType.findMany()
    res.render("home", { title: "SAYEM | Talep toplama formu", data: types});
}

module.exports =  {
    view
};