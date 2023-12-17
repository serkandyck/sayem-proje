const db = require("../config/dbContext");

const view = async(req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    //Authorization: 'Bearer TOKEN'
    if(!token)
    {
        // Headerde token yok
        res.redirect("/notautherized");
    }

    //Token decode ediliyor
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET );

    if(decodedToken)
    {
        // Token geçerli
        res.render("home", { title: "SAYEM | Talep toplama formu", data: types});
    } else {
        // Token geçersiz
        res.redirect("/notautherized");
    }
}

module.exports =  {
    view
};