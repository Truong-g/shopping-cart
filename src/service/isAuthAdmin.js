export const isAuthAdmin = async () => {
    if (localStorage.getItem("jwt")) {
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                }
            }
            const url = 'http://localhost:81/web-banhang-tuantruong/public/api/profile'
            const response = await fetch(url, requestOptions)
            if (response.ok) {
                const responseBody = await response.json()
                if (responseBody.role == "admin") {
                    console.log("here");
                    return true
                } else {
                    return false
                }
            } else {
                throw new Error("Fail")
            }

        } catch (error) {

        }
    }
    else {
        return false
    }
}