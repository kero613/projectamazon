import React from 'react'
import starIcon from "../images/icons/star.png"
import './CheckoutProduct.css'
import { useAuth } from '../context/GlobalState'

const CheckoutProduct = ({ id, image, title, price, rating, hiddenButton }) => {
    const { dispatch } = useAuth();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    };
    return <div className='checkoutProduct'>
        <img className='checkoutProduct-image' src={image} alt='' />
        <div className='checkoutProduct-info'>
            <p className='checkoutProduct-title'>{title}</p>
            <p className='checkoutProduct-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct-rating'>
                {Array(rating).fill().map((_, i) => (
                    <p>
                        <img src={starIcon} alt='' />
                    </p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
}

export default CheckoutProduct;