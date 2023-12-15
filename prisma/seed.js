const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcrypt")
const prisma = new PrismaClient()

async function main() {
    const createUser = await prisma.admin.create({
        data: {
            name: 'SAYEM',
            username: 'SAYEM',
            password: await bcrypt.hash('sayem.1234', 10)
        }
    })

    const requestType = await prisma.RequestType.createMany({
        data: [
            {
                name: 'GENEL'
            },
            {
                name: 'ÖNERİ'
            },
            {
                name: 'ŞİKAYET'
            }
        ]
    })

    console.log({ createUser, requestType })
}
main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})