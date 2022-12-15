import React from "react";
//import {  useHistory } from "react-router-dom";
import useStore from "host/store";

import "./product-list.css";

const GridCard = ({ item = {
  id: 1,
  name: 'iphone',
  image: require("./assets/iphone.png").default,
  offer: '10% off',
  claimed: 20,
  price: 50
}, index = 0,
  showClaimed = true,
  showAddToCartBtn = true
}) => {

  // let history = useHistory();

  const { addItem } = useStore();


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

        {
          showClaimed &&
          <div className="grid-progressBar">
            {`${item.claimed}% claimed`}
          </div>}
        {showAddToCartBtn && <button className="cart-button" onClick={() => { addItem(item) }}>Add to cart</button>}
      </div>
    </div>
  );
};

export default GridCard