import React from 'react'
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
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
      <Layout>
      <AboutUs />
      <WelcomeAndSchedule />
      <Banner text="Pravo je vrijeme da se posvetite sebi." buttonText="NARUČI SE"/>
      <Card />
      <Testemonial />
      <MiddleNav />
      <Brands />
      <Banner text="Ugodite si i posvetite dan uljepšavanju i brizi za svoje tijelo." buttonText="NARUČI SE"/>
      <ContactForm/>
      <Cookie/>
      <ScrollToTop/>
      </Layout>
    </div>

  );
}
