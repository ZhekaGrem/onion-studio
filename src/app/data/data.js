// ВСІ КАРТИНКИ ЗНАХОДЯТЬСЯ В ПАПЦІ public ЩОБ ВНЕСТИ ЇХ  В url '/НАЗВА_КАРТИНКИ_З_ФОРМАТОМ' 


// Навігаційний блок сайту нав бар

export const logourl = {
  url: '/onionLogoNoBg-2.png',
  description: 'логотип музичної студії tsubylia цибуля',
};

export const navbar = [
  {
    url: '#',
    title: 'ДІМ',
    id: 1,
  },
  {
    url: '#youwant',
    title: 'ДЛЯ ВАС',
    id: 2,
  },
  {
    url: '#aboutus',
    title: 'ПРО НАС',
    id: 3,
  },
  {
    url: '#recording',
    title: 'ЗАПИСАТИСЬ',
    id: 4,
  },
  {
    url: '#contact',
    title: "ЗВ'ЯЗАТИСЬ",
    id: 5,
  },
];

// Перший блок сайту
export const carouselblock = [
  {
    url: '/Analogue-Recording-Studio.jpg',
    title: 'title1',
    info: 'ПАКЕТИ, ЩО ВІДПОВІДАЮТЬ ВАШОМУ БЮДЖЕТУ І ВИМОГАМ',
    id: 1,
  },
  {
    url: '/Microphone-in-Recording-Studio.jpg',
    title: 'title2',
    info: 'ПАКЕТИ, ЩО ВІДПОВІДАЮТЬ ВАШОМУ БЮДЖЕТУ І ВИМОГАМ',
    id: 2,
  },
  {
    url: '/Pro-Tools-Control-Console-in-Recording-Studio.jpg',
    title: 'title3',
    info: 'ПАКЕТИ, ЩО ВІДПОВІДАЮТЬ ВАШОМУ БЮДЖЕТУ І ВИМОГАМ',
    id: 3,
  },
  {
    url: '/Rapper-on-the-Mic.jpg',
    title: 'title4',
    info: 'ПАКЕТИ, ЩО ВІДПОВІДАЮТЬ ВАШОМУ БЮДЖЕТУ І ВИМОГАМ',
    id: 4,
  },
];

// Другий блок сайту
export const youwanttitle='я хочу';

export const youwantblock = [
  {
    key: 1,
    title: 'Діджей',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut omnis illo incidunt molestias amet minima voluptas iusto atque dicta ex?',
    titlevideo: '',
    video: 'https://www.datocms-assets.com/17746/1689766507-productmodule_dj.mp4',
  },

  {
    key: 2,
    title: 'Репетирувати',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut omnis illo incidunt molestias amet minima voluptas iusto atque dicta ex?',
    titlevideo: '',
    video: '',
  },
  {
    key: 3,
    title: 'Записувати',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut omnis illo incidunt molestias amet minima voluptas iusto atque dicta ex?',
    titlevideo: '',
    video: 'https://www.datocms-assets.com/17746/1689766507-productmodule_dj.mp4',
  },
  {
    key: 4,
    title: 'Подкаст',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut omnis illo incidunt molestias amet minima voluptas iusto atque dicta ex?',
    titlevideo: '',
    video: 'https://www.datocms-assets.com/17746/1689766507-productmodule_dj.mp4',
  },
];

// Третій блок сайту

export const aboutusblock = {
  minititle: 'чому варто обрати нас1',
  title: 'Студії від художників, для художників',
  description:
    'Over 700 purpose-built, 24-hour studios across the UK, US and DE. Join a community of 350k artists and access exclusive opportunities to perform live and get your songs played on the radio.',
  btn: {
    title: 'book a studio',
  },
  img: {
    description: 'tsubylia records музична студія львів',
    url: '/011720NYRE-4201.jpg',
  },
};

export const disclosurecontent = [
  {
    key: 1,
    title: 'Доступні ціни',
    description:
      ' Over 700 purpose-built, 24-hour studios across the UK, US and DE. Join a community of 350k artists and access exclusive opportunities to perform live and get your songs played on the radio.',
  },
  {
    key: 2,
    title: 'Допомога в створенні контенту',
    description:
      ' Over 700 purpose-built, 24-hour studios across the UK, US and DE. Join a community of 350k artists and access exclusive opportunities to perform live and get your songs played on the radio.',
  },
  {
    key: 3,
    title: 'Гнучкі можливості скасування',
    description:
      ' Over 700 purpose-built, 24-hour studios across the UK, US and DE. Join a community of 350k artists and access exclusive opportunities to perform live and get your songs played on the radio.',
  },
  {
    key: 4,
    title: 'Допомога початківцям',
    description:
      ' Over 700 purpose-built, 24-hour studios across the UK, US and DE. Join a community of 350k artists and access exclusive opportunities to perform live and get your songs played on the radio.',
  },
];

// Пятий блок сайту

export const contactblocktext = {
  title:'звязвтись з нами',
  button:'обговорення деталей'
};
export const contactlist = [
         {
           info: 'Львів,вул Володимира Великого, 58',
           key: 1,
           url: 'https://www.instagram.com/tsubylia_records_official/',
           nameicon: 'Build',
           show: true,
         },
         {
           info: '+38093812881',
           key: 2,
           url: 'tel:+38093812881',
           nameicon: 'Phone',
           show: true,
         },
         {
           info: 'tsubylia.records.official@gmail.com',
           key: 3,
           url: 'mailto:tsubylia.records.official@gmail.com',
           nameicon: 'Mail',
           show: true,
         },
         {
           info: 'tsubylia_records_official',
           key: 4,
           url: 'https://www.instagram.com/tsubylia_records_official/',
           nameicon: 'Instagram',
           show: true,
         },
         {
           info: 'Telegram',
           key: 5,
           url: 'https://t.me/badindron',
           nameicon: 'Telegram',
           show: true,
         },
       ];

//Підвал footer сайту

export const footertext = 'всі права захищені 2024';

export const footericons = [
         {
           info: 'instagram',
           key: 1,
           url: 'https://www.instagram.com/tsubylia_records_official/',
           nameicon: 'Instagram',
           show: true,
         },
         {
           info: 'telegram',
           key: 2,
           url: 'https://www.instagram.com/tsubylia_records_official/',
           nameicon: 'Telegram',
           show: true,
         },
         {
           info: 'youtube',
           key: 3,
           url: 'https://www.instagram.com/tsubylia_records_official/',
           nameicon: 'Youtube',
           show: true,
         },
         {
           info: 'soundcloud',
           key: 4,
           url: 'https://www.instagram.com/tsubylia_records_official/',
           nameicon: 'Soundcloud',
           show: true,
         },
       ];
