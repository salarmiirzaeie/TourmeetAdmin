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
import { paymony } from 'src/services/blogService'
import { useNavigate } from 'react-router-dom'
const Peyment = () => {
  useEffect(() => {
    paymony({}).then((res) => {
      window.location.replace(res.data)
      //console.log(res)

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
