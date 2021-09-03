import Head from 'next/head';
import React from 'react'
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import WelcomeAndSchedule from '../components/WelcomeAndSchedule';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Testemonial from '../components/Testemonial';
import MiddleNav from '../components/MiddleNav';
import Brands from '../components/Brands';
import Cookie from '../components/Cookie';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {

 return (
    <div>
      <Head>
        <title>Anai Project</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap" rel="stylesheet"/> 
      </Head>
      <Header />
      <AboutUs />
      <WelcomeAndSchedule />
      <Banner text="Pravo je vrijeme da se posvetite sebi." buttonText="NARUČI SE"/>
      <Card />
      <Testemonial />
      <MiddleNav />
      <Brands />
      <Banner text="Ugodite si i posvetite dan uljepšavanju i brizi za svoje tijelo." buttonText="NARUČI SE"/>
      <ContactForm/>
      <Footer/>
      <Cookie/>
      <ScrollToTop/>
    </div>

  );
}
