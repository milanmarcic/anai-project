import Head from 'next/head';
import React from 'react'
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import Header from '../components/Header';


export default function BlogPage() {
  return (
    <div>
    <Head>
      <title>Anai Project</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Blog/>
    
    <Footer/>
    </div>
  );
}
