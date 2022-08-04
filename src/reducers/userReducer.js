import {
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,
    FETCH_USER_ISOLOGIN,
    FETCH_ADMIN_ISOLOGIN,
    FETCH_USER_DATASINGLE,
} from '../constants/user'

const initialState = {
    pending: false,
    success: false,
    message: null,
    data: [],
    isLogin: false,
    isAdminLogin: false,
    dataSingle: null
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_USER_PENDING:

            return {
                ...state,
                pending: true
            }

        case FETCH_USER_SUCCESS:

            return {
                ...state,
                pending: false,
                success: true,
                data: action.data
            }

        case FETCH_USER_FAIL:

            return {
                ...state,
                success: false,
                message: action.message
            };

        case FETCH_USER_ISOLOGIN:
            return {
                ...state,
                isLogin: action.payload
            }
        case FETCH_USER_DATASINGLE:
            return {
                ...state,
                dataSingle: action.data,
                isLogin: true,
                isAdminLogin: false
            }
        case FETCH_ADMIN_ISOLOGIN:
            return {
                ...state,
                isAdminLogin: action.payload
            }
        default:
            return state;
    }

}

export default userReducer
