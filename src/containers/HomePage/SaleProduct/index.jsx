import React, {useEffect} from 'react'
import ProductSlick from '../../../components/ProductSlick'
import TitleProductPart from '../../../components/TitleProductPart'
import { useSelector, useDispatch } from 'react-redux'
import { loadSaleProduct } from '../../../actions/productSale'

function SaleProduct() {
    const listProducts = useSelector(state => state.productSale.data)
    const isPending = useSelector(state => state.productSale.pending)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadSaleProduct())
    }, [])
    return (
        <div className='container my-5'>
            <TitleProductPart title="Săn sale mỗi ngày" />
            {isPending ? "" : <ProductSlick listProducts={listProducts ? listProducts : []} />}
        </div>
    )
}

export default SaleProduct
