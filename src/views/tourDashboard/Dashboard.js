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
import { cilPlus } from '@coreui/icons';
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
            <CCol xs>
              <CCard
                color="primary"
                // xs={{ cols: 1 }}

                textColor="white"
                className="mb-3"
                style={{ maxWidth: '18rem', marginRight: 10, marginTop: 10 }}
              // key={index}
              >
                <CCardHeader>ایجاد تور<CIcon style={{ alignItems: 'flex-start' }} icon={cilPlus} /> </CCardHeader>
                <CCardBody>
                  {/* <CCardTitle>card title</CCardTitle> */}
                  <CCardText>با ایجاد تور ...</CCardText>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol xs>
              <CCard
                color="success"
                // xs={{ cols: 1 }}

                textColor="white"
                className="mb-3"
                style={{ maxWidth: '18rem', marginRight: 10, marginTop: 10 }}
              // key={index}
              >
                <CCardHeader>تور های من</CCardHeader>
                <CCardBody>
                  {/* <CCardTitle>card title</CCardTitle> */}
                  <CCardText>دکمه</CCardText>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol xs>
              <CCard
                color="info"
                // xs={{ cols: 1 }}
                textColor="white"
                className="mb-3"
                style={{ maxWidth: '18rem', marginRight: 10, marginTop: 10 }}
              // key={index}
              >
                <CCardHeader>برداشت وجه</CCardHeader>
                <CCardBody>
                  {/* <CCardTitle>card title</CCardTitle> */}
                  <CCardText></CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>اعلانات</CCardHeader>
        <CCardBody>
          {permissionLength.permissionlenth === 0 ? (
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
              کابر گرامی، اپلیکیشن مدیران تور بزودی راه اندازی خواهد شد.
            </p>
            <CButton onClick={() => navigate('/dashboard/permissionsPage')} >ثبت مجوز</CButton>
          </CAlert>
        </CCardBody>
      </CCard>


    </>
  )
}

export default Dashboard
