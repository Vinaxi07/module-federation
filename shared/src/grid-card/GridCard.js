import React from "react";
//import {  useHistory } from "react-router-dom";

import "./product-list.css";

const GridCard = ({ item = {
  id: 1,
  name: 'iphone',
  image: require("./assets/iphone.png").default,
  offer: '10% off',
  claimed: 20,
  price: 50
}, index = 0 }) => {

 // let history = useHistory();

  return (
    <div className="grid-item" key={index}>
      <div className="grid-image">
        <img className="img-src" src={`${item.image}`} alt='No image' />
      </div>

      <div className="grid-offer padding-top-10">
        <span className="offer-percentage">{item.offer}</span>
        <span className="offer-text">Deal</span>

      </div>
      <div className="grid-name padding-top-10">{item.name}</div>
      <div className="grid-price padding-top-10">&#x20b9;{item.price}</div>
      <div className="grid-progressbar padding-top-10">

        <div className="grid-progressBar">
          {`${item.claimed}% claimed`}
        </div>
        <button className="cart-button" onClick={()=>{alert(`${item.name} added in cart!`)}}>Add to cart</button>
      </div>
    </div>
  );
};

export default GridCard