import React, { useRef, useState } from 'react'
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
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLocationPin, cilLockLocked, cilUser } from '@coreui/icons'
import { Formik, useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { register } from 'src/services/usersService'
import swal from 'sweetalert'
import * as Yup from 'yup'

const Register = () => {
  const navigate = useNavigate()
  // const [type, setType] = useState("tour")
  const select = useRef()
  const formik = useFormik({
    initialValues: {
      name: '',
      city: '',
      email: '',
      password: '',
      confirmPassword: '',
      type: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required('لطفا نام باشگاه تفریحی خود را وارد کنید !')
        .max(30, 'تعداد کاراکتر های وارد شده بیشتر از حد مجاز است !')
        .min(5, 'تعداد کاراکتر های وارد شده کمتر از حد مجاز است !'),

      email: Yup.string()
        .email('لطفا ایمیل معتبر وارد نمایید !')
        .required('لطفا ایمیل خود را وارد کنید !'),
      password: Yup.string().required('لطفا رمز خود را وارد کنید !'),
      confirmPassword: Yup.string().required('لطفا رمز خود را دوباره وارد کنید !'),
    }),

    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        values.type = 'tour'
        values.city = select.current.value
        register(values).then((res) => {
          if (res.status == 201) {
            navigate('/login')
          } else {
            swal('خطا', res.data.message, 'error')
          }
        })
        setSubmitting(false)
      }, 400)
    },
  })

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
                      placeholder="نام باشگاه تفریحی"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="name"
                      value={formik.values.name}
                      autoComplete="name"
                      {...formik.getFieldProps('name')}
                    />
                  </CInputGroup>
                  {formik.touched.name && formik.errors.name ? (
                    <div style={{ color: 'red', margin: 10 }}>{formik.errors.name}</div>
                  ) : null}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLocationPin} />
                    </CInputGroupText>
                    <CFormSelect
                      name="durationTime"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      ref={select}
                    >
                      <option value="Tabriz">تبریز</option>
                      <option value="Tehran">تهران</option>
                      <option value="Alborz">البرز</option>
                    </CFormSelect>
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
                  </CInputGroup>
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: 'red', margin: 10 }}>{formik.errors.email}</div>
                  ) : null}
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
                      <div style={{ color: 'red', margin: 10 }}>{formik.errors.password}</div>
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
                      <div style={{ color: 'red', margin: 10 }}>
                        {formik.errors.confirmPassword}
                      </div>
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
                  <div className="d-grid">
                    <Link to="/login">
                      <CButton color="primary btn block" className="mt-3" active tabIndex={-1}>
                        {'ورود'}
                      </CButton>
                    </Link>
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
