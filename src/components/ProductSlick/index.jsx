import React from 'react'
import ProductItem from '../ProductItem'
import Slider from "react-slick";
import styles from './productslick.module.scss'


function ProductSlick({ listProducts }) {

    const CustomArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    zIndex: "2",
                    background: "blue",
                    width: "30px",
                    height: "30px"
                }}
                onClick={onClick}
            />
        );
    }

    let settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />
    }


    return (
        <div>
            <Slider {...settings}>

                {listProducts.map((item, index) => {
                    return (
                        <ProductItem
                            key={index}
                            product={item}
                        />
                    )

                })}
            </Slider>
        </div>

    )
}
export default ProductSlick
