import React from 'react'
import { TableClient } from '../Components/TableClient'
import { FormClient } from '../Components/FormClient'

export const ClientScreen = () => {
  return (
    <>
        <main className='container mt-5' >
            <h1>Clients</h1>
            <FormClient/>
            <TableClient/>
        </main>
    </>
  )
}
