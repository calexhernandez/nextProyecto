const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
import querystring from 'node:querystring';

export default async function handler(req, res) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${process.env.GOOGLE_CLIENT_ID}:${process.env.GOOGLE_CLIENT_SECRET}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      code: req.query.code,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code',
    }),
  };

  try {
    const response = await fetch(GOOGLE_TOKEN_URL, options);
    const data = await response.json();
    console.log(data);
    res.setHeader('Set-Cookie', `accessToken=${data.access_token}; path=/; HttpOnly`);
    res.writeHead(302, { location: '/candelario' });
    res.end();
  } catch (error) {
    console.error(error);
  }
}
