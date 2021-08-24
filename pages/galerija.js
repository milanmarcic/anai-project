import Head from 'next/head';
import React from 'react'
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';


export default function GalerijaPage() {
  return (
    <div>
    <Head>
      <title>Anai Project</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Gallery/>
    
    <Footer/>
    </div>
  );
}
