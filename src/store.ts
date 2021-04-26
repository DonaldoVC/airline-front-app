import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers";

const composeEnhancers = compose();

export default createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));
