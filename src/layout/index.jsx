import React from "react";
import { Helmet } from "react-helmet";

import config from "../../data/SiteConfig";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="relative flex flex-col h-screen justify-between">
      <Navbar />
      <div className="relative px-4 sm:px-6 lg:px-8 flex-grow overflow-x-none">
        <div className="max-w-4xl mx-auto">
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
          </Helmet>
          {children}
        </div>
      </div>
      <Footer config={config} />
    </div>
  );
}
