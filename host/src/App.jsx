import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Products, Layout } from "./pages";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import { Cart } from "shared/cart";
import useStore from "host/store";

import "./index.scss";

const App = () => {
  const { cart } = useStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="cart" element={<Cart items={cart} />} />
          <Route path="*" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
