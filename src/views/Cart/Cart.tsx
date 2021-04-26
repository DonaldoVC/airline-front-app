import React from "react";
import {Link} from "react-router-dom";
import Moment from 'moment';

import ListCart from "./ListCart";

const Cart = () => {
  Moment.locale('mx');
  
  return (
    <div className="container mx-auto shadow-md mt-6 rounded-2xl py-3 px-6">
      <ListCart>
        <Link to='/reservation'>
          <button className="absolute mt-6 right-2 bg-blue-500 rounded-md w-44 h-10 font-light text-white">Reservar</button>
        </Link>
      </ListCart>
    </div>
  )
}

export default Cart;
