import {MDBIcon } from 'mdb-react-ui-kit';
import React from "react";
export default function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props;
    return(
        <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
     <button className='btn btn-success'> <MDBIcon fas icon="cart-arrow-down" />  {quantity ? <span className="cart-quantity">{quantity}</span> : null}  </button>

        </div>
    )
}