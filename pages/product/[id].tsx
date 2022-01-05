import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Context } from "context/Context";
import { GetStaticProps } from "next";
// Pagina Dinamica

export const getStaticPaths = async () => {
  const response = await fetch('https://avocados-kym2fcz8i-lucianocavallo.vercel.app/api/avo/');
  const { data: products }: TAPIAvoResponse = await response.json();

  const paths = products.map(el => ({
    params: { id: el.id }
  }))

  return {
    paths,
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {

  const response = await fetch(`https://avocados-kym2fcz8i-lucianocavallo.vercel.app/api/avo/${params.id}`);
  const product: TProduct = await response.json();

  return {
    props: {
      product
    }
  }
}

const ProductItem = ({ product }: { product: TProduct }) => {
  const [inputQuantity, setQuantity] = useState(1);

  const {
    dispatchCart
  } = useContext(Context);

  const handleAddToCart = (item) => {
    dispatchCart({
      type: '@cart/add',
      payload: {
        item,
        inputQuantity
      }
    })
  }

  const handleOnChange = (e) => {
    setQuantity(e.target.value);
  }

  return (
    <div>
      {Object.keys(product).length &&(
        <>
          <div className="card-container">
            <img src={product.image} alt="" />
            <div className="info-container">
              <p>{product.name}</p>
              <p>${product.price}</p>
              <p>SKU:{product.sku}</p>
              <div className="add-to-cart-container">
                <input
                  type="number"
                  onChange={handleOnChange}
                  value={inputQuantity}
                />
                <button
                  onClick={() => handleAddToCart(product)}
                >Add to Cart</button>
              </div>
            </div>
          </div>

          <p className="description"><strong>Descripci&oacute;n:</strong> {product?.attributes.description}</p>

          <style jsx>{`
            .card-container {
              display: flex;
              align-items: center;
              width: 400px;
              margin: 0 auto;
            }
            .info-container {
              height: 100%;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .add-to-cart-container button {
              background: #20ba45;
              color: white;
              border: none;
              padding: 8px;
              margin: 2px;
              font-weight: 600;
              font-size: 16px;
              border-radius: 8px;
              cursor: pointer;
            }
            .description {
              width: 90%;
              max-width: 600px;
              margin: 0 auto;
            }
          `}</style>
        </>
      )}
    </div>
  );
}

export default ProductItem;
