import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  { url: '/Analogue-Recording-Studio.jpg', title: 'title1', id: 1 },
  { url: '/Microphone-in-Recording-Studio.jpg', title: 'title2', id: 2 },
  { url: '/Pro-Tools-Control-Console-in-Recording-Studio.jpg', title: 'title3', id: 3 },
  { url: '/Rapper-on-the-Mic.jpg', title: 'title4', id: 4 },
];

const Carousel = () => {
  return (
   
      <div>
        <div>
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
      </div>

  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div>
      <Image width={500} height={500} src={card.url} alt={card.title} />
      <h3>{card.title}</h3>
    </div>
  );
};

export default Carousel;
