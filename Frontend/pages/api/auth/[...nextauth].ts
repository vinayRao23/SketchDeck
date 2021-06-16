import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { GetGithubEmail } from "../../../auth/GetGithubEmail";
import client from "../../../apollo-client";
import { REGISTER } from "../../../Apollo/RegisterMutation";
import { generateId } from "../../../utils/GenerateId";
import { LOGIN } from "../../../Apollo/LoginMutation";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: "6a6126b169cbea513977",
      clientSecret: "f50712ae3763d3595eb1823f916db3f0f068ea18",
    }),
    Providers.Google({
      clientId:
        "654140761321-5hqh16vo9usbt49pfnft2b49n3j6sla8.apps.googleusercontent.com",
      clientSecret: "nyPtbw9evVVHgfGWRjAFw2Jd",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    verifyRequest: "/auth/verify-request",
    newUser: null,
  },
  debug: true,
  callbacks: {
    signIn: async (profile, account): Promise<any> => {
      await GetGithubEmail(profile, account);
      try {
        await client.mutate({
          mutation: REGISTER,
          variables: {
            username: profile.name,
            email: profile.email,
            profilePicture: profile.image,
            id: generateId(24),
          },
        });
        return true;
      } catch (error) {
        console.log(error);
        if (!error.message.includes("Account")) {
          await client.mutate({
            mutation: LOGIN,
            variables: {
              email: profile.email,
            },
          });
          return true;
        }
      }
    },
  },
});
