import Head from 'next/head';
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";


const noto_serif = Noto_Serif({ subsets: ["latin"] });


type Metadata= {
  title: string;
  description: string;
  keywords: string;
  author:string;
}

export const metadata: Metadata = {
         title:
           'Experience Top-Notch Music Production at Tsubylia.Records.Official | Premier Music Studio in Lviv | Музична студія у Львові',
         description:
           'Відкрийте для себе tsubylia.records.official, провідну музичну студію у Львові. Пропонує найсучасніше обладнання для звукозапису, професійне продакшн та творче середовище для артистів усіх жанрів.',
         keywords:
           'tsubylia.records.official, music studio Lviv, recording studio Lviv, music production, audio recording, music studio Ukraine, Lviv music, professional recording,  музична студія Львів, студія звукозапису Львів, музичний продакшн, аудіозапис, музична студія Україна, музика Львів, професійний запис',
         author: 'Bougdan Levkovych | Богдан Левкович',
       };

const SEO = ({ metadata }: { metadata: Metadata }) => {
  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="author" content={metadata.author} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SEO metadata={metadata} />
      <body className={noto_serif.className}>

          <NavBar/>
        <main>
        {children}
        </main>
      
        
          <Footer/>
          <div id="portal-root"/>
        </body>
    </html>
  );
}
