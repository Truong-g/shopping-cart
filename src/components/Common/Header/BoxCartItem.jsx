import React from 'react'
import images from '../../../assets/images'
import { Col, Row } from 'reactstrap'
import styles from './header.module.scss'

function BoxCartItem() {
    return (
        <li className={styles.item}>
            <Row >
                <Col md="3">
                    <div>
                        <img src={images.product} alt="pd1" className={styles.img} />
                    </div>
                </Col>
                <Col md="6">
                    <div>
                        <h4 className={styles.name}><a href="">{'Đồng hồ thời trang pháp 2021'.substring(0, 15)}...</a></h4>
                        <div className={styles.quantity}>
                            <button className={styles.btn}>-</button>
                            <input type="text" defaultValue="1" className={styles.input} />
                            <button className={styles.btn}>+</button>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className={styles.price}>
                        <span className={styles.value}>300.000đ</span>
                    </div>
                </Col>
            </Row>
        </li>
    )
}

export default BoxCartItem
