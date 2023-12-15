const db = require("../config/dbContext")
const bcrypt = require("bcrypt")

const authController = async(req, res) => {
    res.render("auth/login", { title: "SAYEM | Yetkili girişi"})
}

const loginController = async(req, res) => {
    const { username, password } = req.body

    const user = await db.Admin.findUnique({
        where: {
            username
        }
    })

    if(user) {
        //eğer kullanıcı varsa bcrypt ile şifreleri karşılaştırıyoruz
        const isSame = await bcrypt.compare(password, user.password);

        //eğer şifre doğru ise uuid ile token oluşturup cookie'ye atıyoruz
        if (isSame) {
            req.session.userId = user.id
            res.redirect('dashboard');
        } else {
            res.render("auth/login", { title: "SAYEM | Yetkili girişi", error: "Kullanıcı adı veya şifre hatalı!"});
        }
        if(user.password === password) {
            req.session.user = user;
            res.redirect("/");
        } else {
            res.render("auth/login", { title: "SAYEM | Yetkili girişi", error: "Kullanıcı adı veya şifre hatalı!"});
        }
    } else {
        res.render("auth/login", { title: "SAYEM | Yetkili girişi", error: "Kullanıcı adı veya şifre hatalı!"});
    }
}

module.exports =  {
    authController,
    loginController
};