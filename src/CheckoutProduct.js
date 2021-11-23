import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './Stateprovider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the product from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title" >
                    {title}
                </p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>&#11088;</p>
                    ))}
                </div>
                <button onClick={removeFromBasket} >Remove Item</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
