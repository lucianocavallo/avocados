import React from "react";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <style jsx>{`
        div {
          min-height: 100vh;
          display: grid;
          grid-template-rows: auto 1fr auto;
        }
      `}</style>
    </div>
  );
}

export default Layout;
