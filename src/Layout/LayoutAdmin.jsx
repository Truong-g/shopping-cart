import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import AdminLogin from '../containers/Auth/AdminLogin'
import BackdropAdmin from '../containers/System/BackdropAdmin';
import Admin from './Admin';

function LayoutAdmin() {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isPending, setIsPending] = useState(true)
    const [isredirect, setRedirect] = useState(false)
    let navigate = useNavigate()

    useEffect(() => {
        if (!!localStorage.getItem('jwt')) {
            try {
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("jwt")
                    }
                }
                const url = 'http://localhost:81/web-banhang-tuantruong/public/api/profile'
                fetch(url, requestOptions)
                    .then(response => {
                        if (response.ok) {
                            return response.json()
                        }
                    })
                    .then(auth => {
                        if (auth.role == 'admin') {
                            setIsAdmin(true)
                            setIsPending(false)
                        }
                    })
                    .catch(error => {
                        setIsPending(false)
                        navigate("/admin/login")
                    })

            } catch (error) {
                setIsPending(false)
                navigate("/admin/login")
            }
        }
        else{
            setIsPending(false)
        }

        return () => {
            setIsPending(true)
        }

    }, [isredirect])
    return (
        <div>
            <Routes>
                {isPending ? (
                    <Route path="/*" element={<BackdropAdmin />} />
                ) : (
                    <Route path="/*" element={isAdmin ? <Admin /> : <Navigate to="/admin/login" />} />
                )}

                {isPending ? (
                    <Route path="/login" element={<BackdropAdmin />} />
                ) : (
                    <Route path="/login" element={isAdmin ? <Navigate to="/admin" /> : <AdminLogin setRedirect={setRedirect}/>} />
                )}
            </Routes>
        </div>
    )
}

export default LayoutAdmin
