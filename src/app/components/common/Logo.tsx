import Image from 'next/image';
import { logourl } from '@/app/data/data';
import style from './logo.module.css'

type LogoInfo = {
  url:string;
  description:string;
}

const logoinfo: LogoInfo = logourl;

const Logo = () => {
  return (
    <>
      <Image
        className={style.logo}
        src={logoinfo.url}
        alt={logoinfo.description}
       width={50}
       height={50}
      />
    </>
  );
};

export default Logo;
