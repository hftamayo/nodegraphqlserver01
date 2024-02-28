import { PrismaClient } from "@prisma/client";
import { extractSelection } from "../utils/extractSelections";
import { GraphQLResolveInfo } from "graphql";

interface GetUsersArgs {
  info: GraphQLResolveInfo;
}

interface GetUserArgs extends GetUsersArgs {
  id: string;
}

interface UserInput {
  name?: string;
  email?: string;
  password?: string;
}

const prisma = new PrismaClient();

export const getUsers = async ({ info }: GetUsersArgs) => {
  const extractedSelections = extractSelection(info);
  const todoIncluded = extractedSelections.includes("todos");

  if (todoIncluded) {
    return await prisma.user.findMany({ include: { todos: true } });
  }

  return await prisma.user.findMany();
};

export const getUser = async ({ id, info }: GetUserArgs) => {
  const extractedSelections = extractSelection(info);
  const todoIncluded = extractedSelections.includes("todos");

  if (todoIncluded) {
    return await prisma.user.findUnique({
      where: { id },
      include: { todos: true },
    });
  }

  return await prisma.user.findUnique({ where: { id } });
};

export const createUser = async ({ name = "", email = "", password = "" }: UserInput) => {
  console.log({name, email, password});
  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
      age: 0, // Add the 'age' property with a default value
    },
  });
  return createdUser;
};
