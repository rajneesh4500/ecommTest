import React from "react";
import { combineReducers } from "redux";
import CartReducer from "../reducers/cartReducer";
import initialCallReducer from "../reducers/initialCallReducer";

const rootReducers = combineReducers({
  cartValue: CartReducer,
  items: initialCallReducer,
});

export default rootReducers;
