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
  CFormSelect,
} from '@coreui/react'

import { Formik } from 'formik'
import { createPost } from 'src/services/postService'

const createpost = () => {
  const [file, setfile] = useState([])
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
                date: '',
                durationTime: '1day',
                capacity: 0,
              }}
              validate={(values) => {
                const errors = {}
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false)
                const files = Array.prototype.slice.call(file)

                values.thumbnail = files
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
                setSubmitting,
                resetForm

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
                  <CFormLabel>ظرفیت</CFormLabel>
                  <CFormInput
                    type="number"
                    name="capacity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.capacity}
                  />
                  <CFormLabel>تاریخ</CFormLabel>
                  <CFormInput
                    type="date"
                    name="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                  />
                  <CFormLabel>طول تور</CFormLabel>
                  <CFormSelect name="durationTime"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.durationTime}>
                    <option value="1day">یک روز</option>
                    <option value="2days">دوروز</option>
                    <option value="3days">سه روز</option>
                  </CFormSelect>
                  
                  <CFormLabel>عکس</CFormLabel>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      value={values.thumbnail}
                      onChange={(event) => {
                        setfile(event.currentTarget.files)
                      }}
                      onBlur={handleBlur}
                      type="file"
                      multiple={true}
                      id="thumbnail"
                    />
                  </CInputGroup>

                  <CButton
                    onClick={() => {
                      handleSubmit
                      setSubmitting(true)
                      // resetForm({
                      //   title: '',
                      //   body: '',
                      //   thumbnail: file.name,
                      //   date: '',
                      //   durationTime: '1day',
                      //   capacity: 0,
                      // })
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
