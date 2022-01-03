import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  // const { query: { productId } } = useRouter();
  const router = useRouter();

  // console.log(productId);
  console.log(router.query);

  return (
    <div>
      <h1>Esta es la pagina del producto: {router.query.productId}</h1>
    </div>
  );
}

export default ProductItem;