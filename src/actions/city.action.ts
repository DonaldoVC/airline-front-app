import axios, {AxiosResponse} from "axios";

import {GET_ALL_CITIES} from "../constants"
import {getToken} from "./token.action";

export const getAllCities = () => {
  return async (dispatch: any) => {
    try {
      const citiesResponse: AxiosResponse = await axios.get(`${process.env.REACT_APP_BASE_API}/city`);
  
      dispatch({
        type: GET_ALL_CITIES,
        success: citiesResponse.data.success,
        cities: citiesResponse.data.cities
      });
    } catch (e) {
      await getToken();
    }
  }
}
