// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectToDatabase } from "./../../../utils/dbConnect";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { db } = await connectToDatabase();
        const user = await db
          .collection("users")
          .findOne({ username: credentials.username });

        if (user && user.password === credentials.password) {
          return {
            id: user._id,
            name: user.username,
            email: user.email,
            role: user.role,
          };
        } else {
          return null;
        }
      },
    }),
    // Add other providers here
  ],
  callbacks: {
    async session(session, user) {
      session.user.id = user.id;
      session.user.role = user.role;
      return session;
    },
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});
