import BasketItem from "./BasketItem";
import {MDBIcon } from 'mdb-react-ui-kit';

export default function BasketList(props) {
    const {order, decrementQuantity, incrementQuantity} = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return(
        <div className=" basket-list ">
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-center">
                   <p> Basket</p>
                </li>
                {order.length ? order.map(item => {
                    return(
                        <BasketItem
                            key={item.id}
                            {...item}
                            removeFromBasket={props.removeFromBasket}
                            decrementQuantity={decrementQuantity}
                            incrementQuantity={incrementQuantity}
                        />
                    )
                }): <li className="list-group-item list-group-item-danger">Basket is empty</li>}
                <li className="list-group-item list-group-item-warning d-flex justify-content-center">
                    Total Price: {totalPrice} <b>$</b>
                </li>

                <MDBIcon className='basket-close' fas icon="times" onClick={props.handleBasketShow} />

            </ul>
        </div>
    )
}