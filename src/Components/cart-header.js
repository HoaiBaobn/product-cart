import React from "react";
import TotalQuantity from "./total-quantity";

const CartHeader = () => {
    return (
        <header className="container">
            <h1>Shopping Cart</h1>

            <ul className="breadcrumb">
                <li>Home</li>
                <li>Shopping Cart</li>
            </ul>
            <TotalQuantity />
        </header>
    );
};

export default CartHeader;
