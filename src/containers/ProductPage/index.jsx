import React, { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'
import TitleProductPart from '../../components/TitleProductPart'
import ProductsFilter from './ProductsFilter'

function ProductPage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch('http://localhost:81/web-banhang-tuantruong/public/api/products')
                const data = await response.json()
                setProducts(data)
            } catch ({err}) {
                console.log(err);
            }
            
        }
        getProducts()
     
    }, [])


    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col-md-3">
                    <ProductsFilter title="Lọc theo giá" />
                    <ProductsFilter title="Lọc theo brand" />

                </div>
                <div className="col-md-9">
                    <section>
                        <div className="mb-3">
                            <TitleProductPart title="Tất cả bài sản phẩm" />
                        </div>
                        <div>
                            <ProductList list={products} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
