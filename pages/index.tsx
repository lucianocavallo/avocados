import React from "react";
import ItemCard from "@components/ItemCard/ItemCard";
import Avocado from "@components/SVGIcons/Avocado";

export const getServerSideProps = async () => {
  const response = await fetch('https://avocados-kym2fcz8i-lucianocavallo.vercel.app/api/avo');
  const { data: products }: TAPIAvoResponse = await response.json();

  return {
    props: {
      products
    }
  }
}

const Home = ({ products }) => {
  return (
    <main>
      <h2>Platzi
        <Avocado size="52px" />
         Avo</h2>
      <div className="products-container">
        {products.map(product => (
          <ItemCard product={product} key={product.id} />
        ))}
      </div>
      <style jsx>{`
        h2 {
          padding-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 35px;
        }
        .products-container {
          padding-top: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 700px;
          margin: 0 auto;
          gap: 20px;
          place-items: center;
        }
      `}</style>
    </main>
  );
}

export default Home;
