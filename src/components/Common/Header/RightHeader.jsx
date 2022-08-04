import React, { useEffect, useState } from 'react'
import styles from './header.module.scss'
import UserHeader from './UserHeader';
import CartHeader from './CartHeader';


function RightHeader() {

    
    return (
        <div className={styles.navbar}>
            <UserHeader />
            <CartHeader />
            
        </div>
    )
}

export default RightHeader
