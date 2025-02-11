import React from 'react'
import { TablePhone } from '../Components/TablePhone'
import { FormPhone } from '../Components/FormPhone'

export const PhonesScreen = () => {
  return (
     <>
            <main className='container mt-5' >
                <h1>Phones</h1>
                <FormPhone/>
                <TablePhone/>
            </main>
        </>
  )
}

