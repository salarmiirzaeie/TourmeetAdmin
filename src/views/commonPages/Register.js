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
import { Formik, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { register } from 'src/services/usersService'
import swal from 'sweetalert'
import * as Yup from 'yup';


const Register = () => {
  const navigate = useNavigate()
  const [type, setType] = useState("tour")

  const formik = useFormik({
    initialValues: {
      email: '', password: '', name: '', confirmPassword: '', type: ''
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required('لطفا نام خود را وارد کنید !'),
      city: Yup.string()
        .required('لطفا شهر خود را انتخاب کنید !'),
      email: Yup.string().email()
        .required('لطفا ایمیل خود را وارد کنید !'),
      password: Yup.string()
        .required('لطفا رمز خود را وارد کنید !'),
      confirmPassword: Yup.string()
        .required('لطفا رمز خود را دوباره وارد کنید !'),
    }),

    onSubmit: (values, { setSubmitting }) => {
      console.log("object");


      setTimeout(() => {
        values.type = 'tour'
        register(values).then((res) => {
          if (res.status == 201) {
            navigate('/login')
          } else {
            swal("خطا", res.data.message, "error")
          }
        })
        setSubmitting(false)
      }, 400)

    }
  });

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4 rounded-3">
              <CCardBody className="p-4">
                <CForm onSubmit={formik.handleSubmit}>
                  <h1>ثبت نام</h1>
                  <p className="text-medium-emphasis">حساب خود راایجاد کنید</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="نام"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="name"
                      value={formik.values.name}
                      autoComplete="name"
                      {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div style={{ color: 'red', margin: 10 }} >{formik.errors.name}</div>
                    ) : null}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      type="email"
                      name="email"
                      id="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      placeholder="ایمیل"
                      autoComplete="mail"
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div style={{ color: 'red', margin: 10 }} >{formik.errors.email}</div>
                    ) : null}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      type="password"
                      id="password"
                      placeholder="رمزعبور"
                      autoComplete="current-password"
                      name="password"
                      {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div style={{ color: 'red', margin: 10 }} >{formik.errors.password}</div>
                    ) : null}
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="confirmPassword"
                      type="password"
                      placeholder="تکراررمزعبور"
                      autoComplete="new-password"
                      value={formik.values.confirmPassword}
                      {...formik.getFieldProps('confirmPassword')}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                      <div style={{ color: 'red', margin: 10 }} >{formik.errors.confirmPassword}</div>
                    ) : null}
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton
                      type="submit"
                      disabled={formik.isSubmitting}
                      onClick={formik.handleSubmit}
                      color="success"
                    >
                      ایجادحساب
                    </CButton>
                  </div>
                </CForm>

              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
