const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const homeController = async(req, res) => {
    const types = await prisma.RequestType.findMany()
    res.render("home", { title: "SAYEM | Talep toplama formu", data: types});
}

module.exports =  {
    homeController
};