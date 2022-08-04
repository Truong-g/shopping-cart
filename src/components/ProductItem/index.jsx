import clsx from 'clsx';
import React from 'react'
import images from '../../assets/images'
import styles from './productitem.module.scss'


const { product_grid,
    product_image,
    image_link,
    img,
    product_list,
    item,
    rating,
    link,
    product_content,
    product_category,
    title,
    price

} = styles

function ProductItem({product}) {
    
    return (
        <div className={product_grid}>
            <div className={product_image}>
                <a href="#" className={image_link}>
                    <img className={img} src={product.img} alt={product.img} />
                </a>
                <ul className={product_list}>
                    <li className={item}>
                        <a href="#" className={link} data-tip="Xem chi tiết">
                            <i className="far fa-eye"></i>
                        </a>
                    </li>
                    <li className={item}>
                        <a href="#" className={link} data-tip="Thêm vào giỏ">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                    <li className={item}>
                        <a href="#" className={link} data-tip="Yêu thích">
                        <i className="far fa-heart"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={product_content}>
                <span className={product_category}>
                    <a className={link} href="">Women's</a>
                    </span>
                <ul className={rating}>
                    <li className={clsx("far fa-star", item)}></li>
                    <li className={clsx("far fa-star", item)}></li>
                    <li className={clsx("far fa-star", item)}></li>
                    <li className={clsx("far fa-star", item)}></li>
                    <li className={clsx("far fa-star", item)}></li>
                </ul>
                <h3 className={title}><a className={link} href="#">{product.name}</a></h3>
                <div className={price}>{product.pricesale}đ</div>
            </div>
        </div>
    )
}

export default ProductItem
