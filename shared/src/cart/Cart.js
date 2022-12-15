import React from "react";
import useStore from "host/store";

import { GridCard } from "shared/grid-card"

const Cart = ({ items = [] }) => {
  const { emptyCart } = useStore();

    return (
        <div className="wrapper">
            <h3 className="app-header">Cart items</h3>
            <button className="cart-button" onClick={() => { emptyCart() }}>Empty cart</button>

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