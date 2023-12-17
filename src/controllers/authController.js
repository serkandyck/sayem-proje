const db = require("../config/dbContext")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


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

    if(user) {
        const isSame = await bcrypt.compare(password, user.password);

        if (isSame) {
            token = jwt.sign(
                { userId: user.id, username: user.username },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );
            
            res.status(200).json({ data: token });
        } else {
            res.redirect("/login?error=true");
        }
    } else {
        res.redirect("/login?error=true");
    }
}

const unauthorized = async(req, res) => {
    res.render("auth/notautherized", { title: "SAYEM | Yetkisiz"})
}

module.exports =  {
    view,
    login,
    unauthorized
};