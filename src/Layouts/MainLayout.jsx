import React from "react";

import { Outlet } from "react-router";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
