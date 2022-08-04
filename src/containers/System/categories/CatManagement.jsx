import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllCategory, fetchDeleteCategory } from '../../../actions/categoryAction'

function CatManagement() {
    const catList = useSelector(state => state.category.data)
    const isPending = useSelector(state => state.category.pending)
    const isSuccess = useSelector(state => state.category.success)
    const message = useSelector(state => state.category.message)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllCategory()
    }, [])

    const getAllCategory = () => {
        dispatch(fetchAllCategory())
    }

    const convertParentIdToName = (parentId) => {
        if (catList.length <= 0) return ""
        let result = ''
        catList.forEach(child => {
            if (parentId === child.id) {
                result = child.name
            }
        })
        return result
    }

    const handleDeleteCategory = (id) => {
        dispatch(fetchDeleteCategory(id, getAllCategory))
    }

    return (
        <div className="container">
            <div className='py-3 mb-3'>
                <div className="row align-items-center">
                    <div className="col-6">
                        <h3 className='fs-3 m-0'>Quản lý danh mục</h3>
                    </div>
                    <div className="col-6 text-end">
                        <Link
                            to="create"
                            className="btn btn-sm btn-primary"
                        >
                            Thêm mới danh mục
                        </Link>
                    </div>
                </div>
                <hr />
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th style={{ maxWidth: "200px" }}>Tên danh mục</th>
                            <th>Danh mục cha</th>
                            <th>Ngày tạo</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isPending && (
                            <tr>
                                <td className='text-center w-100'>Loading...</td>
                            </tr>
                        )}
                        {!isPending && catList.map(cat => {
                            return (
                                <tr key={cat.id}>
                                    <td>{cat.id}</td>
                                    <td style={{ maxWidth: "200px" }}>{cat.name}</td>
                                    <td>{!!convertParentIdToName(cat.parentid) ? convertParentIdToName(cat.parentid) : "Danh mục cha"}</td>
                                    <td>{cat.created_at}</td>
                                    <td className='text-center'>
                                        <Link
                                            to={`edit/${cat.id}`}
                                            className="btn btn-sm btn-info me-1"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </Link>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => { handleDeleteCategory(cat.id) }}
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

export default CatManagement
