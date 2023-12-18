'use strict'

const prisma = require('./prismaClient');

class RequestRepository {
    get create() {
        return prisma.Request.create;
    }

    get update() {
        return prisma.Request.update;
    }

    get delete() {
        return prisma.Request.delete;
    }

    get findUnique() {
        return prisma.Request.findUnique;
    }

    get findFirst() {
        return prisma.Request.findFirst;
    }

    get findMany() {
        return prisma.Request.findMany;
    }
}

module.exports = new RequestRepository();