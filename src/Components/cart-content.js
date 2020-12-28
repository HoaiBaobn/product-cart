import React from "react";

const CartItems = () => {
    return (
        <section className="container">
            <ul className="products">
                <li className="row">
                    <div className="col left">
                        <div className="thumbnail">
                            <a href="index.html">
                                <img
                                    src="https://photographer.vn/wp-content/uploads/2020/09/chupanhdouongsangtrongdep4-1.jpg"
                                    alt="img"
                                />
                            </a>
                        </div>
                        <div className="detail">
                            <div className="name">
                                <a href="index.html">PRODUCT ITEM NUMBER 1</a>
                            </div>
                            <div className="description">
                                Description for product item number 1
                            </div>
                            <div className="price">$5.99</div>
                        </div>
                    </div>
                    <div className="col right">
                        <div className="quantity">
                            <input
                                type="number"
                                className="quantity"
                                step={1}
                                defaultValue={2}
                            />
                        </div>
                        <div className="remove">X</div>
                    </div>
                </li>
                <li className="row">
                    <div className="col left">
                        <div className="thumbnail">
                            <a href="index.html">
                                <img
                                    src="https://photographer.vn/wp-content/uploads/2020/09/chupanhdouongsangtrongdep-1.jpg"
                                    alt="img"
                                />
                            </a>
                        </div>
                        <div className="detail">
                            <div className="name">
                                <a href="index.html">PRODUCT ITEM NUMBER 1</a>
                            </div>
                            <div className="description">
                                Description for product item number 1
                            </div>
                            <div className="price">$5.99</div>
                        </div>
                    </div>
                    <div className="col right">
                        <div className="quantity">
                            <input
                                type="number"
                                className="quantity"
                                step={1}
                                defaultValue={2}
                            />
                        </div>
                        <div className="remove">X</div>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default CartItems;
