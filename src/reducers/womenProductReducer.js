import { 
    FETCH_WOMENPRODUCT_PENDING,
    FETCH_WOMENPRODUCT_SUCCESS,
    FETCH_WOMENPRODUCT_FAIL
 } from '../constants/womenProduct'

 const initialState = {
     pending: false,
     success: false,
     message: null,
     data: null
 }

 const womenProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_WOMENPRODUCT_PENDING:
            
            return {
                ...state,
                pending: true
            }
        
        case FETCH_WOMENPRODUCT_SUCCESS:
        
            return {
                ...state,
                pending: false,
                success: true,
                data: action.data
            }

        case FETCH_WOMENPRODUCT_FAIL:
        
        return {
            ...state,
            success: false,
            message: action.message
        };
    
        default:
            return state;
    }

 }

 export default womenProductReducer
