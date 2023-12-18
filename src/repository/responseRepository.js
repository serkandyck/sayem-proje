'use strict';

const prisma = require('./prismaClient');


class ResponseRepository {
    get create() {
        return prisma.Response.create;
    }

    get update() {
        return prisma.Response.update;
    }

    get delete() {
        return prisma.Response.delete;
    }

    get findUnique() {
        return prisma.Response.findUnique;
    }

    get findFirst() {
        return prisma.Response.findFirst;
    }

    get findMany() {
        return prisma.Response.findMany;
    }

}

module.exports = new ResponseRepository();