'use client'
import React from 'react';
import style from '@/app/assets/styles/recording.module.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';



const Recording = () => {
  const handleEventClick = (clickInfo) => {
    clickInfo.jsEvent.preventDefault(); 
    alert(
      `Подія: ${
        clickInfo.event.title
      } Час: з ${clickInfo.event.start.getHours()}:${clickInfo.event.start.getMinutes()} до ${clickInfo.event.end.getHours()}:${clickInfo.event.start.getMinutes()}`
    );
  };
  return (
    <section className={style.container} id="recording">
      <div className={style.calendar}>
        <div className="calendarContainer">
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
        {/* <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FKiev&bgcolor=%23ffffff&hl=uk&title=oniostudio&src=YzhlZmQ0NjE2NjAxNzIwZTQ2MzQ4NTNhNjE1MmVmOWI0OGVlMTg1YmM4MjkyZDhlYWRhZjg2NTUwNTY3MDViY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300"
          style={{ border: 'solid 1px #777' }}
          width="100%"
          height="600"
          scrolling="no"
        ></iframe> */}
      </div>
    </section>
  );
};

export default Recording;
// tsubylia.records.official@gmail.com
