const db = require("../config/dbContext");

const view = async(req, res) => {
    res.render("admin/dashboard", { layout: "../layouts/admin-layout", title: "SAYEM | Talep toplama formu"});
}

module.exports =  {
    view
};