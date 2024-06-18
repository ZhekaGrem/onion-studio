'use client'
import { GoogleAnalytics } from 'nextjs-google-analytics';


import Main from './components/layout/Main';
import Youwant from './components/layout/Youwant';
import Aboutus from './components/layout/Aboutus';
import Contact from './components/layout/Contact';
import Calendar from './components/layout/Calendar';

 function Home() {
  return (
    <>
      <Main />
      <Youwant />
      <Aboutus />
      <Calendar />
      <Contact />
      <GoogleAnalytics trackPageViews />
    </>
  );
}

export default Home;