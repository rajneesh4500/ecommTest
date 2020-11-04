import React from "react";
import { useEffect } from "react";

import "./cards.css";

const generateUrl = (data) => {
  const urls = data.substring(1, data.length - 1);
  const urlArraysString = urls.replaceAll('"', "");
  const urlArray = urlArraysString.split(",");

  return urlArray;
};

const Cards = (props) => {
  const productData = props.productData;

  const imageURL = generateUrl(productData.image);

  return (
    <div className="col-sm-6 col-md-5 col-lg-4 item">
      <div className="productbox">
        <img src={imageURL[0]} alt="error" className="box-img" />
        <h3 className="productName">{productData.product_name}</h3>
        <p className="description">
          {productData.description && productData.description.substring(0, 120)}
          ...
        </p>
        <span>
          Price:
          {productData.discounted_price &&
          productData.discounted_price !== productData.retail_price ? (
            <>
              <i className="orig-Price">{productData.retail_price}</i>
              <strong>{productData.discounted_price}</strong>
            </>
          ) : (
            <strong>{productData.retail_price}</strong>
          )}
        </span>
        <div>
          <p
            className="text-muted learn-more"
            onClick={() => {
              alert("Open product Page");
            }}
          >
            Learn More >>
          </p>

          <button
            className="btnR"
            onClick={() => {
              alert("Buy Page");
            }}
          >
            Buy Now
          </button>
          {props.added ? (
            <button className="btnR" onClick={() => props.addItem(productData)}>
              Add Another
            </button>
          ) : (
            <button className="btnR" onClick={() => props.addItem(productData)}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
