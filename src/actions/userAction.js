import {
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,
    FETCH_USER_ISOLOGIN,
    FETCH_USER_DATASINGLE,
    FETCH_ADMIN_ISOLOGIN
} from '../constants/user'

export const loadUserProduct = () => async dispatch => {
    try {
        dispatch({ type: FETCH_USER_PENDING })
        const url = 'http://localhost:81/web-banhang-tuantruong/public/api/profile'
        const response = await fetch(url)
        const responseBody = await response.json()
        dispatch({
            type: FETCH_USER_SUCCESS,
            data: responseBody.data
        })
    } catch (error) {
        dispatch({
            type: FETCH_USER_FAIL,
            message: error
        })
    }
}

export const userIsLoginAction = (payload) => {
    return {
        type: FETCH_USER_ISOLOGIN,
        payload: payload
    }
}

export const getSingleDataUser = ($jwt) => async dispatch => {
    try {
        dispatch({ type: FETCH_USER_PENDING })
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + $jwt
            }
        }
        const url = 'http://localhost:81/web-banhang-tuantruong/public/api/profile'
        const response = await fetch(url, requestOptions)
        const responseBody = await response.json()
        dispatch({
            type: FETCH_USER_DATASINGLE,
            data: responseBody
        })
        
    } catch (error) {
        dispatch({
            type: FETCH_USER_FAIL,
            message: error
        })
    }

    
}
export const adminIsLoginAction = (payload) => {
    return {
        type: FETCH_ADMIN_ISOLOGIN,
        payload: payload
    }
}