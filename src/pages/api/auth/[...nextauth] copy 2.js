import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import TwitterProvider from 'next-auth/providers/twitter';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID_web2,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_web2,
    }),
  ],
  //database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    jwt: true,
  },
  
  callbacks: {
    async session({ session, user, token ,account}) {
      console.log(token.jwt);
      console.log(account);
      session.jwt = token.jwt;
      session.id = token.id;
      return session;
    },
    async jwt({ token, user, account, profile }) {
      console.log(account);
      if (user) {
        if (account.provider !== 'credentials') {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`);
          const data = await response.json();
          token.jwt = data.jwt;
          token.id = data.user.id;
        } else {
          token.jwt = user.jwt;
          token.id = user.user.id;
        }
      }

      return token;
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, authOptions);

export default Auth;
