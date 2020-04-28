import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Provider } from 'react-awesome-slider/dist/navigation';
import { motion } from 'framer-motion';
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
    <img src="../static/1.jpg" alt="boh" />
    {/* <img src={require('../static/music.svg').default} alt="boh"></img> */}
  </>
);

export default App;
