import React, { useEffect } from 'react'
import clsx from 'clsx'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleDataUser, userIsLoginAction } from '../../../actions/userAction'



function UserHeader() {
    const isLogin = useSelector(state => state.user.isLogin)
    const user = useSelector(state => state.user.dataSingle)
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem("jwt") != null) {
            const action2 = getSingleDataUser(localStorage.getItem("jwt"))
            dispatch(action2)
        }
    }, [isLogin])

    const handleLogot = () => {
       
        const logoutRequest = async () => {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("jwt")

                    },
                };
                const response = await fetch(`http://localhost:81/web-banhang-tuantruong/public/api/logout`, requestOptions)
                if (response.ok) {
                    const responseBody = await response.json()
                    console.log(responseBody);
                }
                else {
                    throw new Error(response.status)
                }

            } catch (error) {
                console.log(error)
            }

        }
        logoutRequest()

        localStorage.removeItem("jwt")
        const action1 = userIsLoginAction(false)
        dispatch(action1)
    }

    const ShowGroup = () => {
        return (
            <>
                {isLogin ? (
                    <>
                        <div className={styles.text}>
                            <h4 className="fs-6 mb-0 ms-2">Xin chào {user && user.name}!</h4>
                        </div>
                        <div className={clsx("cssanimation moveFromTop", styles.group)}
                        >
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <button
                                        className={styles.link}
                                        onClick={handleLogot}
                                    >
                                        Đăng xuất
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.text}>
                            <h4 className="fs-6 mb-0 ms-2">Tài Khoản</h4>
                        </div>
                        <div className={clsx("cssanimation moveFromTop", styles.group)}
                        >
                            <ul className={styles.list}>
                                <li className={styles.item}><Link className={styles.link} to="dang-nhap">Đăng nhập</Link></li>
                                <li className={styles.item}><Link className={styles.link} to="dang-ky">Đăng ký</Link></li>
                            </ul>
                        </div>
                    </>
                )}


            </>
        )
    }

    return (
        <div className={clsx(styles.account, "d-flex justify-content-center align-items-center")}>
            <div className={styles.avatar}
            >
                <i className="fas fa-user"></i>
            </div>
            <ShowGroup />
        </div>
    )
}

export default UserHeader
