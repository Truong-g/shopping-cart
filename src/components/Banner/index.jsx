import React from 'react'

import Slider from "react-slick";
import images from '../../assets/images'
import styles from './banner.module.scss'

function Banner() {

    const { banner } = images
    const [bn1, bn2, bn3] = banner

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
                     height: "30px" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />
    }

    return (
        <div className="container">
            <Slider {...settings}>
                <div className={styles.slider}>
                    <img src={bn1} alt="" className={styles.img} />
                </div>
                <div className={styles.slider}>
                    <img src={bn2} alt="" className={styles.img} />
                </div>
                <div className={styles.slider}>
                    <img src={bn3} alt="" className={styles.img} />
                </div>
            </Slider>
        </div>
    )
}

export default Banner
