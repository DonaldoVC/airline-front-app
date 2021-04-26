import {combineReducers} from "redux";

import Cart from "./cart.reducer";
import City from "./city.reducer";
import Flight from "./flight.reducer";

export default combineReducers({
  cart: Cart,
  city: City,
  flight: Flight,
});
