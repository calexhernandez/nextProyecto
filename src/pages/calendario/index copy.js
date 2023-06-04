import Calendar from '@components/calendarApp';
import { useSession } from 'next-auth/react';
import Loginbtn from '@components/login-btn';
import DateTimePicker from 'react-datetime-picker';
import { useState } from 'react';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { data } from 'autoprefixer';

export default function Calendario() {
  const { data: session, status } = useSession();
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  console.log(start);
  console.log(end);
  console.log(eventName);
  console.log(eventDescription);
  //console.log(session.accessToken);
  async function CreateCalendarEvent() {
    console.log('creando evento en calendario');
    const event = {
      summary: eventName,
      description: eventDescription,
      start: {
        dateTime: start.toISOString(),
        timeZone: 'America/Lima',
      },
      end: {
        dateTime: end.toISOString(),
        timeZone: 'America/Lima',
      },
    };
    await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      headers: {
        Authorization: `Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..2MIWXAwDSqynyqUC.OFprKbm8zM-ndXKBoAR0id3cYTprtu9jaF7J_5HxHWlZzODC5_mv08DxPVwVR9IBBkIVX7BQCUxW_u_wpzU4xWmhUbrqKxhk3XZAOkF5yGi2L62asDBQOshYyVqPKvDwVXxAj2ODocWz-S7SjeQJltpjC2c45OB507lnvtP7EHuiX3yvQytERb8pu4FduWWn2zGw3MxMZGZHnALNhlJ7begvQVqkWmv3daBso_Bwy3n-9dCuW-oAb5E_iRNnwCwYeYj6G1YkhlMO3MtRbxtrXIIm0n-pFqKTo16DzWUkQFKC_uspyorFtiIqdH6gkhVX00dZKgLA4sN9kFHoBapgT_SrmGCuGazoqjSl8kOB3A.59JuBKkrXemO80d1Psbwdw`,
      },
      body: JSON.stringify(event),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        alert('evento creadorevisa google calendar');
      });
  }

  return (
    <>
      {session ? (
        <>
          calendario <h1>{session.user.email}</h1>
          <p>Start</p>
          <DateTimePicker onChange={setStart} value={start} />
          <p>End</p>
          <DateTimePicker onChange={setEnd} value={end} />
          <p>Event Name</p>
          <input type="text" onChange={(e) => setEventName(e.target.value)} />
          <p>Event Description</p>
          <input type="text" onChange={(e) => setEventName(e.target.value)} />
          <hr />
          <button onClick={() => CreateCalendarEvent()}>crear evento en calendario</button>
        </>
      ) : (
        <>
          <Loginbtn />
        </>
      )}
    </>
  );
}
