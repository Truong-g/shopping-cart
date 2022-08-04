import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { pd1 } from '../../../assets/images'

function Conversation(conversation) {
    const user = useSelector(state => state.user.dataSingle)
    const [value, setValue] = useState(null)




    useEffect(() => {
        const conv = conversation.conversation
        const senderid = conv.senderid
        const reciverid = conv.reciverid

        let friendId
        if (senderid === user.id) {
            friendId = reciverid
        }
        if (reciverid === user.id) {
            friendId = senderid
        }

        const getUsers = async () => {
            try {
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("jwt")
                    }
                }
                const url = `http://localhost:81/web-banhang-tuantruong/public/api/user/${friendId}`
                const response = await fetch(url, requestOptions)
                const responseBody = await response.json()
                setValue(responseBody)

            } catch (error) {
                console.log(error);
            }
        }
        getUsers()

    }, [conversation.conversation])


    return (
        <div className='conversation'>
            <img src={pd1} alt="avatar" className='conversation_img' />
            <span className='conversation_name'>{value?.name}</span>
        </div>
    )
}

export default Conversation
