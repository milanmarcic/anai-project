import React from 'react'
import Blog from '../components/Blog';
import ScrollToTop from '../components/ScrollToTop';
import Cookie from '../components/Cookie';
import Layout from '../components/Layout';


export default function BlogPage() {
  return (
    <div>
    <Layout>
    <Blog/>
    <ScrollToTop/>
    <Cookie/>
    </Layout>
    </div>
  );
}
