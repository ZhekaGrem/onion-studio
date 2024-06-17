
import React from 'react';
import style from '@/app/assets/styles/footer.module.css';
import Instagram from '@/app/assets/img/instagram';
import Soundcloud from '@/app/assets/img/soundcloud';
import Telegram from '@/app/assets/img//telegram';
import Youtube from '@/app/assets/img/youtube';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div>всі права захищені 2024</div>
        <div>
          <ul className={style.sociaList}>
            <li>
              <a
                href="https://www.instagram.com/tsubylia_records_official/"
                target="_blank"
                className={style.svg}
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://soundcloud.com/user-128119866-528294401" target="_blank" className={style.svg}>
                <Soundcloud />
              </a>
            </li>
            {/* <li>
              <Telegram />
            </li> */}
            <li>
              <a href="https://www.youtube.com/@gruppar4zyob/" target="_blank" className={style.svg}>
                <Youtube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
