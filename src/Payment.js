import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './Stateprovider';


function Payment() {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();


    return (
        <div className="payment">
            <div className="payment__container">
                <h2>Your Basket (<Link to="/checkout">{basket?.length} Items</Link>)</h2>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>Samlple addess Lineone,</p>
                        <p>Samlple addess LineTwo</p>
                        <p>PinCode-604368</p>
                    </div>

                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Cart Items</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
