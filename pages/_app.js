import React from 'react';
import App, { Container }  from 'next/app';
import { AnimatePresence } from 'framer-motion';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Container>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Container>
      </>

    );
  }
}

export default MyApp;