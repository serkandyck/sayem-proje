const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const sayem = await prisma.admin.upsert({
        where: { username: 'SAYEM' },
        update: {},
        create: {
            name: 'SAYEM',
            username: 'SAYEM',
            password: 'Alice'
        },
    })

    console.log(sayem)
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