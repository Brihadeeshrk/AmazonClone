import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  //configure one or more auth providers
  providers: [
    // Providers.GitHub({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ..add more providers here
  ],

  // A db is optional, but req to persist acc in a db
  //   database: process.env.DATABASE_URL,
});
