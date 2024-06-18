'use client';
import React, { useState } from 'react';
import Contacts from '../forms/Contacts';
import style from '@/app/assets/styles/contact.module.css';
import Phone from '@/app/assets/img/phone';
import Instagram from '@/app/assets/img/instagram';
import Mail from '@/app/assets/img/mail';
import Build from '@/app/assets/img/build';
import Telegram from '@/app/assets/img/telegram';

import { contactblocktext, contactlist as contactList } from '@/app/data/data';


type IconName = 'Instagram' | 'Phone' | 'Mail' | 'Build' | 'Telegram' ;

const IconComponents: Record<IconName, React.FC> = {
  Instagram,
  Phone,
  Mail,
  Build,
  Telegram
};

type Text = {
title:string;
button:string
};

type ContactsList ={
info:string;
key:number;
url:string;
nameicon:IconName;
show:boolean;
}

const contactslist: ContactsList[] = contactList as ContactsList[];

const text: Text = contactblocktext;

const Contact = () => {
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
              height="100%"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={` ${style.maps}`}
            ></iframe>
          </div>
          <div className={`${style.container} ${style.info}`}>
            <h2>{text.title}</h2>
            <ul>
              {contactslist.map((item) =>
                item.show ? (
                  <li key={item.key} className={style.listContact}>
                    <a
                      href={item.url}
                      className={style.svg}
                      rel="noopener noreferrer"
                      aria-label={item.nameicon}
                      title={`перейти в ${item.nameicon}`}
                      target="_blank"
                    >
                      {React.createElement(IconComponents[item.nameicon])}
                    </a>
                    <span>{item.info}</span>
                  </li>
                ) : null
              )}
            </ul>
            <div className={style.grupBtn}>
              <div>
                <button className={style.btn} onClick={() => setIsOrderOpen(true)}>
                  {text.button}
                </button>
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
