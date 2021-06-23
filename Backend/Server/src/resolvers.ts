import { IResolvers } from "graphql-tools";
import { IdArgsInt } from "./Interfaces/IdArgsInt";
import { UserArgsInt } from "./Interfaces/UserArgsInt";
const { User } = require("../../DataBase/src/Models/User");
const { Id } = require("../../DataBase/src/Models/Id");

const resolvers: IResolvers = {
  Query: {
    getAllUsers: async (_: void, __: void) => {
      const users = await User.findAll();
      return users;
    },
    getUserId: async (_: void, args: UserArgsInt) => {
      const user = await User.findOne({ where: { email: args.email } });
      return [user.id, user.theme];
    },
  },
  Mutation: {
    registerUser: async (_: void, args: UserArgsInt) => {
      // await User.sync({ force: true });
      try {
        if (await User.findOne({ email: { id: args.email } })) {
          return "Account with the given email already exists";
        }
        const user = await User.build({
          username: args.username,
          email: args.email,
          id: args.id,
          profilePicture: args.profilePicture,
          theme: args.theme,
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
    toggleTheme: async (_: void, args: UserArgsInt) => {
      try {
        const user = await User.findOne({ where: { id: args.id } });
        user.theme = args.theme;
        await user.save();
      } catch (error) {
        console.log(error);
      }
      return true;
    },
    Id: async (_: void, args: IdArgsInt) => {
      try {
        await Id.sync({ force: true });
        const id = await Id.build({ value: args.value });
        await id.save();
      } catch (error) {
        console.log(error);
      }
      return true;
    },
  },
};

export default resolvers;
