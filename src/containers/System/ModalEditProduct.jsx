import React, { useEffect, useRef, useState } from 'react'


function ModalEditProduct({ toggleEditModalProduct, product, categoryList, brandList, handleEditProduct, setPostitionEditModal }) {

    const [imageProduct, setImageProduct] = useState()
    const [formData, setFormData] = useState()
    const [productValue, setProductValue] = useState({
        id: "",
        name: "",
        metakey: "",
        metadesc: "",
        detail: "",
        img: "",
        category: "",
        brand: "",
        price: "",
        pricesale: "",
        status: ""
    })
    const ref = useRef()

    useEffect(() => {

        setProductValue(prev => {
            return {
                ...prev,
                id: product.id,
                name: product.name,
                metakey: product.metakey,
                metadesc: product.metadesc,
                detail: product.detail,
                img: product.img,
                category: product.catid,
                brand: product.brandid,
                price: product.price,
                pricesale: product.pricesale,
                status: product.status
            }
        })
        let position
        if (ref.current) {
            position = ref.current.offsetTop
        }
        setPostitionEditModal(position)

        return () => {
            setPostitionEditModal(undefined)
        }
    }, [product])

    useEffect(() => {

        //clean up
        return () => {
            imageProduct && URL.revokeObjectURL(imageProduct.preview)
        }
    }, [imageProduct])



    const handleValue = (e, field) => {

        const coppyState = { ...productValue }
        if (field !== 'img') {
            coppyState[field] = e.target.value
        } else {
            const image = e.target.files[0]
            image.preview = URL.createObjectURL(image)
            setImageProduct(image)
        }

        const files = e.target.files ? e.target.files : []
        const json = JSON.stringify(coppyState);
        if (!formData) { // CreateFormData
            const formRequest = new FormData()
            formRequest.append('image', files[0])
            formRequest.append('data', json)
            formRequest.append("_method", "PUT")
            setFormData(formRequest)
        }
        else {
            //SetFormdata
            formData.set("data", json)
            if (files.length > 0) {
                formData.set("image", files[0])
            }
        }
        setProductValue(coppyState)
    }

    const checkValidateValue = () => {
        let isValid = true
        const fieldArrays = ["name", "price", "category", "brand", "status"]
        for (let index = 0; index < fieldArrays.length; index++) {
            if (!productValue[fieldArrays[index]]) {
                isValid = false
                alert(`Tr?????ng ${fieldArrays[index]} kh??ng ???????c b??? tr???ng!`)
                break
            }
        }
        return isValid
    }

    const getValueForm = (id) => {
        const isvalid = checkValidateValue()
        if (isvalid) {
            if (formData) {
                handleEditProduct(formData, id)
                toggleEditModalProduct(false)
            } else {
                alert("D??? li???u ch??a thay ?????i!")
            }
        }
    }

    return (
        <div className='modalEditProduct mb-3' ref={ref}>
            <h3 className="fs-4">S???a s???n ph???m:</h3>
            <div className="row">
                <div className="col-md-8">
                    <div className="form-group my-4">
                        <label htmlFor="" className="d-block">T??n s???n ph???m</label>
                        <input type="text"
                            onChange={(e) => { handleValue(e, "name") }}
                            value={productValue.name} className="form-control" />
                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="" className="d-block">T??? kh??a SEO</label>
                        <input type="text"
                            onChange={(e) => { handleValue(e, "metakey") }}
                            value={productValue.metakey} className="form-control" />
                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="" className="d-block">M?? t??? SEO</label>
                        <input type="text"
                            onChange={(e) => { handleValue(e, "metadesc") }}
                            value={productValue.metadesc} className="form-control" />
                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="" className="d-block">Chi ti???t s???n ph???m</label>
                        <textarea
                            className='form-control'
                            cols="30"
                            rows="3"
                            value={productValue.detail}
                            onChange={(e) => { handleValue(e, "detail") }}>
                        </textarea>
                    </div>
                    <div className="form-group my-4">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="" className="d-block">H??nh ???nh s???n ph???m</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name='image'
                                    onChange={(e) => { handleValue(e, "img") }} />
                            </div>
                            <div className="col-md-6 text-center">
                                <img width="100px" src={imageProduct ? imageProduct.preview : productValue.img} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group my-4">
                        <label htmlFor="" className="d-block">Danh m???c s???n ph???m</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => { handleValue(e, "category") }}
                            value={productValue.category}
                        >
                            <option value="">Danh m???c</option>
                            {categoryList.map(cat => {
                                return (
                                    <option
                                        key={cat.id}
                                        value={cat.id}
                                    >
                                        {cat.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="" className="d-block">Th????ng hi???u</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => { handleValue(e, "brand") }}
                            value={productValue.brand}
                        >
                            <option value="">Th????ng hi???u</option>
                            {brandList.map(brand => {
                                return (
                                    <option
                                        key={brand.id}
                                        value={brand.id}
                                    >
                                        {brand.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="" className="d-block">Gi?? s???n ph???m</label>
                        <input type="number"
                            value={productValue.price}
                            onChange={(e) => { handleValue(e, "price") }}
                            className="form-control" />
                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="" className="d-block">Gi?? khuy???n m??i</label>
                        <input type="number"
                            value={productValue.pricesale}
                            onChange={(e) => { handleValue(e, "pricesale") }}
                            className="form-control" />
                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="" className="d-block">Tr???ng th??i</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => { handleValue(e, "status") }}
                            value={productValue.status}
                        >
                            <option value="">Tr???ng th??i</option>
                            <option value="1">Xu???t b???n</option>
                            <option value="2">Ch??a xu???t b???n</option>
                        </select>
                    </div>
                    <div className="form-group my-4">
                        <div className="row">
                            <div className="col-md-6">
                                <button
                                    className="btn btn-sm btn-success me-3 w-100 py-2"
                                    onClick={() => { getValueForm(productValue.id) }}
                                >
                                    L??u
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button
                                    className="btn btn-sm btn-danger ms-3 w-100 py-2"
                                    onClick={() => { toggleEditModalProduct(false, null, 0) }}
                                >????ng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEditProduct
