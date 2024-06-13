import React from 'react'
import style from '@/app/assets/styles/aboutus.module.css'
import Image from 'next/image';


const Aboutus = () => {
  return (
    <section className={style.aboutSection}>
      <div className={style.blurBg}>
        <div className={style.container}>
          <div className={style.containerInfo}>
            <h4>чому варто обрати нас</h4>
            <h2>Студії від художників, для художників</h2>
            <p>
              Over 700 purpose-built, 24-hour studios across the UK, US and DE. Join a community of 350k
              artists and access exclusive opportunities to perform live and get your songs played on the
              radio.
            </p>
          </div>
          <div className={style.containerBenefits}>
            <div>
              <ul>
                <li>
                  <button>Доступні ціни</button>
                </li>
                <li>
                  <button>Допомога в створенні контенту</button>
                </li>
                <li>
                  <button>Гнучкі можливості скасування</button>
                </li>
                <li>
                  <button>Допомога початківцям</button>
                </li>
              </ul>
            </div>
            <div>
              <Image
                className={style.containerBenefitsImg}
                src="/011720NYRE-4201.jpg"
                width={400}
                height={400}
                alt="kek"
              />
            </div>
          </div>
          <button> book a studio</button>
        </div>
      </div>
    </section>
  );
}

export default Aboutus