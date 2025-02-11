import React from 'react'
import { useState } from 'react'

export const FormClient = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "clients"

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        const newUrl = `${baseUrl}${endPoint}`

        const client = {
            name, 
            email
        }

        const result = await fetch(newUrl, {
            method : "POST", 
            headers: {
                'Content-Type' : "application/json"
            }, 
            body : JSON.stringify(client)
        })

        window.location = "/"


    }

    return (
        <>
        <div className="card p-3 mb-5">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" type="text" onChange={nameHandler} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input className="form-control" type="email" onChange={emailHandler} />
                </div>
                <button type='submit' className='btn btn-success w-100' >Create</button>
            </form>
            </div>
        </>
    )
}
