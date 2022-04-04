import {createStore,applyMiddleware,compose} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducer"

const middleware = [thunk,logger]
let initialState = {
    // cart: {
    //   cartItems: localStorage.getItem("cartItems")
    //     ? JSON.parse(localStorage.getItem("cartItems"))
    //     : [],
    //   shippingInfo: localStorage.getItem("shippingInfo")
    //     ? JSON.parse(localStorage.getItem("shippingInfo"))
    //     : {},
    // },
  };

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = createStore(
    reducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))//all middlewares
  );

  export default store