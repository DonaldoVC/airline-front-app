import {CLEAN_FLIGHTS, GET_AVAILABLE_FLIGHTS} from '../constants';

const initialState: FLIGHT_STATE = {
  success: false,
  flights: []
};

export default function infoReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_AVAILABLE_FLIGHTS:
      return {success: action.success, flights: action.flights};
    case CLEAN_FLIGHTS:
      return {success: false, flights: []};
    default:
      return state;
  }
}
