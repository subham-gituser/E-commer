import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_RESET,
  NEW_PRODUCT_FAIL
} from "./products.constant"
import { getAllProducts,getProductDetails } from '../../../config/request'
import Notifications from 'react-notification-system-redux';

export const getProduct = () =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      const data = await getAllProducts()
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data.data.data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const getProductDetail = (id) =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
      const data = await getProductDetails(id)
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.data.data,
      });
    } catch (error) {
      const notificationOpts = {
        // uid: 'once-please', // you can specify your own uid if required
        title: 'Hey, it\'s good to see you!',
        message: 'Now you can see how easy it is to use notifications in React!',
        position: 'tr',
        autoDismiss: 0,
        action: {
          label: 'Click me!!',
          callback: () => alert('clicked!')
        }
      };
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
      dispatch(Notifications.error(notificationOpts))
    }
  };


  