import { 
    FETCH_CHILDPRODUCT_PENDING,
    FETCH_CHILDPRODUCT_SUCCESS,
    FETCH_CHILDPRODUCT_FAIL
 } from '../constants/childProduct'

 const initialState = {
     pending: false,
     success: false,
     message: null,
     data: null
 }

 const childProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_CHILDPRODUCT_PENDING:
            
            return {
                ...state,
                pending: true
            }
        
        case FETCH_CHILDPRODUCT_SUCCESS:
        
            return {
                ...state,
                pending: false,
                success: true,
                data: action.data
            }

        case FETCH_CHILDPRODUCT_FAIL:
        
        return {
            ...state,
            success: false,
            message: action.message
        };
    
        default:
            return state;
    }

 }

 export default childProductReducer
