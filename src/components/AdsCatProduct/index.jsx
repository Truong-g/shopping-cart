import React from 'react'
import styles from './adscatproduct.module.scss'

function AdsCatProduct({ images }) {
    return (
        <div className={styles.ads}>
            <a href="" className={styles.link}>
                <img src={images} alt="ads" className={styles.img} />
            </a>
        </div>
    )
}

export default AdsCatProduct
