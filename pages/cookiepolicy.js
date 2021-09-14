import React from 'react'
import CookiePolicy from '../components/CookiePolicy';
import ScrollToTop from '../components/ScrollToTop';
import Layout from '../components/Layout';

export default function ONamaPage() {
  return (
    <div>
    <Layout>
    <CookiePolicy />
    <ScrollToTop />
    </Layout>
    </div>
  );
}