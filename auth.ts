import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { saltAndHashPassword } from "./utils/helper";
import { db } from "./db";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: {
           label: "Password", 
           type: "password" 
          },
      },
      authorize: async (credentials) => {
        // checks if any of theses fields are null/ invalid, we will return null
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const email = credentials.email as string;

        // we encrypt the password using the hash var as a safety measure as storing this directly in the db is not secure
        const hash = saltAndHashPassword(credentials.password);

        let user: any = await db.user.findUnique({
          // checks if user exists in db...
          where: {
            email,
          },
        });
        // ... if !user (doesn't exist in db) then create user...
        if (!user) {
          user = await db.user.create({
            data: {
              email,
              hashedPassword: hash,
            },
          });
        // if password matches the one enterd in the form, encrypt and grant access...
        } else {
          const isMatch = bcrypt.compareSync(
            credentials.password as string,
            user.hashedPassword
          );
          // ... else if password is incorrect, return message:
          if (!isMatch) {
            throw new Error("Incorrect password.");
          }
        }

        return user;
      },
    }),
  ],
});