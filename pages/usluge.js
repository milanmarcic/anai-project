import Head from 'next/head';
import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import Cookie from '../components/Cookie';


export default function UslugePage() {
  return (
    <div>
    <Head>
      <title>Anai Project</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap" rel="stylesheet"/> 
    </Head>
    <Header />
    <Card/>
    <Cookie/>
    <Footer/>
    </div>
  );
}