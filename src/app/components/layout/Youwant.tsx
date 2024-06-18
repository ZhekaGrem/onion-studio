'use client';
import React, { useState } from 'react';
import style from '@/app/assets/styles/youwant.module.css';
import { youwantblock,youwanttitle } from '@/app/data/data';
import { motion, AnimatePresence } from 'framer-motion';

type YouwnatTitle=string;

type WantList = {
  key: number;
  title: string;
  text: string;
  titlevideo: string;
  video: string;
};

const youwantlist: WantList[] = youwantblock;
const title: YouwnatTitle = youwanttitle;

const Youwant = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section id="youwant" className={style.container}>
      <div className={style.contentText}>
        <h4>{title}</h4>
        <div className={style.contentSwitcher}>
          {youwantlist.map((list, index) => (
            <button
              key={list.key}
              onClick={() => handleButtonClick(index)}
              className={`${style.contentSwitcherBtn} ${selectedIndex === index ? style.open : style.closed}`}
            >
              <span className={style.switcherBox}>{list.title}</span>
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {youwantlist.map(
          (list, index) =>
            selectedIndex === index && (
              <motion.div
                key={list.key}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className={style.contentText}>
                  
                    <p>{list.text}</p>
                </div>
                <h4>{list.titlevideo}</h4>
                <video width="100%" height="50%" loop controls preload="auto">
                  <source src={list.video} type="video/mp4" />
                  <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </section>
  );
};

export default Youwant;
