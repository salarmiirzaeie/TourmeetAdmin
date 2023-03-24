import CIcon from '@coreui/icons-react';
import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CRow,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CSpinner,
  CTable,
  CTableDataCell,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableHead,
  CAlert,
  CAlertHeading

} from '@coreui/react'
import { cilBusAlt, cilDollar, cilPlus, cilUser } from '@coreui/icons';
import { userProfile } from './../../services/usersService';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
  const navigate = useNavigate()
  const [permissionLength, setPermissionLength] = useState(0)
  useEffect(() => {

    userProfile().then((res) => {
      if (res.status === 200) {
        setPermissionLength(res.data)
      }
    })

  }, [])

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>دسترسی سریع</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol className='mb-3' lg={4} md={4} onClick={() => navigate('/dashboard/createPost')} >
              <CButton
                style={{ justifyContent: "center" }}
                color="primary"
                // xs={{ cols: 1 }}
                textColor="white"
                className="w-100 h-100"

              // key={index}
              >
                <p className='mt-3'>ایجاد تور<CIcon icon={cilPlus} /> </p>

              </CButton>
            </CCol>

            <CCol className='mb-3' lg={4} md={4} onClick={() => navigate('/dashboard/myTours')} >
              <CButton
                color="light"
                // xs={{ cols: 1 }}
                textColor="white"
                className=" w-100 h-100"

              // key={index}
              >
                <p className='mt-3'>تور های من<CIcon style={{ alignItems: 'flex-start' }} icon={cilUser} /> </p>

              </CButton>
            </CCol>

            <CCol className='mb-3' lg={4} md={4} onClick={() => navigate('/dashboard/withdraw')} >
              <CButton
                color="info"
                // xs={{ cols: 1 }}
                textColor="white"
                className=" w-100 h-100"

              // key={index}
              >
                <p className='mt-3'>برداشت وجه<CIcon icon={cilDollar} /> </p>

              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>اعلانات</CCardHeader>
        <CCardBody>
          {permissionLength.permissionlenth === 2 ? (
            <CAlert color="primary">
              <CAlertHeading component="h4">ثبت مجوز ها</CAlertHeading>
              <hr />
              <p>
                کاربر گرامی، با ثبت مجوز های خود میتوانید تور های تفریحی خود را با میلیون ها کاربر به اشتراک بگذارید.
              </p>
              <CButton onClick={() => navigate('/dashboard/permissionsPage')} >ثبت مجوز</CButton>
            </CAlert>
          ) : ''}
          <CAlert color="primary">
            <CAlertHeading component="h4">بزودی...</CAlertHeading>
            <hr />
            <p>
              کاربر گرامی، اپلیکیشن مدیران تور بزودی راه اندازی خواهد شد.
            </p>

          </CAlert>
        </CCardBody>
      </CCard>


    </>
  )
}

export default Dashboard
