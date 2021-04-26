import React, {useEffect} from 'react';
import {Route, Switch, HashRouter} from "react-router-dom";
import {useDispatch} from "react-redux";

import './App.css';

import {getAllCities} from "./actions/city.action";
import {getToken} from "./actions/token.action";

import Bar from "./containers/Bar";

import Home from "./views/Home";
import Cart from "./views/Cart";
import Reservation from "./views/Reservation";
import Schedule from "./views/Schedule";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    getToken().then(() => {
      dispatch(getAllCities())
    })
  }, [])
  
  return (
    <HashRouter>
      <Bar/>
      <Switch>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/reservation">
          <Reservation/>
        </Route>
        <Route path="/schedule/:people">
          <Schedule/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
