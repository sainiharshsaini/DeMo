const { PrismaClient } = require("./generated/prisma");

const globalForPrisma = globalThis;

const prismaInstance = globalForPrisma.__prisma || new PrismaClient();

if (globalForPrisma.process?.env?.NODE_ENV !== "production")
  globalForPrisma.__prisma = prismaInstance;

module.exports = { prisma: prismaInstance };