import { 
    FETCH_MENPRODUCT_PENDING,
    FETCH_MENPRODUCT_SUCCESS,
    FETCH_MENPRODUCT_FAIL
 } from '../constants/menProduct'

 export const loadMenProduct = () => async dispatch => {
     try {
         dispatch({type: FETCH_MENPRODUCT_PENDING})
         const url = 'http://localhost:81/web-banhang-tuantruong/public/api/product-men?limit=8'
         const response = await fetch(url)
         const responseBody = await response.json()
         dispatch({
             type: FETCH_MENPRODUCT_SUCCESS,
             data: responseBody
         })
     } catch (error) {
         dispatch({
             type: FETCH_MENPRODUCT_FAIL,
             message: error
         })
     }
 }