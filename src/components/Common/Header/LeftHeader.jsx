import React from 'react'
import clsx from 'clsx'
import styles from './header.module.scss' 
import images from '../../../assets/images'

function LeftHeader() {
    return (
        <div className={styles.logo}>
            <img src={images.logo} alt="logo" className={styles.img} />
            <h4 className={clsx("cssanimation", styles.title)}>B-SECONDHAND</h4>
        </div>
    )
}

export default LeftHeader
