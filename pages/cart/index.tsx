import React, { useContext } from "react";
import { Context } from "context/Context";

const Cart = () => {
  const { cart, dispatchCart } = useContext(Context);

  const totalAPagar = () => {
    const total = cart.reduce((accum, item) => {
      return ((item.price * item.quantity) + accum)
    }, 0);
    return total.toFixed(2);
  }

  const handleRemoveFromCart = (item) => {
    dispatchCart({
      type: '@cart/remove',
      payload: item
    })
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="container">
      {cart.map((item, index) => (
        <div className="item-container" key={index}>
          <div className="sub-container">
            <div>
              <span>Producto: </span><span>{item.name}</span>
            </div>
            <div>
              <span>Cantidad: </span><span>{item.quantity}</span>
            </div>
            <div>
              <span>Precio x unidad: </span><span>${item.price}</span>
            </div>
          </div>
          <button onClick={() => handleRemoveFromCart(item)}>Eliminar<br />del carrito</button>
        </div>
      ))}
      </div>
      <p className="total">Total a pagar: <span>${totalAPagar()}</span></p>
      <style jsx>{`
        .cart-container {
          width: 400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }
        .container {
          display: grid;
          gap: 10px;
        }
        .item-container {
          display: flex;
          align-items: center;
        }
        .sub-container {
          box-shadow: 0px 0px 4px rgba(0,0,0,.5);
          border-radius: 8px;
          padding: 10px;
          flex-grow: 1;
        }
        .sub-container div {
          display: flex;
          justify-content: space-between;
        }
        .total {
          margin-top: 20px;
          font-weight: 600;
          text-align: right;
        }
        .total span {
          font-size: 20px;
        }
        button {
          margin-left: 5px;
          background: #e63737;
          border: none;
          color: white;
          font-weight: 600;
          padding: 10px 2px;
          border-radius: 8px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Cart;