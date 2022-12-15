import React from "react";

import { GridCard } from "shared/grid-card"

const Cart = ({ items = [] }) => {
    return (
        <div className="wrapper">
            <h3 className="app-header">Cart items</h3>
            <div className="grid-container">
                {
                    items?.length ?
                        items.map((item, index) => {
                            return <GridCard item={item} index={index} key={index} showClaimed={false} showAddToCartBtn={false} />;
                        })
                        : "Ooopppss!! you dont have anyting in cart yet!"
                }
            </div>
        </div>
    );
};

export default Cart