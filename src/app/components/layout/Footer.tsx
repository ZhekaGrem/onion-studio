import React from 'react';
import style from '@/app/assets/styles/footer.module.css';
import Instagram from '@/app/assets/img/instagram';
import Telegram from '@/app/assets/img/telegram';
import Youtube from '@/app/assets/img/youtube';
import Soundcloud from '@/app/assets/img/soundcloud';

import { footertext, footericons as footericonsData } from '@/app/data/data';

type IconName = 'Instagram' | 'Telegram' | 'Youtube' | 'Soundcloud';

const IconComponents: Record<IconName, React.FC> = {
   Instagram,
   Telegram,
   Youtube,
   Soundcloud,
};


type FooterText = string;

type IconList ={
info:string;
key:number;
url:string;
nameicon:IconName;
show:boolean;
}



const text: FooterText = footertext;

const listfootericon: IconList[] = footericonsData as IconList[];

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.contentText}>
          <p>{text}</p>
        </div>
        <div>
          <ul className={style.sociaList}>
            {listfootericon.map((icon) =>
              icon.show ? (
                <li key={icon.key}>
                  <a
                    href={icon.url}
                    target="_blank"
                    className={style.svg}
                    rel="noopener noreferrer"
                    aria-label={icon.nameicon}
                    title={icon.nameicon}
                  >
                    {React.createElement(IconComponents[icon.nameicon])}
                  </a>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
