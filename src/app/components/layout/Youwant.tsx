import React from 'react'
import style from '@/app/assets/styles/youwant.module.css'


type WantList ={
  key:number;
  title:string;
  text:string;
  titlevideo:string;
video:string
}

const youwantlist: WantList[] = [
  { key:1, title: 'Діджей', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut omnis illo incidunt molestias amet minima voluptas iusto atque dicta ex?', titlevideo: '', video: '' },
 /* The code snippet you provided is defining an array called `youwantlist` which contains objects
 representing items in a list. Each object has properties `key`, `title`, `text`, `titlevideo`, and
 `video`. */
  // { key:2, title: 'Репетирувати', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut omnis illo incidunt molestias amet minima voluptas iusto atque dicta ex?', titlevideo: '', video: '' },
  // { key:3, title: 'Записувати', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut omnis illo incidunt molestias amet minima voluptas iusto atque dicta ex?', titlevideo: '', video: '' },
  // { key:4, title: 'Подкаст', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut omnis illo incidunt molestias amet minima voluptas iusto atque dicta ex?', titlevideo: '', video: '' },
];

const Youwant = () => {
  return (
    <section id="youwant" className={style.container}>
      <h2>я хочу</h2>
      <ul>
        {youwantlist.map((list) => (
          <li key={list.key}>
            <h3>{list.title}</h3>
            <div>
              <p>{list.text}</p>
            </div>
            <h4>{list.titlevideo}</h4>
            <video width="100%" height="50%"  loop  controls preload="auto">
              <source
                src="https://www.datocms-assets.com/17746/1689766507-productmodule_dj.mp4"
                type="video/mp4"
              />
              <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Youwant