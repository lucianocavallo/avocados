import React from "react";
import Navbar from "@components/Navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
        {children}
      <footer>This is the footer component</footer>
    </div>
  );
}

export default Layout;
