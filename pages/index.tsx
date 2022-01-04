import React, { useEffect, useState } from "react";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch('/api/avo')
    .then(response => response.json())
    .then(({ data, length }) => {
      setProductList(data);
    })
  }, [])

  return (
    <div>
      <h1>Hola Platzi!</h1>
      {productList.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default Home;