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

const profileAdmin = () => {
  const avatar = useRef()
  const [file, setfile] = useState('')
  const [editmode, setEditmode] = useState(true)
  const profile = useSelector((state) => state.profileState)
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
                      name: profile.name,
                      email: profile.userEmail,
                      description: profile.description,
                      profilePhoto: '',
                    }}
                    validate={(values) => {
                      const errors = {}
                      return errors
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      // values.thumbnail = file
                      // let data = { id, values }
                      // console.log(values)
                      // setTimeout(() => {
                      //   editPost(data).then((res) => {
                      //     navigate('/dashboard/myTours')
                      //   })
                      // }, 400)
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
                          }}
                        />
                      </form>
                    )}
                  </Formik>
                </CCardBody>
              </CCol>
              <CCol xs={12} md={3} xl={3}>
                <CCardImage
                  className="rounded-circle"
                  orientation="top"
                  src={`http://localhost:3333/uploads/${profile.profilePhoto}`}
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
            <CCardFooter>
              <CButton
                hidden={!editmode}
                onClick={() => setEditmode(false)}
                color="success"
              >
                ویرایش
              </CButton>
              <CButton
                hidden={editmode}
                // onClick={() => setEditmode(false)}
                color="info"
                type="submit"
              >
                ثبت
              </CButton>
              <CButton onClick={() => setEditmode(true)} hidden={editmode} color="danger">
                انصراف
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default profileAdmin
