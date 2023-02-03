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
  CForm,
} from '@coreui/react'

import { Formik } from 'formik'
import { createPost } from 'src/services/postService'
import swal from 'sweetalert'

const createpost = () => {
  const [file, setfile] = useState([])
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
                type:'',
                price:0
              }}
              validate={(values) => {
                const errors = {}
                return errors
              }}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                const files = Array.prototype.slice.call(file)
                values.thumbnail = files
                console.log(values)
                createPost(values).then((res) => {
                  setTimeout(() => {
                    if (res.status == 200) {
                      swal('Good job!', res.data.message, 'success')
                      resetForm()
                    } else {
                      swal('خطا', res.data.message, 'error')
                    }
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
                

                /* and other goodies */
              }) => (
                <CForm onSubmit={handleSubmit}>
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
                  <CFormLabel>قیمت(تومان)</CFormLabel>
                  <CFormInput
                    type="number"
                    name="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
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
                  <CFormSelect
                    name="durationTime"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.durationTime}
                  >
                    <option value="1day">یک روز</option>
                    <option value="2days">دوروز</option>
                    <option value="3days">سه روز</option>
                  </CFormSelect>
                  <CFormLabel>دسته بندی</CFormLabel>
                  <CFormSelect
                    name="type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.type}
                  >
                    <option value=""></option>
                    <option value="forest">طبیعت گردی</option>

                    <option value="mountain">کوهنوردی</option>
                    <option value="offroad">آفرود</option>
                    <option value="sea">دریا</option>
                    <option value="desert">کویر</option>
                    <option value="historical">اماکن تاریخی</option>
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

                  <CButton onClick={() => handleSubmit} type="submit" disabled={isSubmitting}>
                    <CSpinner
                      hidden={!isSubmitting}
                      component="span"
                      size="sm"
                      aria-hidden="true"
                    />
                    ثبت
                  </CButton>
                </CForm>
              )}
            </Formik>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default createpost
