import { PrismaClient } from "../generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if ((globalThis as any).process?.env?.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
