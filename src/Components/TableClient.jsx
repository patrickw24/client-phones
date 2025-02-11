import React from 'react'
import { useEffect, useState } from 'react'

export const TableClient = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "clients"
    const [clients, setClients] = useState([])

    const getClients = async () => {

        const url = `${baseUrl}${endPoint}`
        const result = await fetch(url)
        const data = await result.json()
        setClients(data)
    }

    useEffect(() => {
        getClients()
    }, [])

    return (
        <>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
