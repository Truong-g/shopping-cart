import React from 'react'
import ProductItem from '../ProductItem'


function ProductList({ list }) {
    return (
        <div className='row'>
            {list.map(item => (
                <div key={item.id} className="col-md-3">
                    <ProductItem product={item} />
                </div>
            ))}
        </div>
    )
}

export default ProductList
