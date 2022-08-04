import React from 'react'
import styles from './titleproductpart.module.scss'


function TitleProductPart({title}) {
    return (
        <h1 className={styles.title}>{title}</h1>
    )
}

export default TitleProductPart
