import Head from 'next/head';
import React from 'react'
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

export default function ONamaPage() {
  return (
    <div>
    <Head>
      <title>Anai Project</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <AboutUs />
    
    <Footer/>
    </div>
  );
}
