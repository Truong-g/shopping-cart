import clsx from 'clsx'
import React from 'react'
import CategoryList from './CategoryList'
import Menu from './Menu'
import styles from './navbar.module.scss'

function Navbar() {
    return (
        <div className="container mb-2">
            <div className="row align-items-center">
                <div className={styles.category}>
                    <i className={clsx(styles.icon, "fas fa-bars")}></i>
                    <span className={styles.text}>Danh mục sản phẩm</span>
                    <CategoryList />
                </div>
                <Menu />
            </div>
        </div>

    )
}

export default Navbar
