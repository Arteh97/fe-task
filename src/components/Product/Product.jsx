import React from 'react';
import './Product.css'

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product__image">
        <img src={product.image.url} alt={product.image.attributes.imageAltText} />
      </div>
      <h2 className="product__title">{product.productName}</h2>
      <p className="product__price">Price: {product.price.priceIncTax}</p>
      <button className="product__button">Add to cart</button>
    </div>
  );
};

export default Product;

