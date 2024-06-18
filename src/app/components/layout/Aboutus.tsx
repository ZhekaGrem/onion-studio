'use client'
import React,{useState,useRef} from 'react'
import Image from 'next/image';
import Contacts from '../forms/Contacts'

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { leftSlide } from '@/app/animation/animation';

import style from '@/app/assets/styles/aboutus.module.css'
import { disclosurecontent, aboutusblock } from '@/app/data/data';


type IndexType= number | null;

type HandleClickButton=(index:number)=>void;

type AboutusList={
  key?: number;
  minititle?:string
  title:string;
  description:string;

}

type AboutusBlock = AboutusList &{
  btn:{
    title:string;
  };
  img:{
    description:string;
    url:string
  }
}


const aboutuscontent: AboutusBlock = aboutusblock;

const aboutuslist: AboutusList[] = disclosurecontent;

const Aboutus:React.FC = () => {
  const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const [openIndex, setOpenIndex] = useState < IndexType>(null);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const handleButtonClick: HandleClickButton = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section id="aboutus" className={style.aboutSection}>
        <div className={style.blurBg}>
          <div ref={ref} className={style.container}>
            {isInView ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={leftSlide}
                transition={{ duration: 1 }}
                className={style.containerInfo}
              >
                <h4>{aboutuscontent.minititle}</h4>
                <h2>{aboutuscontent.title}</h2>
                <p>{aboutuscontent.description}</p>
              </motion.div>
            ) : null}
            <div className={style.containerBenefits}>
              <div className={style.disclosureBlock}>
                <ul>
                  {aboutuslist.map((item, index) => 
                  isInView ?(
                    <motion.li
                      initial="hidden"
                      animate="visible"
                      variants={leftSlide}
                      transition={{ duration: 3 }}
                      className={style.disclosure}
                      key={item.key}
                    >
                      <div>
                        <button className={style.disclosureBtn} onClick={() => handleButtonClick(index)}>
                          {item.title}
                        </button>
                      </div>
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <p className={style.disclosureText}>{item.description}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  ):null
                  )}
                </ul>
              </div>
              <div>
                <Image
                  className={style.containerBenefitsImg}
                  src={aboutusblock.img.url}
                  width={400}
                  height={400}
                  alt={aboutusblock.img.description}
                />
              </div>
            </div>
            <button className={style.btn} id="signup" onClick={() => setIsOrderOpen(true)}>
              {aboutusblock.btn.title}
            </button>
          </div>
        </div>
      </section>
      {isOrderOpen && <Contacts onClose={() => setIsOrderOpen(false)} openWindow={'OrderForm'} />}
    </>
  );
}

export default Aboutus