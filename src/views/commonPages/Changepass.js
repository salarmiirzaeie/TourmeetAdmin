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
import { Formik, useFormik } from 'formik'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { recievecode, reserPassword } from 'src/services/usersService'
import swal from 'sweetalert'

const changepass = () => {
  const navigate = useNavigate()
  // const [type, setType] = useState("tour")
  const select = useRef()
  const route = useParams()
  const formik = useFormik({
    initialValues: { newPassword: '', confirmPassword: '' },

    // validationSchema: Yup.object({
    //   name: Yup.string()
    //     .required('لطفا نام باشگاه تفریحی خود را وارد کنید !')
    //     .max(30, 'تعداد کاراکتر های وارد شده بیشتر از حد مجاز است !')
    //     .min(5, 'تعداد کاراکتر های وارد شده کمتر از حد مجاز است !'),

    //   email: Yup.string()
    //     .email('لطفا ایمیل معتبر وارد نمایید !')
    //     .required('لطفا ایمیل خود را وارد کنید !'),
    //   password: Yup.string().required('لطفا رمز خود را وارد کنید !'),
    //   confirmPassword: Yup.string().required('لطفا رمز خود را دوباره وارد کنید !'),
    // }),

    onSubmit: (values, { setSubmitting }) => {
      setTimeout(async () => {
        values = { ...values, token: route.token }

        reserPassword(values).then((res) => {
          if (res.status === 200) {
           navigate('/login')
          } else {
          swal(res.data.message)
          }
        })
      }, 200)
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
                  <p className="text-medium-emphasis"> لطفا رمز جدیدروواردکنید </p>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      type="password"
                      name="code"
                      placeholder="رمزعبور"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.newPassword}
                      {...formik.getFieldProps('newPassword')}
                    />
                  </CInputGroup>
                  {formik.touched.newPassword && formik.errors.newPassword ? (
                    <div style={{ color: 'red', margin: 10 }}>{formik.errors.newPassword}</div>
                  ) : null}
                  <CInputGroup className="mb-3">
                    <CFormInput
                      type="password"
                      name="code"
                      placeholder="تکراررمزعبور"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                      {...formik.getFieldProps('confirmPassword')}
                    />
                  </CInputGroup>
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div style={{ color: 'red', margin: 10 }}>{formik.errors.confirmPassword}</div>
                  ) : null}
                  <div className="d-grid">
                    <CButton
                      type="submit"
                      disabled={formik.isSubmitting}
                      onClick={formik.handleSubmit}
                      color="success"
                    >
                      {'ارسال '}
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

export default changepass
