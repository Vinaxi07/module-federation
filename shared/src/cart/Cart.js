import React from "react";

import  { GridCard } from "shared/grid-card"

 const Cart = ({ items=[] }) => {
    return (
        <div className="wrapper">
            <h3 className="app-header">Cart items</h3>
            <div> Home </div>
            <div className="grid-container">
                {items.map((item, index) => {
                    return <GridCard item={item} index={index} key={index} />;
                })}
            </div>
        </div>
    );
};

export default Cart