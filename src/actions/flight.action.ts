import axios, {AxiosResponse} from "axios";

import {CLEAN_FLIGHTS, GET_AVAILABLE_FLIGHTS} from "../constants"
import {getToken} from "./token.action";

export const getAvailability = (flight: FLIGHT_FORM) => {
  return async (dispatch: any, getState: any) => {
    try {
      const flightsResponse: AxiosResponse = await axios.post(`${process.env.REACT_APP_BASE_API}/flight/availability`, {data: flight});
  
      const flights: FLIGHT[] = flightsResponse.data.flights.map((element: FLIGHT) => {
        const {city} = getState();
    
        const indexSource: number = city.cities.findIndex((city: CITY) => city._id === flight.citySource);
        const indexDestiny: number = city.cities.findIndex((city: CITY) => city._id === flight.cityDestiny);
    
        return {
          ...element,
          citySource: city.cities[indexSource],
          cityDestiny: city.cities[indexDestiny]
        }
      })
  
      dispatch({
        type: GET_AVAILABLE_FLIGHTS,
        success: flightsResponse.data.success,
        flights
      });
    } catch (e) {
      await getToken();
    }
  }
}

export const cleanFlights = () => {
  return {
    type: CLEAN_FLIGHTS
  }
}
