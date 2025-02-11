import React from 'react'
import { useEffect, useState } from 'react'


export const TablePhone = () => {

    const baseURL= import.meta.env.VITE_BASE_URL
    const endPoint= "phones"

    const [phone, setPhones]= useState([])

    const getPhones= async ()=>{

        const url= `${baseURL}${endPoint}`
        const result= await fetch(url)
        const data= await result.json()
        setPhones(data)
       
    }


    useEffect(()=>{
      getPhones()
    },[])

  return (
    <>
  <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Client ID</th>
                        <th>Phone Number</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        phone.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.client_id}</td>
                                <td>{item.phone_number}</td>
                              
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
  )
}