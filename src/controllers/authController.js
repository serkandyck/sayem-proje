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
            res.redirect("/login?error=true");
        }
    } else {
        res.redirect("/login?error=true");
    }
}

module.exports =  {
    view,
    login
};