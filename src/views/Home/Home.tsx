import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import Moment from "moment";
import swal from "sweetalert";

import home from "../../assets/images/home.jpg";

import {selectCity} from "../../selectors/city.selector";
import {selectFlight} from "../../selectors/flight.selector";

import {cleanFlights, getAvailability} from "../../actions/flight.action";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  
  const minDate = Moment().format('YYYY-MM-DD');
  
  const { register, handleSubmit, getValues } = useForm<FLIGHT_FORM>();
  
  const citySelector: CITY_STATE = useSelector(selectCity);
  const flightSelector: FLIGHT_STATE = useSelector(selectFlight);
  
  useEffect(() => {
    if (flightSelector.flights.length) {
      dispatch(cleanFlights());
    }
  }, [])
  
  useEffect(() => {
    if (flightSelector.flights.length) {
      history.push(`/schedule/${btoa(getValues().people.toString())}`);
    } else {
      if (flightSelector.success) {
        swal("Sin vuelos disponibles", "Selecciona otra fecha", "error");
        dispatch(cleanFlights());
      }
    }
  }, [flightSelector.flights])
  
  const handleFind = (values: FLIGHT_FORM) => {
    dispatch(getAvailability(values));
  }
  
  return (
    <div className="mx-auto shadow-md mt-6 py-3 px-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 xl:col-span-1 2xl:col-span-1">
          <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(handleFind)}>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 font-bold">Origen</label>
              <select name="citySource" ref={register({required: true})}
                      className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                <option>Seleccione una ciudad</option>
                {citySelector.success && citySelector.cities.map((element: CITY, index: number) =>
                  <option key={index} value={element._id}>{element.name}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 font-bold">Destino</label>
              <select name="cityDestiny" ref={register({required: true})}
                      className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                <option>Seleccione una ciudad</option>
                {citySelector.success && citySelector.cities.map((element: CITY, index: number) =>
                  <option key={index} value={element._id}>{element.name}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 font-bold">Salida</label>
              <input type="date" name="date" autoComplete="off" ref={register({required: true})} min={minDate}
                     className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
              
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 font-bold">Pasajeros</label>
              <select name="people" ref={register({required: true})}
                      className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                {[...Array(20)].map((_, index: number) =>
                  <option key={index} value={index + 1}>{index + 1}</option>)}
              </select>
            </div>
    
            <div className="col-span-2">
              <button className="mt-6 bg-blue-500 rounded-md w-full h-10 font-light text-white">Buscar vuelos</button>
            </div>
          </form>
        </div>
        <div className="hidden xl:inline 2xl:inline -mr-6 -mb-3">
          <img src={home} alt="home"/>
        </div>
      </div>
    </div>
  )
}

export default Home;
