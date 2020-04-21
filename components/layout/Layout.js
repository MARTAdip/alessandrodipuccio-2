import React from "react";
import "./layout.scss";
import Nav from "../nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;