import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" prefetch={false}>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
