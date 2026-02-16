import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const connectDB = async () => {
  try {
    await prisma.$connect();

    console.log("DB Connected Success Fully!");
  } catch (err) {
    console.err("Something went wrong", err);
  }
};

const disconnectDB = async () => {
  await prisma.$disconnect();
};


export {prisma, connectDB, disconnectDB}