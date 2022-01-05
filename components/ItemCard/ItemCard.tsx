import React from "react";
import Link from "next/link";

const ItemCard = ({product}) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="card-container">
        <img src={product.image} alt="" />
        <p key={product.id}>{product.name}</p>
        <p>${product.price}</p>
        <style jsx>{`
          .card-container {
            background: white;
            width: 340px;
            box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, .3);
            border-radius: 20px;
            padding: 10px 6px;
            transform-origin: bottom;
            transition: transform 0.4s ease;
            cursor: pointer;
          }
          .card-container:hover {
            transform: scale(1.02);
          }
          div p {
            margin-bottom:5px;
            margin-left: 10px;
          }
          div p:nth-child(2) {
            font-size: 20px;
          }
        `}</style>
      </div>
    </Link>
  );
}

export default ItemCard;