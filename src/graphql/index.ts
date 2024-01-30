export const typeDefs = `
type User {
    id: ID!
    username: String
    email: String
}

type Query {
    user(id: ID!): User
    users: [User]
}
type Mutation {
    createUser(username: String!, email: String!): User!
    updateUser(id: ID!, username: String, email: String): User!
    deleteUser(id: ID!): User!
}
`;

export const resolvers = {
  Query: {
    users() {
      return [{ id: 1, username: "test", email: "veloz@ok.com" }];
    },
    user() {},
  },
  Mutation: {},
};
