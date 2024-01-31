import { readFileSync } from "fs";
import { usersResolver } from "./resolvers/user.resolver";

const userTypes = readFileSync("src/graphql/user/user.graphql", "utf-8");
const postTypes = readFileSync("src/graphql/post/post.graphql", "utf-8");

export const typeDefs = `
${userTypes}
${postTypes}
`;

export const resolvers = {
  Query: {
    ...usersResolver.Query,
  },
  Mutation: {
    ...usersResolver.Mutation,
  },
};
