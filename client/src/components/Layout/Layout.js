import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div
      style={{
        // background: "linear-gradient(45deg, #f3a0a8, #fff3cd)",
        // background: 'linear-gradient(90deg, hsla(120, 6%, 90%, 1) 0%, hsla(228, 75%, 16%, 1) 100%)', 
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ flex: 1, minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "SPORTYFY PRO",
};

export default Layout;
