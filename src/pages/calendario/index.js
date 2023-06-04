import cookie from 'cookie';
import DateTimePicker from 'react-datetime-picker';
import { useState } from 'react';


/* export async function getServerSideProps({ req }) {
  const data = cookie.parse(req.headers.cookie || "");
  //console.log(data);
  return { props: { accessToken: data?.accessToken } };
} */




export default function Calendario() {
  return (
    <>
      <a href="/api/login">connect</a>
    </>
  );
}
