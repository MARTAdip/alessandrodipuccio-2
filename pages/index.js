import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Provider } from 'react-awesome-slider/dist/navigation';
import { motion } from 'framer-motion';
import React from 'react';
import Nav from '../components/nav/Nav';
import Video from '../components/home/Video';

import Gallery from '../components/Gallery';

const App = () => (
  <>
    <Head>
      <title>Alessandro Di Puccio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <Video />
  </>
);

export default App;
