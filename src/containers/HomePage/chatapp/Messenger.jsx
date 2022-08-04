import React from 'react'
import { pd1 } from '../../../assets/images'

function Messenger({message, own}) {
    return (
        <div className={own ? "messenger own" : "messenger"}>
            <img src={pd1} alt="" className='messenger_img'/>
            <p className='messenger_text'>{message.text}</p>
        </div>
    )
}

export default Messenger
