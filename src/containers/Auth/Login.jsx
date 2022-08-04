import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSingleDataUser, userIsLoginAction } from '../../actions/userAction';

function Login() {

    const [value, setValue] = useState({
        email: "",
        password: "",
    })
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const handleValueLogin = (e) => {
        setValue(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleLogin = () => {
        const loginRequest = async () => {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(value)
                };
                const response = await fetch(`http://localhost:81/web-banhang-tuantruong/public/api/login`, requestOptions)
                if (response.ok) {
                    const responseBody = await response.json()
                    if (responseBody.access_token) {
                        const token = responseBody.access_token
                        localStorage.setItem("jwt", token)
                        const action = userIsLoginAction(true)
                        dispatch(action)
                    }
                    navigate("/")
                }
                else {
                    throw new Error(response.status)
                }


            } catch (error) {
                console.log(error)
            }
        }

        loginRequest()
    }

    return (
        <div>
            <section>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong">
                                <div className="card-body p-5 text-center" style={{ backgroundColor: "#508bfc" }}>

                                    <h3 className="mb-5 text-white">Đăng nhập</h3>

                                    <div className="form-outline mb-4">
                                        <input type="email"
                                            value={value.email}
                                            name="email"
                                            id="typeEmailX-2"
                                            className="form-control form-control-lg"
                                            onChange={(e) => { handleValueLogin(e) }}
                                        />
                                        <label className="form-label text-white" htmlFor="typeEmailX-2">Email</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password"
                                            value={value.password}
                                            name="password"
                                            id="typePasswordX-2"
                                            className="form-control form-control-lg"
                                            onChange={(e) => { handleValueLogin(e) }}

                                        />
                                        <label className="form-label text-white" htmlFor="typePasswordX-2">Mật khẩu</label>
                                    </div>

                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            id="form1Example3"
                                        />
                                        <label className="form-check-label text-white" htmlFor="form1Example3"> Nhớ mật khẩu </label>
                                    </div>

                                    <button
                                        onClick={() => { handleLogin() }}
                                        className="btn btn-primary btn-lg btn-block"
                                        type="submit">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
