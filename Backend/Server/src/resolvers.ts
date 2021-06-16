import { IResolvers } from "graphql-tools";
import { UserArgsInt } from "./Interfaces/UserArgsInt";
const { User } = require("../../DataBase/src/Models/User");

const resolvers: IResolvers = {
  Query: {
    getAllUsers: async (_: void, __: void) => {
      const users = await User.findAll();
      return users;
    },
  },
  Mutation: {
    registerUser: async (_: void, args: UserArgsInt) => {
      try {
        if (await User.findOne({ email: { id: args.email } })) {
          return "Account with the given email already exists";
        }
        const user = await User.build({
          username: args.username,
          email: args.email,
          id: args.id,
          profilePicture: args.profilePicture,
        });
        await user.save();
      } catch (error) {
        console.log(error);
      }
      return true;
    },
    loginUser: async (_: void, args: UserArgsInt) => {
      try {
        const user = await User.findOne({ where: { email: args.email } });
        if (!user) {
          return "Invalid email";
        }
      } catch (error) {
        console.log(error);
      }
      return true;
    },
  },
};

export default resolvers;
