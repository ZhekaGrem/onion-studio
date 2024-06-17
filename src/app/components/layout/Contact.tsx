'use client';
import React, { useState } from 'react';
import Contacts from '../forms/Contacts';
import style from '@/app/assets/styles/contact.module.css';
import Phone from '@/app/assets/img/phone';

const Contact = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const mapssrc = process.env.NEXT_PUBLIC_MAPS_SRC;
  return (
    <>
      <section id="contact" className={style.sectionBg}>
        <div className={style.section}>
          <div className={`${style.container} ${style.maps}`}>
            <iframe
              title="Студія цибулі на карті"
              src={mapssrc}
              width="100%"
              height="550"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={` ${style.maps}`}
            ></iframe>
          </div>
          <div className={`${style.container} ${style.info}`}>
            <h2>Звязвтись з нами</h2>
            <ul>
              <li>adress: Львів,вул Володимира Великого, 58 </li>
              <li>
                <p>
                  tel:
                  <a href="tel:+38093812881">
                    <Phone />
                  </a>
                  +38093812881
                </p>
              </li>
              <li>
                meil: tsubylia.records.official@gmail.com{' '}
                <a href="mailto:tsubylia.records.official@gmail.com"> написати</a>
              </li>
              <li>
                inst: tsubylia_records_official{' '}
                <a href="https://www.instagram.com/tsubylia_records_official/"> перейти</a>
              </li>
            </ul>
            <div className={style.grupBtn}>
              <div>
                <button onClick={() => setIsOrderOpen(true)}>для обговорення деталей</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isOrderOpen && <Contacts onClose={() => setIsOrderOpen(false)} openWindow={'DetailsForm'} />}
    </>
  );
};

export default Contact;
