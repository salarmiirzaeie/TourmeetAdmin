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
import { Formik, useFormik } from 'formik'
import { profile } from 'src/state-management/action/profileAction'
import swal from 'sweetalert'
import * as Yup from 'yup'

const { login } = require('../../services/usersService')

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string().email().required('لطفا ایمیل خود را وارد کنید !'),
      password: Yup.string().required('لطفا رمز خود را وارد کنید !'),
    }),

    onSubmit: (values, { setSubmitting }) => {
      values.email = values.email.toLowerCase()
      login(values).then((res) => {
        //console.log(res)
        setTimeout(() => {
          if (res.status == 206) {
            localStorage.setItem('token', res.data.token)
            dispatch(profile(res.data))

            navigate('/dashboard')
          } else if (res.status == 200) {
            localStorage.setItem('token', res.data.token)
            dispatch(profile(res.data))

            navigate('/dashboard')
          } else {
            swal('خطا', res.data.message, 'error')
          }
          setSubmitting(false)
        }, 400)
      })
    },
  })

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center ">
      <CContainer>
        <CRow className="justify-content-center rounded mx-1">
          <CCol md={9}>
            <CRow className='d-flex flex-row-reverse'>

              <CCol className="bg-primary" xs={12} sm={6} lg={6}>
                <CCardBody className="text-center text-white py-4">
                  <div>
                    <h2>ثبت نام</h2>
                    <br />
                    <p>
                      کاربر عزیز، با ثبت نام به عنوان تور گردان، میتوانید تور های خود را با میلیون ها
                      گردشگر به اشتراک بگذارید.
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
              <CCol className="bg-white" xs={12} sm={6} lg={6}>
                <CCardBody>
                  {/* validate={(formik.values) => {
                      const errors = {}
                      if (!formik.values.email) {
                        errors.email = 'Required'
                      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formik.values.email)) {
                        errors.email = 'Invalid email address'
                      }
                      return errors
                    }} */}
                  <CForm onSubmit={formik.handleSubmit}>
                    <h1>ورود</h1>
                    <p className="text-medium-emphasis">لطفا وارد حساب خودشوید.</p>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="ایمیل"
                        autoComplete="mail"
                        {...formik.getFieldProps('email')}
                      />

                    </CInputGroup>
                    {formik.touched.email && formik.errors.email ? (
                      <div className='mb-3 mx-2' style={{ color: 'red' }}>{formik.errors.email}</div>
                    ) : null}

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        type="password"
                        placeholder="رمزعبور"
                        autoComplete="current-password"
                        name="password"
                        {...formik.getFieldProps('password')}
                      />
                    </CInputGroup>
                    {formik.touched.password && formik.errors.password ? (
                      <div className='mb-3 mx-2' style={{ color: 'red' }}>{formik.errors.password}</div>
                    ) : null}
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          onClick={formik.handleSubmit}
                          color="primary"
                          className="px-4"
                          type="submit"
                          disabled={formik.isSubmitting}
                        >
                          ورود
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <Link to="/forgetpassword" color="link" className="px-0">
                          فراموشی رمزعبور
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
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
