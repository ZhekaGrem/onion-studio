'use client'
import React,{useState} from 'react'
import style from '@/app/assets/styles/aboutus.module.css'
import Image from 'next/image';
import Contacts from '../forms/Contacts'
import { motion, AnimatePresence } from 'framer-motion';

type IndexType= number | null;

type HandleClickButton=(index:number)=>void;

type AboutusList={
  key?: number;
  minititle?:string
  title:string;
  info:string;

}


const aboutuslist: AboutusList[] = [
  {
    key: 1,
    title: 'Доступні ціни',
    info:
      ' Over 700 purpose-built, 24-hour studios across the UK, US and DE. Join a community of 350k artists and access exclusive opportunities to perform live and get your songs played on the radio.',
  },
  {
    key: 2,
    title: 'Допомога в створенні контенту',
    info:
      ' Over 700 purpose-built, 24-hour studios across the UK, US and DE. Join a community of 350k artists and access exclusive opportunities to perform live and get your songs played on the radio.',
  },
  {
    key: 3,
    title: 'Гнучкі можливості скасування',
    info:
      ' Over 700 purpose-built, 24-hour studios across the UK, US and DE. Join a community of 350k artists and access exclusive opportunities to perform live and get your songs played on the radio.',
  },
  {
    key: 3,
    title: 'Допомога початківцям',
    info:
      ' Over 700 purpose-built, 24-hour studios across the UK, US and DE. Join a community of 350k artists and access exclusive opportunities to perform live and get your songs played on the radio.',
  },
];

const Aboutus:React.FC = () => {
   const [openIndex, setOpenIndex] = useState < IndexType>(null);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const handleButtonClick: HandleClickButton = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section id="aboutus" className={style.aboutSection}>
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
                  {aboutuslist.map((item, index) => (
                    <li key={item.key}>
                      <button onClick={() => handleButtonClick(index)}>{item.title}</button>
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <p>{item.info}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
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
            <button onClick={() => setIsOrderOpen(true)}> book a studio</button>
          </div>
        </div>
      </section>
      {isOrderOpen && <Contacts onClose={() => setIsOrderOpen(false)} openWindow={'OrderForm'} />}
    </>
  );
}

export default Aboutus