import React, {useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Moment from "moment";

import {selectFlight} from "../../selectors/flight.selector";

import {addToCart} from "../../actions/cart.action";

import styles from "./Schedule.module.css";
import swal from "sweetalert";

const Schedule = () => {
  Moment.locale('mx');
  
  const dispatch = useDispatch();
  
  // @ts-ignore
  let { people } = useParams();
  const history = useHistory();
  
  useEffect(() => {
    if (!flightSelector.flights.length) {
      history.push('/');
    }
  })
  
  const flightSelector: FLIGHT_STATE = useSelector(selectFlight);
  
  const handleAdd = (flight: FLIGHT) => {
    dispatch(addToCart(flight, +atob(people)));
  
    swal("Vuelo añadido al carrito", "", "success").then(() => {
      history.push("/");
    });
  }
  
  if (flightSelector.flights.length) {
    return (
      <div className="container mx-auto mt-6 py-3 px-6 xl:pl-20 xl:pr-28 2xl:pl-20 2xl:pr-28">
        <div className="">
          <p>Elige tu vuelo de salida de</p>
          <p className="font-bold text-2xl">{flightSelector.flights[0].citySource.name} a {flightSelector.flights[0].cityDestiny.name}</p>
        </div>
      
        <div>
          {flightSelector.flights.map((element: FLIGHT, index: number) =>
            <div key={index} className="grid grid-cols-4 gap-4 relative w-full shadow-md pt-6 pb-6 pl-4 pr-4 rounded-xl mt-4 gap-2 cursor-pointer relative">
              <div className={`${styles.section} col-span-3`}>
                <p><strong>Salida:</strong> {Moment(element.dateSource).format('DD MMM YYYY HH:mm')}</p>
                <p><strong>Llegada:</strong> {Moment(element.dateDestiny).format('DD MMM YYYY HH:mm')}</p>
              </div>
              <div className="right-2 text-center">
                <p>$ {(element.price * +atob(people)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <button className="text-blue-600 text-sm" onClick={() => handleAdd(element)}>Añadir al carrito</button>
              </div>
            </div>)}
        </div>
      </div>
    )
  }
  
  return (null)
}

export default Schedule;
