import React, { useEffect, useState } from 'react'

function BrandForm({ isPending, handleSendRequest }) {

    const [imgPreview, setImgPreview] = useState()
    const [valueForm, setValueForm] = useState({
        name: "",
        siteurl: "",
        fullname: "",
        phone: "",
        email: "",
        address: "",
        metakey: "",
        metadesc: "",
        logo: "",
        status: '0'
    })

    useEffect(() => {
        // clean up
        return () => {
            imgPreview && URL.revokeObjectURL(imgPreview.preview)
        }
    }, [imgPreview])

    // useEffect(() => {
    //     // if (!!catSingle) {
    //         setValueForm({
    //             ...valueForm,
    //             name: !!catSingle ? catSingle.name : "",
    //             metakey: !!catSingle ? catSingle.metakey : "",
    //             metadesc: !!catSingle ? catSingle.metadesc : "",
    //             parentid: !!catSingle ? catSingle.parentid : "",
    //             status: !!catSingle ? catSingle.status : ""
    //         })
    //     // }

    // }, [])


    const handleValueForm = (event) => {

        if (event.target.name === "logo") {
            const image = event.target.files[0]
            image.preview = URL.createObjectURL(image)
            setImgPreview(image)
            
            const getBase64 = async () => {
                const base64String = await toBase64(image)
                setValueForm({
                    ...valueForm,
                    logo: base64String
                })
            }
            getBase64()
        } else {
            setValueForm(prev => {
                return {
                    ...prev,
                    [event.target.name]: event.target.value,
                }
            })
        }

    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });


    const onHandleSubmit = (event) => {
        event.preventDefault()
        handleSendRequest(valueForm)

        if (!isPending) {
            setValueForm(prev => {
                const coppyState = { ...prev }
                for (const key in valueForm) {
                    coppyState[key] = ''
                }
                return coppyState
            })
        }

    }

    return (
        <div>
            <form
                action=""
                onSubmit={onHandleSubmit}
            >
                <div className="row">

                    <div className="col-md-8">

                        <div className="form-group my-2">
                            <label htmlFor="" className="d-block">Tên thương hiệu</label>
                            <input
                                type="text"
                                name="name"
                                className="w-100 form-control"
                                value={valueForm.name}
                                onChange={(e) => handleValueForm(e)}
                            />
                        </div>

                        <div className="form-group my-2">
                            <label htmlFor="" className="d-block">Website</label>
                            <input
                                type="url"
                                name="siteurl"
                                className="w-100 form-control"
                                value={valueForm.siteurl}
                                onChange={(e) => handleValueForm(e)}
                            />
                        </div>

                        <div className="form-group my-2">
                            <label htmlFor="" className="d-block">Tên chủ thương hiệu</label>
                            <input
                                type="text"
                                name="fullname"
                                className="w-100 form-control"
                                value={valueForm.fullname}
                                onChange={(e) => handleValueForm(e)}
                            />
                        </div>

                        <div className="form-group my-2">
                            <label htmlFor="" className="d-block">Địa chỉ</label>
                            <input
                                type="text"
                                name="address"
                                className="w-100 form-control"
                                value={valueForm.address}
                                onChange={(e) => handleValueForm(e)}
                            />
                        </div>

                        <div className="form-group my-2">
                            <label htmlFor="" className="d-block">Từ khóa SEO</label>
                            <input
                                type="text"
                                name="metakey"
                                className="w-100 form-control"
                                value={valueForm.metakey}
                                onChange={(e) => handleValueForm(e)}
                            />
                        </div>

                        <div className="form-group my-2">
                            <label htmlFor="" className="d-block">Mô tả SEO</label>
                            <input
                                type="text"
                                name="metadesc"
                                className="w-100 form-control"
                                value={valueForm.metadesc}
                                onChange={(e) => handleValueForm(e)}
                            />
                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="form-group my-2">
                            <label htmlFor="" className="d-block">Số điện thoại</label>
                            <input
                                type="number"
                                name="phone"
                                className="w-100 form-control"
                                value={valueForm.phone}
                                onChange={(e) => handleValueForm(e)}
                            />
                        </div>

                        <div className="form-group my-2">
                            <label htmlFor="" className="d-block">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-100 form-control"
                                value={valueForm.email}
                                onChange={(e) => handleValueForm(e)}
                            />
                        </div>

                        <div className="form-group my-2">
                            <label htmlFor="" className="d-block">Logo</label>
                            <input
                                type="file"
                                name="logo"
                                className="w-100 form-control"
                                onChange={(e) => handleValueForm(e)}
                            />
                        </div>

                        <div className="form-group my-2">
                            <div className="text-center p-4 border">
                                {imgPreview && (
                                    <img src={imgPreview.preview} width="120px" height="120px" className="rounded" alt={imgPreview.name} />
                                )}
                            </div>
                        </div>

                        <div className="form-group my-2">
                            <label htmlFor="" className="d-block">Trạng thái</label>
                            <select
                                name='status'
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => handleValueForm(e)}
                                value={valueForm.status}
                            >
                                <option value="0">Trạng thái</option>
                                <option value="1">Xuất bản</option>
                                <option value="2">Chưa xuất bản</option>
                            </select>
                        </div>

                        <div className="form-group my-2 d-flex justify-content-end py-2">
                            <button className="btn btn-primary btn-sm px-4" type='submit'>Lưu</button>
                        </div>

                    </div>

                </div>
            </form>
        </div>
    )
}

export default BrandForm
