import {
    FETCH_CATEGORY_FAIL,
    FETCH_CATEGORY_PENDING,
    FETCH_CATEGORY_SUCCESS,
    FETCH_POSTCATEGORY_SUCCESS,
    FETCH_SINGLECAT_SUCCESS,
    FETCH_PUTCATEGORY_SUCCESS,
    FETCH_DELETECATEGORY_SUCCESS
} from '../constants/categoryInit'

const fetchAllCategory = () => async (dispatch, getState) => {
    dispatch({
        type: FETCH_CATEGORY_PENDING
    })
    try {

        const url = 'http://localhost:81/web-banhang-tuantruong/public/api/category'
        const response = await fetch(url)
        if (response.ok) {
            const responseBody = await response.json()
            if (!!responseBody.data) {
                dispatch({
                    type: FETCH_CATEGORY_SUCCESS,
                    data: responseBody.data,
                    message: responseBody.message
                })
            }
            else {
                dispatch({
                    type: FETCH_CATEGORY_FAIL,
                    message: responseBody.message
                })
            }

        } else {
            dispatch({
                type: FETCH_CATEGORY_FAIL,
                message: response.message
            })
        }

    } catch (error) {
        dispatch({
            type: FETCH_CATEGORY_FAIL,
            message: error
        })
    }
}

const fetchPostCategory = (data, callback) => async (dispatch, getState) => {
    dispatch({ type: FETCH_CATEGORY_PENDING })
    const requestOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const url = 'http://localhost:81/web-banhang-tuantruong/public/api/category'
    try {
        const response = await fetch(url, requestOption)
        if (response.ok) {
            const responseBody = await response.json()
            if (responseBody.errCode == 0) {
                dispatch({
                    type: FETCH_POSTCATEGORY_SUCCESS,
                    message: responseBody.message
                })
                callback()
            }
            else {
                dispatch({
                    type: FETCH_CATEGORY_FAIL,
                    message: responseBody.message
                })
            }
        } else {
            dispatch({
                type: FETCH_CATEGORY_FAIL,
                message: response.message
            })
        }
    } catch (error) {
        dispatch({
            type: FETCH_CATEGORY_FAIL,
            message: error
        })
    }
}


const fetchSingleCategory = (id) => async (dispatch, getState) => {
    dispatch({ type: FETCH_CATEGORY_PENDING })
    const url = `http://localhost:81/web-banhang-tuantruong/public/api/category/${id}`
    try {
        const response = await fetch(url)
        if (response.ok) {
            const responseBody = await response.json()
            if (responseBody.errCode == 0) {
                dispatch({
                    type: FETCH_SINGLECAT_SUCCESS,
                    data: responseBody.data
                })
            }
            else {
                dispatch({
                    type: FETCH_CATEGORY_FAIL,
                    message: responseBody.message
                })
            }
        } else {
            dispatch({
                type: FETCH_CATEGORY_FAIL,
                message: response.message
            })
        }
    } catch (error) {
        dispatch({
            type: FETCH_CATEGORY_FAIL,
            message: error
        })
    }

}

const fetchPutCategory = (data, id, redirectPage) => async dispatch => {
    dispatch({ type: FETCH_CATEGORY_PENDING })
    const requestOption = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const url = `http://localhost:81/web-banhang-tuantruong/public/api/category/${id}`
    try {
        const response = await fetch(url, requestOption)
        if (response.ok) {
            const responseBody = await response.json()
            if (responseBody.errCode == 0) {
                dispatch({
                    type: FETCH_PUTCATEGORY_SUCCESS,
                    message: responseBody.message
                })
                redirectPage("/admin/categories")
            }
            else {
                dispatch({
                    type: FETCH_CATEGORY_FAIL,
                    message: responseBody.message
                })
            }
        } else {
            dispatch({
                type: FETCH_CATEGORY_FAIL,
                message: response.message
            })
        }

    } catch (error) {
        dispatch({
            type: FETCH_CATEGORY_FAIL,
            message: error
        })
    }

}


const fetchDeleteCategory = (id, refreshCategory) => async dispatch => {
    dispatch({ type: FETCH_CATEGORY_PENDING })
    const requestOption = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    }
    const url = `http://localhost:81/web-banhang-tuantruong/public/api/category/${id}`
    try {
        const response = await fetch(url, requestOption)
        if (response.ok) {
            const responseBody = await response.json()
            if (responseBody.errCode == 0) {
                dispatch({
                    type: FETCH_DELETECATEGORY_SUCCESS,
                    message: responseBody.message
                })
                refreshCategory()
            }
            else {
                dispatch({
                    type: FETCH_CATEGORY_FAIL,
                    message: responseBody.message
                })
            }
        } else {
            dispatch({
                type: FETCH_CATEGORY_FAIL,
                message: response.message
            })
        }
    } catch (error) {
        dispatch({
            type: FETCH_CATEGORY_FAIL,
            message: error
        })
    }
}




export {
    fetchAllCategory,
    fetchPostCategory,
    fetchSingleCategory,
    fetchPutCategory,
    fetchDeleteCategory
}