import React, { useEffect, useState } from 'react'
import { getAllProductsApi, postProductsApi, deleteProductApi, putProductsApi } from '../../service/productService';
import { getAllCategoryApi } from '../../service/categoryService';
import ModalEditProduct from './ModalEditProduct';
import ModalProduct from './ModalProduct';
import './product.scss'
import { getAllBrandApi } from '../../service/brandService';



function ProductManagement() {
    const [productList, setProductList] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [productItem, setProductItem] = useState()
    const [category, setCategory] = useState([])
    const [brands, setBrands] = useState([])
    const [postitionEditModal, setPostitionEditModal] = useState()


    useEffect(() => {
        getProuductList()
        getCategoryList()
        getBrandList()

    }, [])
    // console.log("re-render");


    //Lấy danh mục
    const getCategoryList = async () => {
        const categories = await getAllCategoryApi()
        setCategory(categories)
    }

    //Lấy thương hiệu
    const getBrandList = async () => {
        const brand = await getAllBrandApi()
        setBrands(brand)
    }


    // lấy sản phẩm
    const getProuductList = async () => {
        const data = await getAllProductsApi()
        setProductList(data)
    }

    const handleShowModalProduct = () => {
        setIsOpenModal(true)
    }
    const toggleModalProduct = () => {
        setIsOpenModal(!isOpenModal)
    }
    //Thêm
    const handlePostProduct = async (data) => {
        const response = await postProductsApi(data, getProuductList)
        console.log(response);

    }
    //xóa
    const handleDeleteProduct = async (id) => {
        const response = await deleteProductApi(id, getProuductList)
        console.log(response);
    }

    // sửa
    const handleEditProduct = async (data, id) => {
        const response = await putProductsApi(data, id, getProuductList)
        console.log(response);
    }

    console.log("re-render");

    const toggleEditModalProduct = (bool, product = null, position = null) => {
        setIsOpenEditModal(bool)
        if (product) {
            setProductItem(product)
        }
        hanldScrollTopTop(position)

    }
    const hanldScrollTopTop = (position) => {
        if (position) {
            window.scrollTo(0, position);
        }
    }
    useEffect(() => {
        hanldScrollTopTop(postitionEditModal)
    }, [postitionEditModal])



    return (
        <div className="container">
            <div className='py-3 mb-3'>
                <div className="row align-items-center">
                    <div className="col-6">
                        <h3 className='fs-3 m-0'>Quản lý sản phẩm</h3>
                    </div>
                    <div className="col-6 text-end">
                        <button
                            className="btn btn-sm btn-primary"
                            onClick={() => { handleShowModalProduct() }}
                        >
                            Thêm mới sản phẩm
                        </button>
                    </div>
                </div>
                <hr />
                {isOpenEditModal &&
                    (<ModalEditProduct
                        categoryList={category}
                        isOpenEditModal={isOpenEditModal}
                        toggleEditModalProduct={toggleEditModalProduct}
                        product={productItem}
                        brandList={brands}
                        handleEditProduct={handleEditProduct}
                        setPostitionEditModal={setPostitionEditModal}
                    />)}
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th style={{ maxWidth: "200px" }}>Tên sản phẩm</th>
                            <th style={{ maxWidth: "100px" }}>Hình ảnh</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map(product => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td style={{ maxWidth: "200px" }}>{product.name}</td>
                                    <td style={{ maxWidth: "100px" }}><img src={product.img} width="80px" alt={product.img} /></td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td className='text-center'>
                                        <button
                                            className="btn btn-sm btn-info me-1"
                                            onClick={() => { toggleEditModalProduct(true, product, postitionEditModal) }}
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => { handleDeleteProduct(product.id) }}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {isOpenModal && (<ModalProduct
                    isOpenModal={isOpenModal}
                    toggleModalProduct={toggleModalProduct}
                    handlePostProduct={handlePostProduct}
                    listCategory={category}
                    listBrand={brands}
                />)}

            </div>
        </div>

    )
}

export default ProductManagement
