import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID_web2,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_web2,
    }),
  ],
  /*pages: {
    signIn: '/auth/dashbaord', // on successfully signin    
    signOut: '/auth/login', // on signout redirects users to a custom login page.
    error: '/auth/error',  // displays authentication errors
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }*/

  secret: process.env.NEXT_PUBLIC_SECRET,
  //database: process.env.NEXT_PUBLIC_DATABASE_URL,
  //debug: true,
  session: {
    jwt: true,
  },
  callbacks: {
    //the 'user' remains never read?!
    async session({ session, token, user }) {
      console.log(session);
      session.jwt = token.jwt;
      session.id = token.id;
      //console.log(session);
      return session;
    },
    async jwt({ token, user, account }) {
      //console.log(token, user, account);
      if (user) {
        //prettier-ignore
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google/callback?access_token=${account?.access_token}`
          );
        const data = await response.json();
        //console.log(data);
        token.jwt = data.jwt;
        // WARNING: if the followung line says 'token.id=data.user.id', it breaks!!!
        token.id = data.user['id'];
        //console.log(token);
      }
      //console.log(token.id);
      return token;
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
