import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostBrand } from '../../../actions/brandAction'
import BrandForm from './components/BrandForm'

function CreateBrand() {
    const isPending = useSelector(state => state.brand.pending)
    const dispatch = useDispatch()


    const handleSendRequest = (data) => {
        dispatch(fetchPostBrand(data))
    }

    return (
        <div>
            <h3 className="fs-3 py-5">Thêm thương hiệu sản phẩm</h3>
            <BrandForm
                isPending={isPending}
                handleSendRequest={handleSendRequest}
            />
        </div>
    )
}

export default CreateBrand
