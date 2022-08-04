import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userIsLoginAction } from '../../actions/userAction'
import './login.scss'

function AdminLogin({ setRedirect }) {

    const [value, setValue] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState({
        email: "",
        password: ""
    })
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
        try {
            const requestOptions = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(value)
            };
            fetch(`http://localhost:81/web-banhang-tuantruong/public/api/login`, requestOptions)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        const setErrText = async () => {
                            const text = await response.json()
                            setError({
                                ...error,
                                email : text.email[0],
                                password : text.password[0]
                            })
                        }
                        setErrText()
                    }

                })
                .then(auth => {
                    localStorage.setItem("jwt", auth.access_token)
                    setRedirect(true)
                    navigate('/admin')
                })
                .catch(err => console.log(err))


        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="form-admin">
                <form className=' form'>
                    <h3 className="fs-3 fw-bolder text-center pb-2">ĐĂNG NHẬP HỆ THỐNG</h3>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">EmaiL</label>
                        <input type="email"
                            name='email'
                            className="form-control"
                            id="exampleInputEmail1"
                            value={value.email}
                            aria-describedby="emailHelp"
                            onChange={(e) => { handleValueLogin(e) }}

                        />
                        <span className="text-danger">{error.email}</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mật khẩu</label>
                        <input
                            name='password'
                            value={value.password}
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e) => { handleValueLogin(e) }}

                        />
                        <span className="text-danger">{error.email}</span>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check</label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => {
                            e.preventDefault()
                            handleLogin()
                        }}
                    >
                        Đăng nhập
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin
