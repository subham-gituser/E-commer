import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./productCard.scss"

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  
  return (
    <Link className="productCard" target='_blank' to={`/product/${product._id}`}>
      <img src={require("../../../assets/images/cover.jfif")} alt={product.name} />

      <p>{product.name}</p>
      <div>
        <Rating {...options} />
        <span className="productCardSpan">
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
