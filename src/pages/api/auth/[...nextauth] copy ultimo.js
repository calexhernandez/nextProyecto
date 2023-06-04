import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID_web2,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_web2,
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    jwt: true,
  },
  callbacks: {
    /* session: async (session, user) => {
      session.jwt = user.jwt;
      session.id = user.id;
      return Promise.resolve(session);
    }, */
    async jwt({ token, user, account }) {
      const isSignIn = user ? true : false;
      //
      if (isSignIn) {
        const var1 = process.env.NEXT_PUBLIC_API_URL;
        const var2 = account.provider;
        const var3 = account.access_token;
        console.log(account);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account.provider}/callback?access_token=${account?.id_token}`);
        //const data = await response.json();
        //console.log(data);
        //token.jwt = data.jwt;
        //token.id = data.user.id;
      }
      return Promise.resolve(token);
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
