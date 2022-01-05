import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <label htmlFor="about">Nosotros</label>
          <Link href="/about">
            <a id="about">Conoce más</a>
          </Link>
        </li>
        <li>
          <label htmlFor="home">Servicios</label>
          <Link href="/">
            <a id="home">Todos los productos</a>
          </Link>
        </li>
        <li>
          <label htmlFor="about">Hecho para</label>
          <Link href="/about">
            <a id="about">Curso de NextJS de Platzi</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        footer {
          width: 100%;
          height: 80px;
          display: flex;
          justify-content: center;
        }
        ul {
          display: flex;
          list-style: none;
        }
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10px;
        }
        li a {
          text-decoration: none;
          color: blue;
        }
      `}</style>
    </footer>
  );
}

export default Footer;