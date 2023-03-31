import React, {useContext} from 'react'
import {ShopContext} from '../../context/shop-context'


export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemsAmount = cartItems[id]

    return(
        <div className="product">
            <img src={productImage} alt="alomak shop items" />
            <div className="description">
                <p><strong>{productName}</strong></p>
                <p>${price}</p>
            </div>
            <button className="addToCartButton" onClick={() => addToCart(id)}>
                Add to Cart {cartItemsAmount > 0 && <> ({cartItemsAmount}) </>}
            </button>
        </div>
    )
};