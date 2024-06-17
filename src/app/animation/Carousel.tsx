'use client'
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { carouselblock } from '@/app/data/data';
import style from '@/app/assets/styles/carousel.module.css'

type CardType = {
  url: string;
  title: string;
  info: string;
  id: number;
};

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const cards: CardType[] = carouselblock;

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

   const dragX = useMotionValue(0);

   useEffect(() => {
     const intervalRef = setInterval(() => {
       const x = dragX.get();

       if (x === 0) {
         setImgIndex((pv) => {
           if (pv === cards.length - 1) {
             return 0;
           }
           return pv + 1;
         });
       }
     }, AUTO_DELAY);

     return () => clearInterval(intervalRef);
   }, []);

const onDragEnd = () => {
  const x = dragX.get();

  if (x <= -DRAG_BUFFER && imgIndex < cards.length - 1) {
    setImgIndex((pv) => pv + 1);
  } else if (x >= DRAG_BUFFER && imgIndex > 0) {
    setImgIndex((pv) => pv - 1);
  }
};

  return (
    <div className={style.carouselContent}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className={style.carouselAnimation}
      >
        <Card imgIndex={imgIndex} />
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

interface CardProps {
  imgIndex: number;
}

const Card: React.FC<CardProps> = ({ imgIndex }) => {
  return (<>{cards.map((img,idx)=>{
    return (
      <motion.div
        key={idx}
        style={{
          backgroundImage: `url(${img.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        animate={{
          scale: imgIndex === idx ? 0.95 : 0.85,
        }}
        transition={SPRING_OPTIONS}
        className={style.carouselImg}
      >
       <div className={style.carouselTitle}>

        <h2 >{img.title}</h2>
        <p>{img.info}</p>
       </div>
      </motion.div>
    );
  })}</>);
};

interface DotsProps extends CardProps {
 setImgIndex: (index: number) => void;
}

const Dots: React.FC<DotsProps> = ({ imgIndex, setImgIndex }) => {
  return (
    <div className={style.dots}>
      {cards.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`${style.dotsBtn} ${idx === imgIndex ? style.active : style.disable}`}
          />
        );
      })}
    </div>
  );
};



export default Carousel;
