'use client'
import React from 'react';
import style from '@/app/assets/styles/recording.module.css';
import FullCalendar  from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import { EventClickArg } from '@fullcalendar/core';



const handleEventClick = (clickInfo: EventClickArg) => {


  clickInfo.jsEvent.preventDefault();
  const start = clickInfo.event.start;
  const end = clickInfo.event.end;
  if (start && end) {
    alert(
      `Подія: ${
        clickInfo.event.title
      } Час: з ${start.getHours()}:${start.getMinutes()} до ${end.getHours()}:${end.getMinutes()}`
    );
  } else {
    alert(`Подія: ${clickInfo.event.title} Час: невідомий`);
  }
};
const Recording: React.FC = () => {
    const calendar_api = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API;
    const calendar_id = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;
  return (
    <section className={style.container} >
      <div className={style.calendar}>
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          googleCalendarApiKey={calendar_api}
          events={{
            googleCalendarId: calendar_id,
          }}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridDay',
          }}
          height="auto"
          locale="uk"
          firstDay={1}
          eventClick={handleEventClick}
        />
      </div>
    </section>
  );
};

export default Recording;
