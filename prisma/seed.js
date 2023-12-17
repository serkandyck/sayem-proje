const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcrypt")
const prisma = new PrismaClient()

async function main() {

    // Hazır tanımlı kullanıcı oluşturuluyor
    const createUser = await prisma.admin.create({
        data: {
            username: 'SAYEM',
            password: await bcrypt.hash('sayem.1234', 10)
        }
    })

    // Formda talep tipi için hazır tanımlı veriler oluşturuluyor
    const requestType = await prisma.RequestType.createMany({
        data: [
            {
                name: 'İSTEK'
            },
            {
                name: 'ŞİKAYET'
            },
            {
                name: 'ÖNERİ'
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