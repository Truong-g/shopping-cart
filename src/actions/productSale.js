import { 
    FETCH_PRODUCTSALE_PENDING,
    FETCH_PRODUCTSALE_SUCCESS,
    FETCH_PRODUCTSALE_FAIL
 } from '../constants/productSale'

 export const loadSaleProduct = () => async dispatch => {
     try {
         dispatch({type: FETCH_PRODUCTSALE_PENDING})
         const url = 'http://localhost:81/web-banhang-tuantruong/public/api/product-sale?limit=8'
         const response = await fetch(url)
         const responseBody = await response.json()
         dispatch({
             type: FETCH_PRODUCTSALE_SUCCESS,
             data: responseBody.data
         })
     } catch (error) {
         dispatch({
             type: FETCH_PRODUCTSALE_FAIL,
             message: error
         })
     }
 }