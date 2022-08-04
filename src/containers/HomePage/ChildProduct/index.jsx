import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadChildProduct } from '../../../actions/childProduct'
import AdsCatProduct from '../../../components/AdsCatProduct'
import ProductList from '../../../components/ProductList'
import TitleProductPart from '../../../components/TitleProductPart'

function ChildProduct({images, title, productList}) {

    const listProducts = useSelector(state => state.childProduct.data)
    const isPending = useSelector(state => state.childProduct.pending)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadChildProduct())
    }, [])


    return (
        <div className='container mb-5'>
            <TitleProductPart title={title} />
            <div className="row">
                <div className="col-md-3">
                    <AdsCatProduct images={images} />
                </div>
                <div className="col-md-9">
                    {isPending ? "" : <ProductList list={listProducts ? listProducts : []} />}
                </div>
            </div>
        </div>
    )
}

export default ChildProduct
