import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartItem from '../../compoonents/cart-item/cart-item.component';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../compoonents/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../compoonents/stripe-button/stripe-button.component';

import './checkout.page.styles.scss';

const CheckoutPage = ({cartItems,total})=> (

    <div className='checkout-page'>
        <div className = 'checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span> Quantity </span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>

        </div>
        {cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem= {cartItem} />) )}

        <div className='total'>
            <span>
                TOTAL: ${total}
            </span>

        </div>
        <StripeCheckoutButton price ={total} />
    </div>

    

);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps) (CheckoutPage);