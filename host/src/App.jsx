import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductsList as ProductsListConst } from "./constants/index.js";
import { GridCard } from "shared/grid-card";
import { Cart } from "shared/cart";

import "./index.scss";

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <h1 className="service-worker-title">Vodafone App</h1>
      </header>

      <div className="grid-container">
        {ProductsListConst.map((item, index) => {
          return <GridCard item={item} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
