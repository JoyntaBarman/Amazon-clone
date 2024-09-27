import { error } from "console";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn, signOut } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";


 const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  
  callbacks: {
    async redirect(){
      return '/';
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
