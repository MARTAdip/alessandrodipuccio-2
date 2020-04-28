import React from 'react';
import Link from 'next/link';
import { withNavigationContext } from 'react-awesome-slider/dist/navigation';
import './nav.scss';
import { FiFacebook, FiYoutube, FiInstagram } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="social-media-wrapper">
          <a href="https://www.facebook.com/alessandro.dipuccio" target="blank">
            <FiFacebook color="#0000000" size="30px" />
          </a>
          <a>
            <FiYoutube color="#0000000" size="30px" />
          </a>
          <a>
            <FiInstagram color="#0000000" size="30px" />
          </a>
        </div>
        <div className="page-header__title">
          <h1>ALESSANDRO DI PUCCIO</h1>
        </div>
        <nav>
          <Link href="/">
            <a>index</a>
          </Link>
          <Link href="/about">
            <a>about</a>
          </Link>
          <Link href="/music-video">
            <a>music & video</a>
          </Link>
          <Link href="/teaching">
            <a>teaching</a>
          </Link>
          {/* <button type="button" className="navigation-toggle-mobile-menu">
            <span className="burger">
              <span className="burger__line"></span>
              <span className="burger__line"></span>
            </span>
          </button> */}
        </nav>
      </div>
    </header>
  );
});

export default Nav;

// style={{ cursor: 'url(../../public/music-15.svg),auto' }}
