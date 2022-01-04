import React from "react";
import Navbar from "@components/Navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
        {children}
      <footer className="container">This is the footer component</footer>

      <style jsx>{`
        div {
          background: salmon;
        }
      `}</style>
    </div>
  );
}

export default Layout;
