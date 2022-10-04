import React, { useEffect, useState, createRef } from 'react'
import {
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CSpinner,
} from '@coreui/react'

import { Formik } from 'formik'
import { createPost } from 'src/services/postService'

const createpost = () => {
  const [file, setfile] = useState('')
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>ایجادتور</CCardHeader>
        <CCardBody>
          <CRow>
            <Formik
              initialValues={{
                title: '',
                body: '',
                thumbnail: file.name,
              }}
              validate={(values) => {
                const errors = {}
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false)

                values.thumbnail = file

                setTimeout(() => {

                  createPost(values).then((res) => {
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
                setSubmitting

                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <CFormLabel>عنوان</CFormLabel>
                  <CFormInput
                    type="text"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  <CFormLabel>توضیحات</CFormLabel>

                  <CFormTextarea
                    name="body"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.body}
                  />
                  <CFormLabel>عکس</CFormLabel>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      value={values.thumbnail}
                      onChange={(event) => {
                        setfile(event.currentTarget.files[0])
                      }}
                      onBlur={handleBlur}
                      type="file"
                      id="thumbnail"
                    />
                  </CInputGroup>

                  <CButton
                    onClick={() => {
                      handleSubmit
                      setSubmitting(true)
                    }}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <CSpinner
                      component="span"
                      size="sm"
                      hidden={isSubmitting ? false : true}
                      aria-hidden="true"
                    />
                    ثبت
                  </CButton>
                </form>
              )}
            </Formik>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default createpost
