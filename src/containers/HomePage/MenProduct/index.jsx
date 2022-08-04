import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadMenProduct } from '../../../actions/menProduct'
import AdsCatProduct from '../../../components/AdsCatProduct'
import ProductList from '../../../components/ProductList'
import TitleProductPart from '../../../components/TitleProductPart'

function MenProduct({images, title}) {

    const listProducts = useSelector(state => state.menProduct.data)
    const isPending = useSelector(state => state.menProduct.pending)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadMenProduct())
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

export default MenProduct
