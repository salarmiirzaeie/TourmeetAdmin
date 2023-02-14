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
import { profile } from 'src/state-management/action/profileAction'

import { cilDelete, cilMonitor, cilPlus, cilStream } from '@coreui/icons'
import { useRef } from 'react'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import CIcon from '@coreui/icons-react'
import { editProfile } from 'src/services/usersService'

const profileAdmin = () => {
  const dispatch = useDispatch()
  const avatar = useRef()
  const [file, setfile] = useState('')
  const [editmode, setEditmode] = useState(true)
  const profilee = useSelector((state) => state.profileState)

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>پروفایل</CCardHeader>
            <CRow>
              <CCol xs={12} md={9} xl={9}>
                <CCardBody>
                  <Formik
                    initialValues={{
                      name: profilee.name,
                      email: profilee.userEmail,
                      description: profilee.description,
                      profilePhoto: file,
                      phoneNumber: '',
                    }}
                    validate={(values) => {
                      const errors = {}
                      return errors
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      editProfile(values).then((res) => {
                        setTimeout(() => {
                          if (res.status == 200) {
                            // console.log(res.data)
                            dispatch(profile(res.data))
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
                      setSubmitting,

                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <CFormLabel>نام</CFormLabel>
                        <CFormInput
                          type="text"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          disabled={editmode}
                        />
                        <CFormLabel>ایمیل</CFormLabel>
                        <CFormInput
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          disabled={editmode}
                        />
                        <CFormLabel>تلفن</CFormLabel>
                        <CFormInput
                          type="text"
                          name="phoneNumber"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                          disabled={editmode}
                        />
                        <CFormLabel>درباره</CFormLabel>
                        <CFormTextarea
                          name="description"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.description}
                          disabled={editmode}
                        />
                        <CFormInput
                          value={values.profilePhoto}
                          onBlur={handleBlur}
                          type="file"
                          name="profilePhoto"
                          hidden={true}
                          ref={avatar}
                          onChange={(event) => {
                            setfile(event.currentTarget.files[0])
                            // console.log(event.currentTarget.files[0])
                          }}
                        />
                        <div className="mt-4">
                          <CButton
                            hidden={!editmode}
                            onClick={() => setEditmode(false)}
                            color="success"
                          >
                            ویرایش
                          </CButton>
                          <CButton
                            hidden={editmode}
                            onClick={handleSubmit}
                            color="info"
                            type="submit"
                          >
                            ثبت
                          </CButton>
                          <CButton
                            onClick={() => setEditmode(true)}
                            hidden={editmode}
                            color="danger"
                          >
                            انصراف
                          </CButton>
                        </div>
                      </form>
                    )}
                  </Formik>
                </CCardBody>
              </CCol>
              <CCol xs={12} md={3} xl={3}>
                <CCardImage
                  className="rounded-circle"
                  orientation="top"
                  src={`http://api.tourino-panel.ir/uploads/${profilee.profilePhoto}`}
                />
                <CButton
                  hidden={editmode}
                  onClick={() => {
                    avatar.current.click()
                  }}
                  className="rounded-circle"
                >
                  <CIcon size="lg" icon={cilPlus} />
                </CButton>
              </CCol>
            </CRow>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default profileAdmin
