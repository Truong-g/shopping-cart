import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Conversation from "./chatapp/Conversation";
import Messenger from "./chatapp/Messenger";
import { io } from 'socket.io-client'

function HomePage() {
    const user = useSelector(state => state.user.dataSingle)
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [newMessage, setNewMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [arrivalMessages, setArrivalMessages] = useState(null)
    const socketRef = useRef()


    useEffect(() => {
        socketRef.current = io("ws://localhost:8900")
        socketRef.current.on("getMessageFromServerSocket", data => {
            console.log(data);
            setArrivalMessages({
                senderid: data.senderId,
                text: data.text,
                createAt: Date.now()
            })
        })
    }, [])

    useEffect(() => {
        if(arrivalMessages){
            if(currentChat.reciverid === arrivalMessages.senderid || currentChat.senderid === arrivalMessages.senderid){
                setMessages(prev => [...prev, arrivalMessages])
            }
        }

    }, [arrivalMessages, currentChat])

    useEffect(() => {
        socketRef.current.emit("addUser", user?.id)
        socketRef.current.on("getUsers", users => {
            console.log(users);
        })

    }, [user])
    useEffect(() => {
        if (user) {
            const getConversation = async () => {
                const response = await fetch(`http://localhost:81/web-banhang-tuantruong/public/api/conversations/${user.id}`)
                if (response.ok) {
                    const resBody = await response.json()
                    setConversations(resBody)
                }
            }
            getConversation()
        }
    }, [user])

    useEffect(() => {
        const getMessage = async () => {
            try {
                const response = await fetch(`http://localhost:81/web-banhang-tuantruong/public/api/messages/${currentChat?.id}`)
                const responseBody = await response.json()
                setMessages(responseBody)
            } catch (error) {
                console.log(error);
            }

        }

        getMessage()
    }, [currentChat])





    const handleSubmit = async () => {

        const message = {
            senderid: user.id,
            text: newMessage,
            conversationid: currentChat.id
        }

        const senderid = currentChat.senderid
        const reciverid = currentChat.reciverid

        console.log(senderid, reciverid);

        let reciverId
        if (senderid === user.id) {
            reciverId = reciverid
        }
        if (reciverid === user.id) {
            reciverId = senderid
        }
        console.log(reciverId);

        socketRef.current.emit("sendMessageFromClient", {
            senderId: user.id,
            reciverId,
            text: newMessage
        })

        try {

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(message)
            }

            const response = await fetch("http://localhost:81/web-banhang-tuantruong/public/api/messages", requestOptions)
            const responseBody = await response.json()
            setMessages(prev => {
                return [
                    ...prev,
                    responseBody
                ]
            })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <section className="container mt-5">
            <div>
                {conversations.map((item, index) => {
                    return <div
                        key={index}
                        onClick={() => setCurrentChat(item)}
                    >
                        <Conversation conversation={item} />
                    </div>
                })}
            </div>
            <hr />
            {currentChat ? (
                <>
                    <div>
                        {messages.map((mess, index) => {
                            return (<div key={index}>
                                <Messenger message={mess} own={mess.senderid === user.id} />
                            </div>)
                        })}

                    </div>
                    <div className="mt-4 d-flex justify-content-center align-items-center">
                        <textarea cols="30"
                            rows="5"
                            placeholder="Write something..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value
                            )}
                        >

                        </textarea>
                        <button
                            onClick="submit"
                            className="ms-4"
                            onClick={handleSubmit}
                        >SEND</button>
                    </div>
                </>
            ) : (

                <div>
                    <h4>Open chat</h4>
                </div>
            )}
        </section>
    )
}

export default HomePage
