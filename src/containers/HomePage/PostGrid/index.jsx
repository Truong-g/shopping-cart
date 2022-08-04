import React from 'react'
import images from '../../../assets/images'
import TitleProductPart from '../../../components/TitleProductPart'
import styles from './postgrid.module.scss'


function PostGrid({title}) {
    return (
        <div className='container'>
            <TitleProductPart title={title}/>
            <div className="row mt-2">
                <div className="col-md-4">
                    <div className={styles.post}>
                        <img src={images.post} alt="" className={styles.img} />
                        <div className={styles.content}>
                            <h3 className={styles.title}>Bài viết 1</h3>
                            <span className={styles.topic}>Tin tức</span>
                            <span className="time fs-6">1/1/2022</span>
                            <p className="detail fs-6 mt-3">Chi tiết bài viết</p>
                            <a href="" className="readmore">Đọc tiếp</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className={styles.post}>
                        <img src={images.post} alt="" className={styles.img} />
                        <div className={styles.content}>
                            <h3 className={styles.title}>Bài viết 1</h3>
                            <span className={styles.topic}>Tin tức</span>
                            <span className="time fs-6">1/1/2022</span>
                            <p className="detail fs-6 mt-3">Chi tiết bài viết</p>
                            <a href="" className="readmore">Đọc tiếp</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className={styles.post}>
                        <img src={images.post} alt="" className={styles.img} />
                        <div className={styles.content}>
                            <h3 className={styles.title}>Bài viết 1</h3>
                            <span className={styles.topic}>Tin tức</span>
                            <span className="time fs-6">1/1/2022</span>
                            <p className="detail fs-6 mt-3">Chi tiết bài viết</p>
                            <a href="" className="readmore">Đọc tiếp</a>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default PostGrid
