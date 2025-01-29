import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SwiggyHeader from "./components/HeaderSwiggy/SwiggyHeader";

function Layout() {
  return (
    <>
      {/* <Header /> */}
      <SwiggyHeader/>

      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
