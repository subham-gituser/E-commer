import { combineReducers } from "redux";
import {reducer as notifications} from 'react-notification-system-redux';
import { productsReducer,productDetailsReducer } from "../pages/products/States/products.reducers";

const rootReducer = () => {
    return combineReducers(
        {
            notifications,
            product: productsReducer,
            productDetails: productDetailsReducer,
        }
    )
}

export default rootReducer



