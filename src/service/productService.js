const getAllProductsApi = async (id = null) => {
    let responseBody
    try {
        if (id == null) {
            responseBody = await fetch("http://localhost:81/web-banhang-tuantruong/public/api/products")
        }
        else {
            responseBody = await fetch(`http://localhost:81/web-banhang-tuantruong/public/api/products/${id}`)
        }

        const data = await responseBody.json()

        if (data.errCode != 1) {
            return data.data
        }
        else {
            return data.message
        }
    } catch (error) {
        return error
    }

}

const postProductsApi = async (data, callBack) => {
    try {
        const requestOptions = {
            method: 'POST',
            body: data
        };
        const response = await fetch('http://localhost:81/web-banhang-tuantruong/public/api/products', requestOptions)
        const responseBody = await response.json()
        if (responseBody && responseBody.errCode == 0) {
            callBack()
            return responseBody.message
        } else {
            return responseBody.message
        }
    } catch (error) {
        return error
    }
}


const deleteProductApi = async (id, callBack) => {
    try {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: null
        };
        const response = await fetch(`http://localhost:81/web-banhang-tuantruong/public/api/products/${id}`, requestOptions)
        const responseBody = await response.json()
        if (responseBody && responseBody.errCode == 0) {
            callBack()
            return responseBody.message
        } else {
            return responseBody.message
        }
    } catch (error) {
        return error
    }
}

const putProductsApi = async (data, id, callBack) => {
    // var object = {};
    // data.forEach((value, key) => object[key] = value);
    // var json = JSON.stringify(object);
    // console.log(json);
    try {
        const requestOptions = {
            method: 'POST',
            body: data
        };
        const response = await fetch(`http://localhost:81/web-banhang-tuantruong/public/api/products/${id}`, requestOptions)
        const responseBody = await response.json()
        if (responseBody && responseBody.errCode == 0) {
            callBack()
            return responseBody.message
        } else {
            return responseBody.message
        }
    } catch (error) {
        return error
    }
}


export { getAllProductsApi, postProductsApi, deleteProductApi, putProductsApi }