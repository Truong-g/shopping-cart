import React from 'react'
import BoxCartItem from './BoxCartItem'
import styles from './header.module.scss'

function BoxCartList() {
     
    // thêm state

    return (
        <div className={styles.box}>
            <ul className={styles.list}>
                <BoxCartItem />
            </ul>
        </div>
    )
}

export default BoxCartList
