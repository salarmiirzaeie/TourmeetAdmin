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
  CListGroup,
} from '@coreui/react'

import { Field, Formik, useFormik } from 'formik'
import { createPost } from 'src/services/postService'
import swal from 'sweetalert'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DatePicker, { DateObject } from 'react-multi-date-picker'
import * as Yup from 'yup';


const createpost = () => {
  const [file, setfile] = useState([])
  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
  const [value, setValue] = useState()

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      capacity: '',
      price: '',
      date: Date.now(),
      durationTime: '1day',
      type: '',
      thumbnail: file.name
    }, validationSchema: Yup.object({
      title: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('وارد کردن عنوان الزامیست دیوص !'),
      body: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Required'),
      capacity: Yup.number()
        .max(4, 'Must be 4 characters or less')
        .required('Required'),
      price: Yup.number()
        .max(8, 'Must be 8 characters or less')
        .required('Required'),
      date: Yup.date()
        .max(200, 'Must be 200 characters or less')
        .required('Required'),
      durationTime: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('Required'),
      type: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('Required'),

    }), onSubmit: values => {
      const files = Array.prototype.slice.call(file)
      values.thumbnail = files
      values.date = value?.toDate?.().toString()
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
    },
  });
  //

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
                date: Date.now(),
                durationTime: '1day',
                capacity: '',
                type: '',
                price: ''
              }}
              validate={(values) => {
                const errors = {}
                return errors
              }}

            // onSubmit={(values, { resetForm, setSubmitting }) => {
            //   const files = Array.prototype.slice.call(file)
            //   values.thumbnail = files
            //   values.date = value?.toDate?.().toString()
            //   console.log(values)

            //   createPost(values).then((res) => {
            //     setTimeout(() => {
            //       if (res.status == 200) {
            //         swal('Good job!', res.data.message, 'success')
            //         resetForm()
            //       } else {
            //         swal('خطا', res.data.message, 'error')
            //       }
            //     }, 400)
            //   })
            // }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <CForm onSubmit={formik.handleSubmit}>
                  <CFormLabel>عنوان</CFormLabel>
                  <CFormInput
                    type="text"
                    name="title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={values.title}
                    {...formik.getFieldProps('title')}

                  />
                  {formik.touched.title && formik.errors.title ? (
                    <div style={{ color: 'red', margin: 10 }} >{formik.errors.title}</div>
                  ) : null}
                  <CFormLabel>توضیحات</CFormLabel>
                  <CFormTextarea
                    name="body"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={values.body}
                  />
                  <CFormLabel>ظرفیت</CFormLabel>
                  <CFormInput
                    type="number"
                    name="capacity"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={values.capacity}
                  />
                  <CFormLabel>قیمت(تومان)</CFormLabel>
                  <CFormInput
                    type="number"
                    name="price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={values.price}
                  />
                  <CFormLabel>تاریخ</CFormLabel>
                  <br />
                  <DatePicker className='form-control input-group-lg'
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      height: "35px",
                      textAlign: "center",
                      opacity: 0.5


                    }}
                    containerStyle={{
                      width: "100%"
                    }}
                    minDate={new DateObject({ calendar: persian }).set("day",)}
                    weekDays={weekDays}
                    inputClass="custom-input"
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-center"
                    value={value}
                    onChange={setValue}
                  // render={(value, openCalendar) => {
                  //   return (
                  //     <CFormInput onClick={openCalendar}>
                  //       {value}
                  //     </CFormInput>
                  //   )
                  // }}
                  />
                  <br />
                  <CFormLabel>طول تور</CFormLabel>
                  <CFormSelect
                    name="durationTime"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={values.durationTime}
                  >
                    <option value="1day">یک روز</option>
                    <option value="2days">دو روز</option>
                    <option value="3days">سه روز</option>
                  </CFormSelect>
                  <CFormLabel>دسته بندی</CFormLabel>
                  <CFormSelect
                    name="type"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                      onBlur={formik.handleBlur}
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
