import React from 'react'
import clsx from 'clsx'
import styles from './header.module.scss' 

function CenterHeader() {
    return (
        <div className={styles.search}>
            <form className={styles.form} action="">
                <input type="search" className={styles.input} placeholder="Tìm kiếm" required />
                <button type="submit" className={clsx(styles.btn, "btn-grad")}><i className="fas fa-search"></i></button>
            </form>
        </div>
    )
}

export default CenterHeader
