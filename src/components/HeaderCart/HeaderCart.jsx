import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice'
import Korzinka from '../../assets/images/bag-icon.svg'
export const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };

    const cartQuantity = cartItems.length;

    return (
            <header id="header">
                <div className="container">
                    <div className="navbar">
                        <h4>Интернет магазин</h4>
                        <div className="nav_menu">
                            <div
                                title="Cart"
                                className="cart_icon"
                                onClick={() => handleOpenCart(true)}
                            >
                                <img
                                    src={Korzinka}
                                    alt="bag-icon"
                                />
                                <span className="badge">{cartQuantity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    );
};