const getAllCategoryApi = async () => {
    try {
        const responseBody = await fetch("http://localhost:81/web-banhang-tuantruong/public/api/category")

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


export { getAllCategoryApi }