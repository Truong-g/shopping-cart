import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllBrand } from '../../../actions/brandAction'

function BrandsManagement() {
    const brandsList = useSelector(state => state.brand.data)
    const isPending = useSelector(state => state.brand.pending)
    const isSuccess = useSelector(state => state.brand.success)
    const message = useSelector(state => state.brand.message)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllBrand()
    }, [])

    const getAllBrand = () => {
        dispatch(fetchAllBrand())
    }

    const handleDeleteBrand = (id) => {}
    return (
        <div className="container">
            <div className='py-3 mb-3'>
                <div className="row align-items-center">
                    <div className="col-6">
                        <h3 className='fs-3 m-0'>Quản lý Thương hiệu</h3>
                    </div>
                    <div className="col-6 text-end">
                        <Link
                            to="create"
                            className="btn btn-sm btn-primary"
                        >
                            Thêm mới thương hiệu
                        </Link>
                    </div>
                </div>
                <hr />
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Logo</th>
                            <th style={{ maxWidth: "100px" }}>Tên thương hiệu</th>
                            <th>Website</th>
                            <th>Tên</th>
                            <th>Số điện thoại</th>
                            <th>Địa chỉ</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isPending && (
                            <tr className='w-100'>
                                <td className='text-center w-100'>Loading...</td>
                            </tr>
                        )}
                        {!isPending && brandsList.map(brand => {
                            return (
                                <tr key={brand.id}>
                                    <td>{brand.id}</td>
                                    <td><img src={brand.logo} width="80px" height="80px" alt={brand.logo} /></td>
                                    <td style={{ maxWidth: "200px" }}>{brand.name}</td>
                                    <td>{brand.siteurl}</td>
                                    <td>{brand.fullname}</td>
                                    <td>{brand.phone}</td>
                                    <td>{brand.address}</td>
                                    <td className='text-center'>
                                        <Link
                                            to={`edit/${brand.id}`}
                                            className="btn btn-sm btn-info me-1"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </Link>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => { handleDeleteBrand(brand.id) }}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BrandsManagement
