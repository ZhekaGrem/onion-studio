'use client';
import React, { useState } from 'react';
import style from '@/app/assets/styles/youwant.module.css';
import { youwantblock } from '@/app/data/data';
import { motion, AnimatePresence } from 'framer-motion';

type WantList = {
  key: number;
  title: string;
  text: string;
  titlevideo: string;
  video: string;
};

const youwantlist: WantList[] = youwantblock;
const Youwant = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section id="youwant" className={style.container}>
      <div className={style.contentText}>
        <h2>я хочу</h2>
        <div className={style.contentSwitcher}>
          {youwantlist.map((list, index) => (
            <button
              key={list.key}
              onClick={() => handleButtonClick(index)}
              className={`${style.contentSwitcherBtn} ${selectedIndex === index ? style.open : style.closed}`}
            >
              {list.title}
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
                  <h3>{list.title}</h3>
                  <div>
                    <p>{list.text}</p>
                  </div>
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
