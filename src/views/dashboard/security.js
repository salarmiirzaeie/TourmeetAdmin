import React, { useState } from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CAvatar,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardImage,
  CCol,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CProgress,
  CRow,
} from '@coreui/react'
import { cilDelete, cilMonitor, cilPlus, cilStream } from '@coreui/icons'
import { useRef } from 'react'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'
import CIcon from '@coreui/icons-react'
import { resetPassword } from 'src/services/usersService'

const security = () => {
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>امنیت</CCardHeader>
            <CRow>
              <CCol xs={12} md={12} xl={12}>
                <CCardBody>
                  <Formik
                    initialValues={{
                      oldPassword: '',
                      newPassword: '',
                      confirmPassword: '',
                    }}
                    validate={(values) => {
                      const errors = {}
                      return errors
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        resetPassword(values).then((res) => {
                          alert(res.data.message)
                        })
                      }, 400)
                    }}
                  >
                    {({
                      values,

                      errors,

                      touched,

                      handleChange,

                      handleBlur,

                      handleSubmit,
                      isSubmitting,
                      setSubmitting,

                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <CFormLabel>رمز</CFormLabel>
                        <CFormInput
                          name="oldPassword"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.oldPassword}
                        />
                        <CFormLabel>رمزجدید</CFormLabel>
                        <CFormInput
                          name="newPassword"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.newPassword}
                        />
                        <CFormLabel>تکراررمزجدید</CFormLabel>

                        <CFormInput
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onBlur={handleBlur}
                          type="password"
                          onChange={handleChange}
                        />
                        <CButton className='mt-3' onClick={() => handleSubmit} color="info" type="submit">
                          ثبت
                        </CButton>
                      </form>
                    )}
                  </Formik>
                </CCardBody>
              </CCol>
            </CRow>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default security
