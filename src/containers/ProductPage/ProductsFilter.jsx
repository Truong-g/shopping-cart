import React from 'react'
import TitleProductPart from '../../components/TitleProductPart'

function ProductsFilter({title}) {
    return (
        <div className='mb-4'>
            <TitleProductPart title={title} />
            <ul className="list">
                <li className="item py-1">
                    <label htmlFor="1">
                        <input type="checkbox" name="" id="1" className='me-2' />
                        Checkbox1
                    </label>
                </li>
                <li className="item py-1">
                    <label htmlFor="2">
                        <input type="checkbox" name="" id="2" className='me-2' />
                        Checkbox1
                    </label>
                </li>
                <li className="item py-1">
                    <label htmlFor="3">
                        <input type="checkbox" name="" id="3" className='me-2' />
                        Checkbox1
                    </label>
                </li>
                <li className="item py-1">
                    <label htmlFor="4">
                        <input type="checkbox" name="" id="4" className='me-2' />
                        Checkbox1
                    </label>
                </li>
                <li className="item py-1">
                    <label htmlFor="5">
                        <input type="checkbox" name="" id="5" className='me-2' />
                        Checkbox1
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default ProductsFilter
