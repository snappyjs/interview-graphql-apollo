import { IResolvers } from "apollo-server";

// Following the best practices when it comes to graphql - create the following query / mutations.
// 1. Query a list of all users
// 2. Add a new user to the list of users
// 3. Remove a user from the list of users by id
// 4. Edit a user by id

export const resolvers: IResolvers<any, any> = {
  Query: {
    users: () => {},
  },
};
