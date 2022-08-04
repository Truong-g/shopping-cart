import {
    FETCH_BRAND_FAIL,
    FETCH_BRAND_PENDING,
    FETCH_ALLBRAND_SUCCESS,
    FETCH_POSTBRAND_SUCCESS,
    FETCH_SINGLEBRAND_SUCCESS,
    FETCH_PUTBRAND_SUCCESS,
    FETCH_DELETEBRAND_SUCCESS
} from '../constants/brandInit'

const intialState = {
    pending: false,
    success: false,
    message: null,
    data: [],
    dataSingle: {}
}

const brandReducers = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_BRAND_PENDING:
            return {
                ...state,
                pending: true,
                success: false,
                message: "Data is pending"
            }
        case FETCH_ALLBRAND_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                message: "success",
                data: action.data
            }

        case FETCH_BRAND_FAIL:
            return {
                ...state,
                pending: false,
                success: false,
                message: action.message
            }
        case FETCH_POSTBRAND_SUCCESS: 
        return {
            ...state,
            pending: false,
            success: true,
            message: action.message
        }

        case FETCH_PUTBRAND_SUCCESS: 
        return {
            ...state,
            pending: false,
            success: true,
            message: action.message,
            dataSingle: {  }
        }

        case FETCH_SINGLEBRAND_SUCCESS: 
        return {
            ...state,
            pending: false,
            success: true,
            message: "success",
            dataSingle: action.data
        }

        case FETCH_DELETEBRAND_SUCCESS:
        return {
            ...state,
            pending: false,
            success: true,
            message: action.message,
        }

        default:
            return state;
    }
}

export default brandReducers