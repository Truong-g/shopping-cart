import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

function ModalProduct({ isOpenModal, toggleModalProduct, handlePostProduct, listCategory, listBrand }) {
    const [imageProduct, setImageProduct] = useState()
    const [formData, setFormData] = useState()
    const [valueForm, setValueForm] = useState({
        name: "",
        metakey: "",
        metadesc: "",
        detail: "",
        category: "",
        brand: "",
        price: "",
        pricesale: "",
        status: ""
    })
    useEffect(() => {
        // clean up
        return () => {
            imageProduct && URL.revokeObjectURL(imageProduct.preview)
        }
    }, [imageProduct])

    const addValueInput = (e, field) => {
        const coppyState = { ...valueForm }
        if (field !== 'img') {
            coppyState[field] = e.target.value.toString()
        } else {
            const image = e.target.files[0]
            image.preview = URL.createObjectURL(image)
            setImageProduct(image)
        }


        const files = e.target.files ? e.target.files : []
        const json = JSON.stringify(coppyState);
        if (!formData) {
            // CreateFormData
            const formRequest = new FormData()
            formRequest.append('img', files[0])
            formRequest.append('data', json)
            setFormData(formRequest)
        }
        else {
            //SetFormdata
            formData.set("data", json)
            if (files.length > 0) {
                formData.set("img", files[0])
            }
        }
        setValueForm(coppyState)
    }

    const checkValidateValue = () => {
        let isValid = true
        const fieldArrays = ["name", "price", "category", "brand", "status"]
        for (let index = 0; index < fieldArrays.length; index++) {
            if (!valueForm[fieldArrays[index]]) {
                isValid = false
                alert(`Trường ${fieldArrays[index]} không được bỏ trống!`)
                break
            }
        }
        return isValid
    }

    const getValueForm = () => {
        const isvalid = checkValidateValue()
        if (isvalid) {
            handlePostProduct(formData)
            toggleModalProduct()
        }
    }

    return (
        <div>
            <Modal
                isOpen={isOpenModal}
                toggle={() => { toggleModalProduct() }}
                size='lg'
                centered
            >
                <ModalHeader
                    charcode="Y"
                    toggle={() => { toggleModalProduct() }}
                >
                    Thêm mới sản phẩm
                </ModalHeader>
                <ModalBody>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-group my-2">
                                    <label htmlFor="" className="d-block">Tên Sản Phẩm</label>
                                    <input
                                        type="text"
                                        className="w-100 form-control"
                                        onChange={(e) => { addValueInput(e, "name") }}
                                        value={valueForm.name}
                                    />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="" className="d-block">Từ khóa SEO</label>
                                    <input
                                        type="text"
                                        className="w-100 form-control"
                                        onChange={(e) => { addValueInput(e, "metakey") }}
                                        value={valueForm.metakey}
                                    />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="" className="d-block">Mô tả SEO</label>
                                    <input
                                        type="text"
                                        className="w-100 form-control"
                                        onChange={(e) => { addValueInput(e, "metadesc") }}
                                        value={valueForm.metadesc}

                                    />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="" className="d-block">Chi tiết sản phẩm:</label>
                                    <textarea cols="30"
                                        rows="3"
                                        className="w-100 form-control"
                                        onChange={(e) => { addValueInput(e, "detail") }}
                                        value={valueForm.detail}
                                    ></textarea>
                                </div>
                                <div className="form-group my-2 row align-items-center">
                                    <div className="col-6">
                                        <label htmlFor="" className="d-block">Hình ảnh:</label>
                                        <input type="file"
                                            name="img"
                                            className='w-100 form-control'
                                            onChange={(e) => { addValueInput(e, "img") }}
                                        />
                                    </div>
                                    <div className="col-6 text-center">
                                        {imageProduct && (<img src={imageProduct.preview} style={{ width: "100px" }} alt="" />)}
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group my-2">
                                    <label htmlFor="" className="d-block">Danh mục sản phẩm</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        onChange={(e) => { addValueInput(e, "category") }}
                                    >
                                        <option value=''>Chọn danh mục[---]</option>
                                        {listCategory.map(cat => (
                                            <option value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="" className="d-block">Thương hiệu sản phẩm</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        onChange={(e) => { addValueInput(e, "brand") }}
                                    >
                                        <option value=''>Chọn thương hiệu[---]</option>
                                        {listBrand.map(brand => (
                                            <option value={brand.id}>{brand.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="" className="d-block">Giá sản phẩm</label>
                                    <input
                                        type="number"
                                        min="50000"
                                        className="w-100 form-control"
                                        onChange={(e) => { addValueInput(e, "price") }}
                                        value={valueForm.price}

                                    />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="" className="d-block">Giá khuyến mãi</label>
                                    <input
                                        type="number"
                                        min="50000"
                                        className="w-100 form-control"
                                        onChange={(e) => { addValueInput(e, "pricesale") }}
                                        value={valueForm.pricesale}

                                    />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="" className="d-block">Trạng thái</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        onChange={(e) => { addValueInput(e, "status") }}
                                    >
                                        <option value="">Trạng thái</option>
                                        <option value="1">Xuất bản</option>
                                        <option value="2">Chưa xuất bản</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => { getValueForm() }}
                    >
                        Lưu
                    </Button>
                    {' '}
                    <Button onClick={() => { toggleModalProduct() }}>
                        Hủy
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalProduct
