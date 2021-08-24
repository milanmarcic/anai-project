import Head from 'next/head';
import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';


export default function UslugePage() {
  return (
    <div>
      <Head>
        <title>Anai Project</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Card/>
      <Footer/>
      </div>
  );
}