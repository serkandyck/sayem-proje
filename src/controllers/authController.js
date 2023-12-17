const db = require("../config/dbContext")
const bcrypt = require("bcrypt")

const view = async(req, res) => {
    res.render("auth/login", { title: "SAYEM | Yetkili girişi"})
}

const login = async(req, res) => {
    const { username, password } = req.body

    const user = await db.Admin.findUnique({
        where: {
            username
        }
    })

    console.log(user)

    if(user) {
        const isSame = await bcrypt.compare(password, user.password);

        if (isSame) {
            req.session.user = user
            res.redirect('dashboard');
        } else {
            res.render("auth/login", { title: "SAYEM | Yetkili girişi", error: "Kullanıcı adı veya şifre hatalı!"});
        }
    } else {
        res.render("auth/login", { title: "SAYEM | Yetkili girişi", error: "Kullanıcı adı veya şifre hatalı!"});
    }
}

module.exports =  {
    view,
    login
};