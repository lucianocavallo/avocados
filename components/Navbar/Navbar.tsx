import React, { useContext } from "react";
import Link from "next/link";
import Avocado from "@components/SVGIcons/Avocado";
import Basket from "@components/SVGIcons/Basket";
import { Context } from "context/Context";

const Navbar = () => {
  const { cart } = useContext(Context);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>
              <Avocado className="avocado" />
              <span>Avo Store</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/cart" prefetch={false}>
            <a>
              <Basket />
              <span>
                Canasta ({cart.length})
              </span>
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          border-bottom: 2px solid black;
        }
        ul {
          display: flex;
          justify-content: space-between;
          min-width: 500px;
          list-style: none;
        }
        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: black;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
