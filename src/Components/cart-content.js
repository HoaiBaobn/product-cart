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
                        <div className="remove">
                            <svg
                                version="1.1"
                                className="close"
                                xmlns="//www.w3.org/2000/svg"
                                xmlnsXlink="//www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 60 60"
                                enableBackground="new 0 0 60 60"
                                xmlSpace="preserve"
                            />
                            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                        </div>
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
                        <div className="remove">
                            <svg
                                version="1.1"
                                className="close"
                                xmlns="//www.w3.org/2000/svg"
                                xmlnsXlink="//www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 60 60"
                                enableBackground="new 0 0 60 60"
                                xmlSpace="preserve"
                            />
                            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default CartItems;
