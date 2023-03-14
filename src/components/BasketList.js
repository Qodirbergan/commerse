import BasketItem from "./BasketItem";
import {MDBIcon } from 'mdb-react-ui-kit';

export default function BasketList(props) {
    const {order, decrementQuantity, incrementQuantity} = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return(
        <div className="bsk">
            <ul className="list-group">
                <li className="collection-item active">
                    Basket
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
                }): <li className="list-group-item list-group-item-warning">Basket is empty</li>}
                <li className="collection-item active">
                    Total Price: {totalPrice} <b>$</b>
                </li>
                <MDBIcon fas icon="times" onClick={props.handleBasketShow} />

            </ul>
        </div>
    )
}