import { PrismaClient } from "@prisma/client";
import { extractSelection } from "../utils/extractSelections";
import { GraphQLResolveInfo } from "graphql";

interface GetUsersArgs {
  info: GraphQLResolveInfo;
}

interface GetUserArgs extends GetUsersArgs {
  id: string;
}

const prisma = new PrismaClient();

export const getUsers = async ({ info }: GetUsersArgs) => {
  const extractedSelections = extractSelection(info);
  const postIncluded = extractedSelections.includes("posts");

  if (postIncluded) {
    return await prisma.user.findMany({ include: { posts: true } });
  }

    return await prisma.user.findMany();
};

export const getUser = async ({ id, info }: GetUserArgs) => {
  const extractedSelections = extractSelection(info);
  const postIncluded = extractedSelections.includes("posts");

  if (postIncluded) {
    return await prisma.user.findUnique({ where: { id }, include: { posts: true } });
  }

  return await prisma.user.findUnique({ where: { id } });
};

