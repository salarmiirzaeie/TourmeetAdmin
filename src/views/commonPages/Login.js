import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { useDispatch } from 'react-redux'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { Formik } from 'formik'
import { profile } from 'src/state-management/action/profileAction'
import swal from 'sweetalert'
const { login } = require('../../services/usersService')
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center rounded">
          <CCol md={8}>
            <CRow>
              <CCol className='bg-white' xs={12} sm={6} lg={6}>
                <CCardBody>
                  <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={(values) => {
                      const errors = {}
                      if (!values.email) {
                        errors.email = 'Required'
                      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address'
                      }
                      return errors
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      login(values).then((res) => {
                        setTimeout(() => {
                          if (res.status == 206) {
                            localStorage.setItem('token', res.data.token)
                            dispatch(profile(res.data))
                            navigate('adminDashboard')
                          } else if (res.status == 200) {
                            localStorage.setItem('token', res.data.token)
                            dispatch(profile(res.data))
                            navigate('dashboard')
                          } else if (res.status == 207) {
                            localStorage.setItem('token', res.data.token)
                            dispatch(profile(res.data))
                            navigate('touristDashboard')
                          } else {
                            swal('خطا', res.data.message, 'error')
                          }
                          setSubmitting(false)
                        }, 400)
                      })
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

                      /* and other goodies */
                    }) => (
                      <CForm>
                        <h1>ورود</h1>
                        <p className="text-medium-emphasis">لطفا وارد حساب خودشوید.</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="ایمیل"
                            autoComplete="mail"
                          />
                          {errors.email && touched.email && errors.email}
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            type="password"
                            placeholder="رمزعبور"
                            autoComplete="current-password"
                            name="password"
                          />
                          {errors.password && touched.password && errors.password}
                        </CInputGroup>
                        <CRow>
                          <CCol xs={6}>
                            <CButton
                              onClick={handleSubmit}
                              color="primary"
                              className="px-4"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              ورود
                            </CButton>
                          </CCol>
                          <CCol xs={6} className="text-right">
                            <CButton color="link" className="px-0">
                              فراموشی رمزعبور
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    )}
                  </Formik>
                </CCardBody>
              </CCol>
              <CCol className='bg-primary' xs={12} sm={6} lg={6}>

                <CCardBody className="text-center text-white py-4">
                  <div>
                    <h2>ثبت نام</h2>
                    <br />
                    <p>
                      کاربر عزیز، با ثبت نام به عنوان تور لیدر، میتوانید تور های خود را با میلیون ها کاربر به اشتراک بگذارید.
                    </p>
                    <br />
                    <br />
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        ثبت نام کن !
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>

              </CCol>

            </CRow>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login