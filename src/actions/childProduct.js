import { 
    FETCH_CHILDPRODUCT_PENDING,
    FETCH_CHILDPRODUCT_SUCCESS,
    FETCH_CHILDPRODUCT_FAIL
 } from '../constants/childProduct'

 export const loadChildProduct = () => async dispatch => {
     try {
         dispatch({type: FETCH_CHILDPRODUCT_PENDING})
         const url = 'http://localhost:81/web-banhang-tuantruong/public/api/product-child?limit=8'
         const response = await fetch(url)
         const responseBody = await response.json()
         dispatch({
             type: FETCH_CHILDPRODUCT_SUCCESS,
             data: responseBody
         })
     } catch (error) {
         dispatch({
             type: FETCH_CHILDPRODUCT_FAIL,
             message: error
         })
     }
 }