import {v4 as uuidv4} from "uuid";

import {CLEAN_CART, REMOVE_FROM_CART, ADD_TO_CART} from "../constants";

export const addToCart = (flight: FLIGHT, people: number) => {
  return {
    type: ADD_TO_CART,
    reservation: {flight, id: uuidv4(), people}
  }
}

export const removeReservation = (reservation: string) => {
  return {
    type: REMOVE_FROM_CART,
    reservation
  }
}

export const finishReservation = (user: USER_FORM) => {
  return {
    type: CLEAN_CART
  }
}
