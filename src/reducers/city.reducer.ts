import {GET_ALL_CITIES} from '../constants';

const initialState: CITY_STATE = {
  success: false,
  cities: []
};

export default function infoReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_ALL_CITIES:
      return {success: action.success, cities: action.cities};
    default:
      return state;
  }
}
