import { 
    FETCH_WOMENPRODUCT_PENDING,
    FETCH_WOMENPRODUCT_SUCCESS,
    FETCH_WOMENPRODUCT_FAIL
 } from '../constants/womenProduct'

 export const loadWomenProduct = () => async dispatch => {
     try {
         dispatch({type: FETCH_WOMENPRODUCT_PENDING})
         const url = 'http://localhost:81/web-banhang-tuantruong/public/api/product-women?limit=8'
         const response = await fetch(url)
         const responseBody = await response.json()
         dispatch({
             type: FETCH_WOMENPRODUCT_SUCCESS,
             data: responseBody
         })
     } catch (error) {
         dispatch({
             type: FETCH_WOMENPRODUCT_FAIL,
             message: error
         })
     }
 }