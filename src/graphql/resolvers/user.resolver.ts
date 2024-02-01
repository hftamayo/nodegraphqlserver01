import { GraphQLResolveInfo } from "graphql";
import { getUser, getUsers } from "../services/user.service";

export const usersResolver = {
  Query: {
    async users(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await getUsers({ info });
    },
    async user(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      return await getUser({ id: args.id, info });
    },
  },
  Mutation: {
    async createUser() {},
    async updateUser() {},
    async deleteUser() {},
  },
};
