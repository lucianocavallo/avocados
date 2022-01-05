import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Context } from "context/Context";

const ProductItem = () => {
  const { query: { id }} = useRouter();
  const [inputQuantity, setQuantity] = useState(1);

  const {
    dispatchCart
  } = useContext(Context);

  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    if(id) {
      if(!Object.keys(product).length) {
        window.fetch(`/api/avo/${id}`)
        .then(res => res.json())
        .then(product => setProduct(product))
        .catch(error => console.error(error));
      }
    }
  }, [id])

  const handleAddToCart = (item) => {
    dispatchCart({
      type: '@cart/add',
      payload: {
        item,
        inputQuantity
      }
    })
  }
  // const handleAddToCart = (item) => {
  //   let newItem
  //   let cartCopy = [...cart];
  //   if (cartCopy.some(element => item.id === element.id)) {
  //     const index = cartCopy.findIndex(el => el.id == item.id);
  //     console.log('type', typeof cartCopy[index].quantity)
  //     let newQuantity = cartCopy[index].quantity + 1
  //     newItem = {...item, quantity: newQuantity};
  //     cartCopy = cartCopy.filter(el => el.id !== item.id)
  //     console.log('producto ya existente');

  //   } else {
  //     console.log('nuevo producto');
  //     newItem = {...item, quantity: 1}
  //   }
  //   cartCopy.push(newItem);
  //   console.log(cartCopy);
  //   setCart(cartCopy);
  // }
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
