'use strict'

const prisma = require('./prismaClient');

class RequestTypeRepository {
    get create() {
        return prisma.RequestType.create;
    }

    get update() {
        return prisma.RequestType.update;
    }

    get delete() {
        return prisma.RequestType.delete;
    }

    get findUnique() {
        return prisma.RequestType.findUnique;
    }

    get findFirst() {
        return prisma.RequestType.findFirst;
    }

    get findMany() {
        return prisma.RequestType.findMany;
    }
}

module.exports = new RequestTypeRepository();