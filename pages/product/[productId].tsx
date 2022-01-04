import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// const InitialProduct: TProduct = {
//   id: '',
//   name: '',
//   sku: '',
//   price: 0,
//   image: '',
//   attributes: {
//     description: '',
//     shape: '',
//     hardiness: '',
//     taste: ','
//   }
// }

const ProductItem = () => {
  const { query: { productId }} = useRouter();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if(productId) {
      window.fetch(`/api/avo/${productId}`)
      .then(res => res.json())
      .then(product => setProduct(product))
      .catch(error => console.error(error));
    }
  }, [productId])

  return (
    <div>
      {Object.keys(product).length &&(
        <>
          <h1>Esta es la pagina del producto: {product?.name}</h1>
          <p>Precio: {product?.price}</p>
          <p>Descripcion: {product?.attributes.description}</p>
        </>
      )}
    </div>
  );
}

export default ProductItem;
