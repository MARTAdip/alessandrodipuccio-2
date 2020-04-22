import React from "react";
import Link from 'next/link'
import {
  withNavigationContext,
} from "react-awesome-slider/dist/navigation";
import "./nav.scss";


const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">

          <div>
            <h1>
              <span>ALESSANDRO DI PUCCIO</span>
            </h1>
          </div>
        </div>
        <nav>
          <Link href="/">
            index
          </Link>
          
          <Link
            href="/about"
          >
            about
          </Link>
          <Link
            href="/music-links"
          >
            music
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;