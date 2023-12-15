const db = require("../config/dbContext");

const requestController = async(req, res) => {
    if (req.session.loggedin) {
        res.render("dashboard", { title: "SAYEM | Talep toplama formu"});
    } else {
        res.redirect("/login");
    }
}

module.exports =  {
    requestController
};