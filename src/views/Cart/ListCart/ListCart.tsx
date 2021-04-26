import React, {FC, Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import Moment from 'moment';

import {selectCart} from "../../../selectors/cart.selector";

import styles from "./ListCart.module.css"
import {removeReservation} from "../../../actions/cart.action";

interface IProps {
  children?: any;
}
const ListCart: FC<IProps> = ({children}) => {
  Moment.locale('mx');
  
  const dispatch = useDispatch();
  
  const cartSelector: CART_STATE = useSelector(selectCart);
  
  const handleRemove = (reservation: string) => {
    dispatch(removeReservation(reservation))
  }
  
  if (!cartSelector.reservations.length) {
    return (
      <Fragment>
        <div>
          <p className="text-center">Tu carrito se encuentra vacio.</p>
        </div>
      </Fragment>
    )
  }
  
  return (
    <Fragment>
      {cartSelector.reservations.map((element, index) =>
      <div key={index} className={`${styles.reservation} pb-2 pt-2`}>
        <div className="grid grid-cols-4 gap-4 relative">
          <p className="text-2xl col-span-3">{element.flight.citySource.name} - {element.flight.cityDestiny.name}</p>
          <div className="right-2 text-right absolute">
            <p className="text-2xl">$ {(element.flight.price * element.people).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <button className="text-blue-600 text-sm" onClick={() => handleRemove(element.id)}>Eliminar</button>
          </div>
        </div>
        <p>{Moment(element.flight.dateSource).format('DD MMM YYYY HH:mm')}</p>
        <p>Pasajeros: {element.people}</p>
      </div>)}
      
      <br/>
  
      <div className="grid grid-cols-5 gap-4 pb-20">
        <div className="col-start-3 col-span-3 relative">
          <div className="grid grid-cols-4 gap-4">
            <p className="text-2xl col-span-3">Total: </p>
            <div className="right-2 text-right absolute">
              <p className="text-2xl">$ {cartSelector.reservations.reduce((a, b) => a + (b.flight.price * b.people), 0)}</p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </Fragment>
  )
}

export default ListCart;
