import Image from 'next/image';
import { logourl } from '@/app/data/data';

type LogoInfo = {
  url:string;
  description:string;
}

const logoinfo: LogoInfo = logourl;

const Logo = () => {
  return (
    <>
      <Image src={logoinfo.url} alt={logoinfo.description} width={75} height={75} />
    </>
  );
};

export default Logo;
