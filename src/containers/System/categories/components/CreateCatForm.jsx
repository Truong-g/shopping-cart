import React, { useEffect, useState } from 'react'

function CreateCatForm({ cartList, isPending, catSingle, handleSendRequest }) {
    const [valueForm, setValueForm] = useState({
        name: "",
        metakey: "",
        metadesc: "",
        parentid: "0",
        status: '0'
    })

    useEffect(() => {
        if (!!catSingle) {
            setValueForm({
                ...valueForm,
                name: !!catSingle ? catSingle.name : "",
                metakey: !!catSingle ? catSingle.metakey : "",
                metadesc: !!catSingle ? catSingle.metadesc : "",
                parentid: !!catSingle ? catSingle.parentid : "",
                status: !!catSingle ? catSingle.status : ""
            })
        }

    }, [!!catSingle && catSingle.id])

    const handleValueForm = (event) => {
        setValueForm(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const onHandleSubmit = (event) => {
        event.preventDefault()
        handleSendRequest(valueForm)

        if (!isPending) {
            setValueForm(prev => {
                const coppyState = {...prev}
                for (const key in valueForm) {
                    coppyState[key] = ''
                }
                return coppyState
            })
        }

    }
    return (
        <form
            action=""
            onSubmit={onHandleSubmit}
        >
            <div className="row">
                <div className="col-md-8">
                    <div className="form-group my-2">
                        <label htmlFor="" className="d-block">Tên Danh Mục</label>
                        <input
                            type="text"
                            name="name"
                            className="w-100 form-control"
                            value={valueForm.name}
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
                            name='metadesc'
                            className="w-100 form-control"
                            value={valueForm.metadesc}
                            onChange={(e) => handleValueForm(e)}

                        />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group my-2">
                        <label htmlFor="" className="d-block">Danh mục cha</label>
                        <select
                            name='parentid'
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => handleValueForm(e)}
                            value={valueForm.parentid}

                        >
                            <option value='0'>Chọn danh mục[---]</option>
                            {isPending && (<option>Loading...</option>)}
                            {cartList.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
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
                    <div className="form-group my-2 d-flex justify-content-end py-5">
                        <button
                            className="btn btn-primary btn-sm px-4"
                            type='submit'
                        >Lưu</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CreateCatForm
