import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchAllCategory, fetchPutCategory, fetchSingleCategory } from '../../../actions/categoryAction'
import BackdropAdmin from '../BackdropAdmin'
import CreateCatForm from './components/CreateCatForm'

function EditCat() {
    const singleCat = useSelector(state => state.category.dataSingle)
    const isPending = useSelector(state => state.category.pending)
    const cartList = useSelector(state => state.category.data)
    const navigate = useNavigate()

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        if (!!id) {
            dispatch(fetchSingleCategory(id))
        }
        getAllCategory()
    }, [id])

    function getAllCategory() {
        dispatch(fetchAllCategory())
    }

    const handleSendRequest = (data) => {
        dispatch(fetchPutCategory(data, id, navigate))
    }
    return (
        <>
            {isPending && <BackdropAdmin />}
            {Object.keys(singleCat).length > 0 && (
                <CreateCatForm
                    cartList={cartList}
                    isPending={isPending}
                    catSingle={singleCat}
                    handleSendRequest={handleSendRequest}
                />
            )}

        </>

    )
}

export default EditCat
