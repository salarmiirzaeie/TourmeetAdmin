import React, { useEffect } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from '@coreui/react'
import { paymony } from 'src/services/adminService'

const Peyment = () => {
  useEffect(() => {
    paymony({
      merchant_id: 'a47aea2b-27f3-41d9-a00c-dda053737e5c',
      Amount: 1000,
      callback_url: 'http://www.toumeet.ir',
      description: 'Hello NodeJS API.',
      
    }).then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CSpinner />
        </CRow>
      </CContainer>
    </div>
  )
}

export default Peyment
