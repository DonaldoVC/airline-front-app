import React from "react";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/images/plane.png';

const Bar = () => {
  return (
    <div className="flex pt-2 pb-2 shadow-md">
      <div className="flex">
        <Link to="/">
          <img className="w-28 h-auto" src={logo} alt="logo"/>
        </Link>
        <span className="mt-3 text-2xl">Airline</span>
      </div>
      
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingBag} className="text-2xl absolute right-8 top-6"/>
      </Link>
    </div>
  )
}

export default Bar;
