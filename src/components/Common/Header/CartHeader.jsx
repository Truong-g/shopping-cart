import React from 'react'
import clsx from 'clsx'
import styles from './header.module.scss'
import BoxCartList from './BoxCartList'

function CartHeader() {
    return (
        <div className={clsx(styles.cart, "d-flex justify-content-end align-items-center")}>
                <div className={styles.icon}>
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div className={styles.text}>
                    <h4 className="fs-6 mb-0 ms-2">Giỏ Hàng</h4>
                </div>
                <BoxCartList />
            </div>
    )
}

export default CartHeader
