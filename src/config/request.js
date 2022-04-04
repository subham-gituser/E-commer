import axios from './Http'
import { PRODUCT_PATH, BASE_URL } from './constant'

//product APIs
export const getAllProducts = () => axios.get(`${BASE_URL}/${PRODUCT_PATH}/getAllProducts`)
export const getProductDetails = (id) => axios.get(`${BASE_URL}/${PRODUCT_PATH}/${id}`)