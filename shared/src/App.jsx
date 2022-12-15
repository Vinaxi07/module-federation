import React from "react";
import ReactDOM from "react-dom";

import { GridCard } from "shared/grid-card";


import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <GridCard showClaimed={false} showAddToCartBtn={false} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
