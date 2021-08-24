import Head from 'next/head';
import React from 'react'
import Header from '../components/Header';
import Testemonial from '../components/Testemonial';
import Footer from '../components/Footer';

export default function IskustvaKorisnikaPage() {
  return (
    <div>
    <Head>
      <title>Anai Project</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Testemonial />
    
    <Footer/>
    </div>
  );
}
