import dbConnect from "@lib/dbConnect";
import { verifyPassword } from "@services/api/passwordHandling";
import userSchema from "@utils/schema/userSchema";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  callbacks: {
    async signIn({ user, account }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        dbConnect();
        try {
          let data = await userSchema.create({
            name: user.name,
            email: user.email,
            oAuth: true,
            oAuthType: account.provider,
          });
          console.log(data);
        } catch (error) {
          if (error.code === 11000) {
            console.log("User logged in successfully");
          }
        }
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
  // Configure authentication providers here
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        dbConnect();
        try {
          const result = await verifyPassword(email, password);
          console.log(result);
          return result;
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
