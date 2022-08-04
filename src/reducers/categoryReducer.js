import {
    FETCH_CATEGORY_FAIL,
    FETCH_CATEGORY_PENDING,
    FETCH_CATEGORY_SUCCESS,
    FETCH_POSTCATEGORY_SUCCESS,
    FETCH_SINGLECAT_SUCCESS,
    FETCH_PUTCATEGORY_SUCCESS,
    FETCH_DELETECATEGORY_SUCCESS
} from '../constants/categoryInit'

const intialState = {
    pending: false,
    success: false,
    message: null,
    data: [],
    dataSingle: {}
}

const categoryReducers = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_PENDING:
            return {
                ...state,
                pending: true,
                success: false,
                message: "Data is pending"
            }
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                message: "success",
                data: action.data
            }

        case FETCH_CATEGORY_FAIL:
            return {
                ...state,
                pending: false,
                success: false,
                message: action.message
            }
        case FETCH_POSTCATEGORY_SUCCESS: 
        return {
            ...state,
            pending: false,
            success: true,
            message: action.message
        }

        case FETCH_PUTCATEGORY_SUCCESS: 
        return {
            ...state,
            pending: false,
            success: true,
            message: action.message,
            dataSingle: {  }
        }

        case FETCH_SINGLECAT_SUCCESS: 
        return {
            ...state,
            pending: false,
            success: true,
            message: "success",
            dataSingle: action.data
        }

        case FETCH_DELETECATEGORY_SUCCESS:
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

export default categoryReducers