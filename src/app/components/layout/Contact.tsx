'use client';
import React, { useState } from 'react';
import Contacts from '../forms/Contacts';
import style from '@/app/assets/styles/contact.module.css';
import Phone from '@/app/assets/img/phone';

const Contact = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  return (
    <>
      <section id="contact" className={style.section}>
        <div className={`${style.container} `}>
          <iframe
            title="Zubr-2000 googl map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.65071898615327!2d24.026000169959726!3d49.83852247630111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6e2dfcebe5%3A0xeef81c2c400ff5b4!2z0LLRg9C70LjRhtGPINCa0L7Qv9C10YDQvdC40LrQsCwgMjAsINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1sru!2sua!4v1690553981355!5m2!1sru!2sua"
            width="100%"
            height="550"
            style={{ border: '0' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
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
              <button onClick={() => setIsDetailsOpen(true)}>для обговорення деталей</button>
            </div>
            <div>
              <button onClick={() => setIsOrderOpen(true)}>для замовлення</button>
            </div>
          </div>
        </div>
      </section>
      {isOrderOpen && <Contacts onClose={() => setIsOrderOpen(false)} />}
    </>
  );
};

export default Contact;
