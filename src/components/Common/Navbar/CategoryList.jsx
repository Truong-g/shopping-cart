import React from 'react'
import styles from './navbar.module.scss'

function CategoryList() {
    return (
        <div className={styles.box}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <a href="" className={styles.link}>Áo nam hàn quắc</a>
                </li>
                <li className={styles.item}>
                    <a href="" className={styles.link}>Áo nam hàn quắc</a>
                </li>
                <li className={styles.item}>
                    <a href="" className={styles.link}>Áo nam hàn quắc</a>
                </li>
                <li className={styles.item}>
                    <a href="" className={styles.link}>Áo nam hàn quắc</a>
                </li>
            </ul>
        </div>
    )
}

export default CategoryList
