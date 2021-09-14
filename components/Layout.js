
import Header from "./Header" 
import Footer from "./Footer" 
import Head from 'next/head';

export default function Layout({ children }) {
    return (
      <> 
        <Head>
        <title>Anai Project</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap" rel="stylesheet"/> 
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )
  }