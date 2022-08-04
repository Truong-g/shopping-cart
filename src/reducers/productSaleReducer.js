import { 
    FETCH_PRODUCTSALE_PENDING,
    FETCH_PRODUCTSALE_SUCCESS,
    FETCH_PRODUCTSALE_FAIL
 } from '../constants/productSale'

 const initialState = {
     pending: false,
     success: false,
     message: null,
     data: null
 }

 const productSaleReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_PRODUCTSALE_PENDING:
            
            return {
                ...state,
                pending: true
            }
        
        case FETCH_PRODUCTSALE_SUCCESS:
        
            return {
                ...state,
                pending: false,
                success: true,
                data: action.data
            }

        case FETCH_PRODUCTSALE_FAIL:
        
        return {
            ...state,
            success: false,
            message: action.message
        };
    
        default:
            return state;
    }

 }

 export default productSaleReducer
