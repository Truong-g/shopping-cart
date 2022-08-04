import clsx from 'clsx'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.scss'


function Menu() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to="/"
                        className={({isActive}) => (
                            clsx(styles.link, isActive ? { [styles.active]: true } : "")
                        )}
                    >Trang chủ</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/san-pham"
                        className={({isActive}) => (
                            clsx(styles.link, isActive ? { [styles.active]: true } : "")
                        )}
                    >Sản phẩm</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/lien-he"
                        className={({isActive}) => (
                            clsx(styles.link, isActive ? { [styles.active]: true } : "")
                        )}
                    >Liên hệ</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/gioi-thieu"
                        className={({isActive}) => (
                            clsx(styles.link, isActive ? { [styles.active]: true } : "")
                        )}
                    >Giới thiệu</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink end to="/bai-viet"
                        className={({isActive}) => (
                            clsx(styles.link, isActive ? { [styles.active]: true } : "")
                        )}
                    >Bài viết</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Menu
