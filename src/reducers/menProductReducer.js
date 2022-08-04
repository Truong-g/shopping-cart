import { 
    FETCH_MENPRODUCT_PENDING,
    FETCH_MENPRODUCT_SUCCESS,
    FETCH_MENPRODUCT_FAIL
 } from '../constants/menProduct'

 const initialState = {
     pending: false,
     success: false,
     message: null,
     data: null
 }

 const menProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_MENPRODUCT_PENDING:
            
            return {
                ...state,
                pending: true
            }
        
        case FETCH_MENPRODUCT_SUCCESS:
        
            return {
                ...state,
                pending: false,
                success: true,
                data: action.data
            }

        case FETCH_MENPRODUCT_FAIL:
        
        return {
            ...state,
            success: false,
            message: action.message
        };
    
        default:
            return state;
    }

 }

 export default menProductReducer
