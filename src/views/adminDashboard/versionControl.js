import React from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CInputGroup, CFormInput, CButton } from '@coreui/react';

const versionControl = () => {
    return (

        <CRow>
            <CCol xs>
                <CCard className="mb-4">
                    <CCardHeader>تورهای درخواستی</CCardHeader>
                    <CCardBody>
                        <CInputGroup>
                            <CFormInput></CFormInput>
                            <CButton>ویرایش</CButton>
                            <CButton></CButton>
                        </CInputGroup>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>



    )
}

export default versionControl