import {useLayoutEffect} from "react";
import {MDBIcon } from 'mdb-react-ui-kit';

export default function(props) {
    const {id, name, price, quantity, incrementQuantity, decrementQuantity} = props;
    return(

     <div>
         <ul className='list-group'>
             <li className=" list-group-item list-group-item-success ">
                 {name} x{quantity} = {price * quantity} <b>$</b>
                 <span className="secondary-content">
        <a className="waves-effect waves-light btn" onClick={() => incrementQuantity(id)}>


                <MDBIcon fas icon="plus-circle" /></a>
        <a
            className="waves-effect waves-light btn "
            onClick={() => decrementQuantity(id)}
            style={{margin: '0px 10px'}}>
        <MDBIcon fas icon="minus-circle" />
        </a>
        <a className='waves-effect waves-light btn'
           onClick={() => props.removeFromBasket(id)}
        >
         <MDBIcon fas icon="trash-alt" />
        </a>
      </span>
             </li>

         </ul>
     </div>
    )
}
