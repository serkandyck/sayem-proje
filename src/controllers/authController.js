const adminRepository = require("../repository/adminRepository");
const bcrypt = require("bcrypt")

const view = async(req, res) => {
    req.session.destroy()
    res.render("auth/login", { title: "SAYEM | Yetkili girişi"})
}

const login = async(req, res) => {
    const { username, password } = req.body

    const user = await adminRepository.findUnique({
        where: {
            username
        }
    })

    if(user) {
        const isSame = await bcrypt.compare(password, user.password);

        if (isSame) {
            req.session.username = user.username;
            var hour = 3600000
            req.session.cookie.expires = new Date(Date.now() + hour)
            req.session.cookie.maxAge = hour
            req.session.cookie.sameSite = true

            res.redirect('/admin');
        } else {
            res.redirect("/login?error=true");
        }
    } else {
        res.redirect("/login?error=true");
    }
}

const logout = async(req, res) => {
    req.session.destroy()
    res.redirect("/")
}

module.exports =  {
    view,
    login,
    logout
};