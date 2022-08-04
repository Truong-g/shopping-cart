import {
    FETCH_BRAND_FAIL,
    FETCH_BRAND_PENDING,
    FETCH_ALLBRAND_SUCCESS,
    FETCH_POSTBRAND_SUCCESS,
    FETCH_SINGLEBRAND_SUCCESS,
    FETCH_PUTBRAND_SUCCESS,
    FETCH_DELETEBRAND_SUCCESS
} from '../constants/brandInit'

const fetchAllBrand = () => async (dispatch, getState) => {
    dispatch({
        type: FETCH_BRAND_PENDING
    })
    try {

        const url = 'http://localhost:81/web-banhang-tuantruong/public/api/brands'
        const response = await fetch(url)
        if (response.ok) {
            const responseBody = await response.json()
            if (!!responseBody.data) {
                dispatch({
                    type: FETCH_ALLBRAND_SUCCESS,
                    data: responseBody.data,
                    message: responseBody.message
                })
            }
            else {
                dispatch({
                    type: FETCH_BRAND_FAIL,
                    message: responseBody.message
                })
            }

        } else {
            dispatch({
                type: FETCH_BRAND_FAIL,
                message: response.message
            })
        }

    } catch (error) {
        dispatch({
            type: FETCH_BRAND_FAIL,
            message: error
        })
    }
}

const fetchPostBrand = (data) => async (dispatch, getState) => {
    dispatch({ type: FETCH_BRAND_PENDING })
    const requestOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const url = 'http://localhost:81/web-banhang-tuantruong/public/api/brands'
    try {
        const response = await fetch(url, requestOption)
        if (response.ok) {
            const responseBody = await response.json()
            if (responseBody.errCode == 0) {
                dispatch({
                    type: FETCH_POSTBRAND_SUCCESS,
                    message: responseBody.message
                })
            }
            else {
                dispatch({
                    type: FETCH_BRAND_FAIL,
                    message: responseBody.message
                })
            }
        } else {
            dispatch({
                type: FETCH_BRAND_FAIL,
                message: response.message
            })
        }
    } catch (error) {
        dispatch({
            type: FETCH_BRAND_FAIL,
            message: error
        })
    }
}


const fetchSingleBrand = (id) => async (dispatch, getState) => {
    dispatch({ type: FETCH_BRAND_PENDING })
    const url = `http://localhost:81/web-banhang-tuantruong/public/api/brands/${id}`
    try {
        const response = await fetch(url)
        if (response.ok) {
            const responseBody = await response.json()
            if (responseBody.errCode == 0) {
                dispatch({
                    type: FETCH_SINGLEBRAND_SUCCESS,
                    data: responseBody.data
                })
            }
            else {
                dispatch({
                    type: FETCH_BRAND_FAIL,
                    message: responseBody.message
                })
            }
        } else {
            dispatch({
                type: FETCH_BRAND_FAIL,
                message: response.message
            })
        }
    } catch (error) {
        dispatch({
            type: FETCH_BRAND_FAIL,
            message: error
        })
    }

}

const fetchPutBrand = (data, id, redirectPage) => async dispatch => {
    dispatch({ type: FETCH_BRAND_PENDING })
    const requestOption = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const url = `http://localhost:81/web-banhang-tuantruong/public/api/brands/${id}`
    try {
        const response = await fetch(url, requestOption)
        if (response.ok) {
            const responseBody = await response.json()
            if (responseBody.errCode == 0) {
                dispatch({
                    type: FETCH_PUTBRAND_SUCCESS,
                    message: responseBody.message
                })
                redirectPage("/admin/categories")
            }
            else {
                dispatch({
                    type: FETCH_BRAND_FAIL,
                    message: responseBody.message
                })
            }
        } else {
            dispatch({
                type: FETCH_BRAND_FAIL,
                message: response.message
            })
        }

    } catch (error) {
        dispatch({
            type: FETCH_BRAND_FAIL,
            message: error
        })
    }

}


const fetchDeleteBrand = (id, refreshBrand) => async dispatch => {
    dispatch({ type: FETCH_BRAND_PENDING })
    const requestOption = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    }
    const url = `http://localhost:81/web-banhang-tuantruong/public/api/brands/${id}`
    try {
        const response = await fetch(url, requestOption)
        if (response.ok) {
            const responseBody = await response.json()
            if (responseBody.errCode == 0) {
                dispatch({
                    type: FETCH_DELETEBRAND_SUCCESS,
                    message: responseBody.message
                })
                refreshBrand()
            }
            else {
                dispatch({
                    type: FETCH_BRAND_FAIL,
                    message: responseBody.message
                })
            }
        } else {
            dispatch({
                type: FETCH_BRAND_FAIL,
                message: response.message
            })
        }
    } catch (error) {
        dispatch({
            type: FETCH_BRAND_FAIL,
            message: error
        })
    }
}




export {
    fetchAllBrand,
    fetchPostBrand,
    fetchSingleBrand,
    fetchPutBrand,
    fetchDeleteBrand
}