import React, { useEffect, useState } from 'react'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardImage,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { profile } from 'src/state-management/action/profileAction'

import { cilDelete, cilMonitor, cilPlus, cilRecycle, cilStream, cilTrash } from '@coreui/icons'
import { useRef } from 'react'
import { Formik, useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import CIcon from '@coreui/icons-react'
import {
  deleteprofile,
  editProfile,
  uploadprofilephoto,
  userProfile,
} from 'src/services/usersService'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert'
const editProfileAdmin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const avatar = useRef()
  const [file, setfile] = useState('')
  const [status, setstaus] = useState(0)

  const [profilee, setProfile] = useState({})

  useEffect(() => {
    userProfile().then((res) => {
      if (res.status === 200) {
        setProfile(res.data)
      }
    })
  }, [status])
  const profile = profilee
  const formik = useFormik({
    initialValues: profile,
    enableReinitialize: true,

    // validationSchema: Yup.object({
    //   title: Yup.string()
    //     .max(30, 'تعداد کاراکتر های وارد شده بیشتر از حد مجاز است !')
    //     .min(5, 'تعداد کاراکتر های وارد شده کمتر از حد مجاز است !')
    //     .required('لطفا عنوان تور را وارد کنید !'),
    //   body: Yup.string()
    //     .max(500, 'تعداد کاراکتر های وارد شده بیشتر از حد مجاز است !')
    //     .min(10, 'تعداد کاراکتر های وارد شده کمتر از حد مجاز است !')
    //     .required('لطفا توضیحات را وارد کنید  !'),
    //   capacity: Yup.number()
    //     .max(1000, 'ظرفیت تور بیشتر از حد مجاز است !')
    //     .required('لطفا ظرفیت تور را وارد کنید !'),
    //   price: Yup.number()
    //     .max(10000000, 'قیمت بیشتر از حد مجاز است !')
    //     .required('لطفا قیمت را وارد کنید !'),
    //   date: Yup.number()
    //     .required('لطفا تاریخ تور را انتخاب کنید !'),
    //   durationTime: Yup.string()
    //     .required('لطفا بازه تور را انتخاب کنید !'),
    //   type: Yup.string()
    //     .max(10, 'Must be 10 characters or less')
    //     .required('لطفا نوع تور را انتخاب کنید !'),
    // }),
    onSubmit: (values, { setSubmitting }) => {
      values.email = values.email.toLowerCase()

      editProfile(values).then((res) => {
        setTimeout(() => {
          if (res.status == 200) {
            swal('Good job!', res.data.message, 'success')
            navigate('/dashboard/profileAdmin')
            dispatch(profile(res.data))
            window.location.reload()
            // navigate(`/dashboard`)
          } else {
            swal('خطا', res.data.message, 'error')
          }
          // setSubmitting(false)
        }, 400)
      })
    },
  })

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>پروفایل عکس</CCardHeader>
            <CCardBody xs={2} md={4} xl={4}>
              <CRow>
                {profile.profilePhotos == null || profile.profilePhotos.length === 0 ? (
                  <CCol xs={3} md={3} xl={4}>
                    <CCardImage
                      className="  w-50"
                      orientation="top"
                      src={`https://api.tourmeet.ir/uploads/defaultProfile1.jpg`}
                    />
                  </CCol>
                ) : (
                  profile.profilePhotos &&
                  profile.profilePhotos.map((item, i) => (
                    <CCol key={i} xs={6} md={4} xl={3}>
                      <CCardImage
                        orientation="top"
                        src={`https://api.tourmeet.ir/uploads/profilePhotos/${item.name}`}
                      />
                      <CButton
                        onClick={() => {
                          deleteprofile(item.name).then((res) => {
                            if (res.status === 200) {
                              setstaus(Math.random(1))
                            }
                          })
                        }}
                        className="btn btn-danger h-auto w-100 mb-2"
                      >
                        <CIcon icon={cilTrash} />
                      </CButton>
                    </CCol>
                  ))
                )}
              </CRow>
            </CCardBody>
            <CCol className="text-center" xs={12} md={12} xl={12}>
              <CCardBody>
                <Formik
                  initialValues={{
                    image1: '',
                  }}
                  onSubmit={async (values) => {
                    const files = Array.prototype.slice.call(file)

                    setTimeout(async () => {
                      await uploadprofilephoto(files).then(async (res) => {
                        if (res.status === 200) {
                          window.location.reload()
                        } else {
                          swal('ops!', res.data.message, 'failure')
                        }
                      })
                    }, 1000)
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
                    setFieldValue,
                  }) => (
                    <CInputGroup >
                      <CButton onClick={handleSubmit} component="label" htmlFor="inputGroupFile01">
                        بارگذاری
                      </CButton>
                      <CFormInput
                        value={formik.values.thumbnail}
                        onChange={(event) => {
                          setfile(event.currentTarget.files)
                        }}
                        onBlur={formik.handleBlur}
                        type="file"
                        multiple={true}
                        id="thumbnail"
                        required
                      />
                    </CInputGroup>
                  )}
                </Formik>
              </CCardBody>
            </CCol>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>پروفایل</CCardHeader>

            <CCol xs={12} md={12} xl={12}>
              <CCardBody>
                <CForm onSubmit={formik.handleSubmit}>
                  <CFormLabel>نام</CFormLabel>
                  <CFormInput
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  // disabled={editmode}
                  />
                  <CFormLabel>ایمیل</CFormLabel>
                  <CFormInput
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  // disabled={editmode}
                  />
                  <CFormLabel>تلفن</CFormLabel>
                  <CFormInput
                    type="text"
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                  // disabled={editmode}
                  />
                  <CFormLabel>درباره</CFormLabel>
                  <CFormTextarea
                    name="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                  // disabled={editmode}
                  />
                  <CFormInput
                    value={formik.values.profilePhoto}
                    onBlur={formik.handleBlur}
                    type="file"
                    name="profilePhoto"
                    hidden={true}
                    ref={avatar}
                    onChange={(event) => {
                      setfile(event.currentTarget.files[0])
                    }}
                  />
                  <div className="mt-4">
                    <CButton
                      style={{ padding: 15, margin: 10 }}
                      onClick={formik.handleSubmit}
                      color="info"
                      type="submit"
                    >
                      ثبت
                    </CButton>
                    <CButton
                      style={{ padding: 15, margin: 10 }}
                      onClick={() => navigate('/dashboard/profileAdmin')}
                      color="danger"
                    >
                      انصراف
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCol>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default editProfileAdmin
