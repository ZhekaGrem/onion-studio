import styles from './page.module.css';

import Main from './components/layout/Main';
import Youwant from './components/layout/Youwant';
import Aboutus from './components/layout/Aboutus';
import Contact from './components/layout/Contact';
import Recording from './components/layout/Recording';

 function Home() {
  return (
    <>
      <Main />
      <Youwant />
      <Aboutus />
      <Recording />
      <Contact />
    </>
  );
}

export default Home;