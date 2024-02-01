import { readFileSync } from "fs";
import { usersResolver } from "./resolvers/user.resolver";

const userTypes = readFileSync("src/graphql/user/user.graphql", "utf-8");
const todoTypes = readFileSync("src/graphql/todo/todo.graphql", "utf-8");

export const typeDefs = `
${userTypes}
${todoTypes}
`;

export const resolvers = {
  Query: {
    ...usersResolver.Query,
  },
  Mutation: {
    ...usersResolver.Mutation,
  },
};
