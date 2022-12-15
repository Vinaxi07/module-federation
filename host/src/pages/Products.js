import React from "react"

import { ProductsList as ProductsListConst } from "../constants";
import { GridCard } from "shared/grid-card";
import useStore from "host/store";

import "../index.scss";

const Products = () => {

  const { cart } = useStore();

  return (
   
    <div className="wrapper">
      <header>
        <h1 className="app-header">Vodafone App</h1>
       
      </header>
      <div >{`(${cart?.length}) items in cart`}</div>
      <div className="grid-container">
        {ProductsListConst.map((item, index) => {
          return <GridCard item={item} index={index} key={index} />;
        })}
      </div>
      <br/>
    </div>
  );
};
export default Products
