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
  const [value, setValue] = useState();

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
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .max(30, 'تعداد کاراکتر های وارد شده بیشتر از حد مجاز است !')
        .min(5, 'تعداد کاراکتر های وارد شده کمتر از حد مجاز است !')
        .required('لطفا عنوان تور را وارد کنید !'),
      body: Yup.string()
        .max(500, 'تعداد کاراکتر های وارد شده بیشتر از حد مجاز است !')
        .min(10, 'تعداد کاراکتر های وارد شده کمتر از حد مجاز است !')
        .required('لطفا توضیحات را وارد کنید  !'),
      capacity: Yup.number()
        .max(1000, 'ظرفیت تور بیشتر از حد مجاز است !')
        .required('لطفا ظرفیت تور را وارد کنید !'),
      price: Yup.number()
        .max(10000000, 'قیمت بیشتر از حد مجاز است !')
        .required('لطفا قیمت را وارد کنید !'),
      date: Yup.number()
        .required('لطفا تاریخ تور را انتخاب کنید !'),
      durationTime: Yup.string()
        .required('لطفا بازه تور را انتخاب کنید !'),
      type: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('لطفا نوع تور را انتخاب کنید !'),
    }),
    onSubmit: values => {
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
                    {...formik.getFieldProps('body')}
                  />
                  {formik.touched.body && formik.errors.body ? (
                    <div style={{ color: 'red', margin: 10 }} >{formik.errors.body}</div>
                  ) : null}
                  <CFormLabel>ظرفیت</CFormLabel>
                  <CFormInput
                    type="number"
                    name="capacity"
                    min={10}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={values.capacity}
                    {...formik.getFieldProps('capacity')}
                  />
                  {formik.touched.capacity && formik.errors.capacity ? (
                    <div style={{ color: 'red', margin: 10 }} >{formik.errors.capacity}</div>
                  ) : null}
                  <CFormLabel>قیمت(تومان)</CFormLabel>
                  <CFormInput
                    type="number"
                    name="price"
                    min={10000}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={values.price}
                    {...formik.getFieldProps('price')}
                  />
                  {formik.touched.price && formik.errors.price ? (
                    <div style={{ color: 'red', margin: 10 }} >{formik.errors.price}</div>
                  ) : null}
                  <CFormLabel>تاریخ</CFormLabel>
                  <br />
                  <DatePicker className='form-control input-group-lg'
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      height: "35px",
                      textAlign: "center",
                      opacity: 0.5,
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

                  <CButton onClick={() => formik.handleSubmit} type="submit" disabled={formik.isSubmitting}>
                    <CSpinner
                      hidden={!formik.isSubmitting}
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
