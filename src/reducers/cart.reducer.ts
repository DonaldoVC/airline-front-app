import {ADD_TO_CART, CLEAN_CART, REMOVE_FROM_CART} from '../constants';

const initialState: CART_STATE = {
  reservations: []
};

export default function infoReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, reservations: state.reservations.concat(action.reservation)};
    case REMOVE_FROM_CART:
      return {
        ...state,
        reservations: state.reservations.filter((r: RESERVATION) => r.id !== action.reservation)
      }
    case CLEAN_CART:
      return {reservations: []}
    default:
      return state;
  }
}
