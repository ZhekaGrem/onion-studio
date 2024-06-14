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
  return (
    <section className={style.container} id="recording">
      <div className={style.calendar}>
        
          <FullCalendar
            plugins={[dayGridPlugin, googleCalendarPlugin]}
            googleCalendarApiKey="AIzaSyBJA1zbivKJUmvc442zIMADpHMugKbDvX0"
            events={{
              googleCalendarId: 'tsubylia.records.official@gmail.com',
            }}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,dayGridWeek,dayGridDay',
              
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
