import React, { useEffect, useState, useContext } from "react";
import ItemCard from "@components/ItemCard/ItemCard";
import Avocado from "@components/SVGIcons/Avocado";
import { Context } from "context/Context";

const Home = () => {
  // const [products, setProducts] = useState<TProduct[]>([]);
  const {
    products,
    setProducts,
  } = useContext(Context);

  useEffect(() => {
    if (!products.length) {
      window.fetch('/api/avo')
      .then(response => response.json())
      .then(({ data, length }) => {
        setProducts(data);
        console.log(data);
        console.log('fetching products...')
      })
    }
  }, [])

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
