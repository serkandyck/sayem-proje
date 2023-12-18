'use strict'

const prisma = require('./prismaClient');

class AdminRepository {
    get create() {
        return prisma.Admin.create;
    }

    get update() {
        return prisma.Admin.update;
    }

    get delete() {
        return prisma.Admin.delete;
    }

    get findUnique() {
        return prisma.Admin.findUnique;
    }

    get findFirst() {
        return prisma.Admin.findFirst;
    }

    get findMany() {
        return prisma.Admin.findMany;
    }
}

module.exports = new AdminRepository();