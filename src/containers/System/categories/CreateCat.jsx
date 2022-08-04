import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllCategory, fetchPostCategory } from '../../../actions/categoryAction'
import CreateCatForm from './components/CreateCatForm'

function CreateCat() {
    const dispatch = useDispatch()
    const isPending = useSelector(state => state.category.pending)
    const cartList = useSelector(state => state.category.data)
    

    useEffect(() => {
        getAllCategory()
    }, [])

    function getAllCategory() {
        dispatch(fetchAllCategory())
    }

    const handleSendRequest = (data) => {
        dispatch(fetchPostCategory(data, getAllCategory))
        console.log(data);
    }

    return (
        <div>
            <h3 className="fs-3 py-5">Tạo danh mục sản phẩm</h3>
            <CreateCatForm
            cartList={cartList}
            isPending={isPending}
            getAllCategory={getAllCategory}
            handleSendRequest={handleSendRequest}
            
            />
        </div>
    )
}

export default CreateCat
