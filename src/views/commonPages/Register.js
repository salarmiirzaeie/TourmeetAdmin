import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CButtonGroup,
  CFormCheck,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { register } from 'src/services/usersService'
import swal from 'sweetalert'
const Register = () => {
  const navigate = useNavigate()
  const[type,setType]=useState("tourist")
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4 rounded-3">
              <CCardBody className="p-4">
                <Formik
                  initialValues={{ email: '', password: '', name: '', confirmPassword: '',type:'' }}
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
                    setTimeout(() => {
                      values.type=type
                      register(values).then((res) => {
                        if (res.status == 201) {
                          navigate('/login')
                        } else {
                          swal("خطا",res.data.message,"error")
                        }
                      })

                      setSubmitting(false)
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

                    /* and other goodies */
                  }) => (
                    <CForm>
                      <h1>ثبت نام</h1>
                      <p className="text-medium-emphasis">حساب خودراایجادکنید</p>
                      <CButtonGroup className="mb-3" role="group" aria-label="button group">
                        <CFormCheck
                          type="radio"
                          button={{ color: 'success', variant: 'outline' }}
                          name="vbtnradio"
                          id="vbtnradio1"
                          autoComplete="off"
                          label="گردشگر"
                          defaultChecked
                          onClick={()=>setType("tourist")}
                        />
                        <CFormCheck
                          type="radio"
                          button={{ color: 'success', variant: 'outline' }}
                          name="vbtnradio"
                          id="vbtnradio2"
                          autoComplete="off"
                          label="تور"
                          onClick={()=>setType("tour")}
                        />
                        
                      </CButtonGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="نام"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="name"
                          value={values.name}
                          autoComplete="name"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>@</CInputGroupText>
                        <CFormInput
                          type="email"
                          name="email"
                          id="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          placeholder="ایمیل"
                          autoComplete="mail"
                        />
                        {errors.email && touched.email && errors.email}{' '}
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          type="password"
                          id="password"
                          placeholder="رمزعبور"
                          autoComplete="current-password"
                          name="password"
                        />
                        {errors.password && touched.password && errors.password}
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="confirmPassword"
                          type="password"
                          placeholder="تکراررمزعبور"
                          autoComplete="new-password"
                          value={values.confirmPassword}
                        />
                      </CInputGroup>
                      <div className="d-grid">
                        <CButton
                          type="submit"
                          disabled={isSubmitting}
                          onClick={handleSubmit}
                          color="success"
                        >
                          ایجادحساب
                        </CButton>
                      </div>
                    </CForm>
                  )}
                </Formik>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
