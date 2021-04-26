import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import swal from "sweetalert";

import {finishReservation} from "../../actions/cart.action";

import {selectCart} from "../../selectors/cart.selector";

import ListCart from "../Cart/ListCart";

import styles from "./reservation.module.css";

const Reservation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const { register, handleSubmit, reset, errors } = useForm<USER_FORM>();
  
  const cartSelector: CART_STATE = useSelector(selectCart);
  
  const handleReserve = (values: USER_FORM) => {
    if (cartSelector.reservations.length) {
      dispatch(finishReservation(values));
  
      swal("!Gracias por tu reserva!", "", "success").then(() => {
        reset();
        history.push("/");
      });
    } else {
      swal("Tu carrito está vacio", "Selecciona un vuelo", "error");
    }
  }
  
  return (
    <div className="container mx-auto shadow-md mt-6 rounded-2xl py-3 px-6 pb-20 xl:pb-10 2xl:pb-10">
      <div className="grid grid-cols-3 gap-2">
        <div className={`${styles.section} xl:col-span-2 2xl:col-span-2 xl:pr-10 2xl:pr-10 col-span-3 relative`}>
          <form onSubmit={handleSubmit(handleReserve)}>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 font-bold">Nombre(s)</label>
              <input type="text" name="name" autoComplete="off" ref={register({required: true})}
                     className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
              {errors.name && <small className={styles.errors}>El campo es requerido</small>}
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 font-bold">Apellidos</label>
              <input type="text" name="lastName" autoComplete="off" ref={register({required: true})}
                     className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
              {errors.lastName && <small className={styles.errors}>El campo es requerido</small>}
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 font-bold">Dirección</label>
              <input type="text" name="address" autoComplete="off" ref={register({required: true})}
                     className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
              {errors.address && <small className={styles.errors}>El campo es requerido</small>}
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 font-bold">Correo electrónico</label>
              <input type="email" name="email" autoComplete="off" ref={register({required: true})}
                     className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
              {errors.email && <small className={styles.errors}>El campo es requerido</small>}
            </div>
    
            <div className="absolute right-0 xl:right-10 2xl:right-10">
              <button className="mt-6 bg-blue-500 rounded-md w-44 h-10 font-light text-white">Reservar</button>
            </div>
          </form>
        </div>
        <div className="hidden xl:inline 2xl:inline xl:pl-10 2xl:pl-10">
          <ListCart/>
        </div>
      </div>
    </div>
  )
}

export default Reservation;
