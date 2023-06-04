import querystring from 'node:querystring';
const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
export default function handler(req, res) {
  const scopes = ['https://www.googleapis.com/auth/calendar'];
  const query = querystring.stringify({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    scope: scopes.join(' '),
    response_type: 'code',
  });

  res.writeHead(302, { location: `${GOOGLE_AUTH_URL}?${query}` });
  res.end();
}
