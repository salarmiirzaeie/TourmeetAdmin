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
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import DatePicker, { DateObject } from 'react-multi-date-picker'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'

const createpost = () => {
  const [btnReset, setBtnReset] = useState(false)
  const [file, setfile] = useState([])
  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
  const [value, setValue] = useState();
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      capacity: '',
      price: '',
      date: Date.now(),
      durationTime: 1,
      type: 'forest',
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
      // durationTime: Yup.string()
      //   .required('لطفا بازه تور را انتخاب کنید !'),
      type: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('لطفا نوع تور را انتخاب کنید !'),
    }),
    onSubmit: (values) => {
      const files = Array.prototype.slice.call(file)
      values.thumbnail = files
      values.date = value?.toDate()
      console.log(values);
      createPost(values).then((res) => {
        setTimeout(() => {
          if (res.status == 200) {
            // swal('Good job!', res.data.message, 'success')
            swal({
              icon: 'success',
              title: 'تور شما با موفقیت ایجاد شد',
              // text: 'تور شما با موفقیت ایجاد شد'
            })
            console.log(res.data.post);
            formik.resetForm()
            navigate(`/dashboard/postPage/${res.data.post._id}`)

          } else {
            swal('خطا', res.data.message, 'error')
          }
        }, 400)
      })
    },
  })

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>ایجادتور</CCardHeader>
        <CCardBody>
          <CRow>
            <CForm onSubmit={formik.handleSubmit}>
              <CFormLabel>عنوان</CFormLabel>
              <CFormInput
                type="text"
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                {...formik.getFieldProps('title')}
              />
              {formik.touched.title && formik.errors.title ? (
                <div style={{ color: 'red', margin: 10 }}>{formik.errors.title}</div>
              ) : null}
              <CFormLabel style={{ paddingTop: 15 }}>توضیحات</CFormLabel>
              <CFormTextarea
                name="body"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.body}
                {...formik.getFieldProps('body')}
              />
              {formik.touched.body && formik.errors.body ? (
                <div style={{ color: 'red', margin: 10 }}>{formik.errors.body}</div>
              ) : null}
              <CFormLabel style={{ paddingTop: 15 }}>ظرفیت</CFormLabel>
              <CFormInput
                type="number"
                name="capacity"
                min={10}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.capacity}
                {...formik.getFieldProps('capacity')}
              />
              {formik.touched.capacity && formik.errors.capacity ? (
                <div style={{ color: 'red', margin: 10 }}>{formik.errors.capacity}</div>
              ) : null}
              <CFormLabel style={{ paddingTop: 15 }}>قیمت(تومان)</CFormLabel>
              <CFormInput
                type="number"
                name="price"
                min={10000}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                {...formik.getFieldProps('price')}
              />
              {formik.touched.price && formik.errors.price ? (
                <div style={{ color: 'red', margin: 10 }}>{formik.errors.price}</div>
              ) : null}
              <CFormLabel style={{ paddingTop: 15 }}>طول تور</CFormLabel>
              <CFormSelect
                name="durationTime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.durationTime}
              >
                <option value={1}>1 روز</option>
                <option value={2}>2 روز</option>
                <option value={3}>3 روز</option>
                <option value={4}>4 روز</option>
                <option value={5}>5 روز</option>
                <option value={6}>6 روز</option>
                <option value={10}>10 روز</option>
                <option value={12}>12 روز</option>
                <option value={7}>1 هفته</option>
                <option value={14}>2 هفته</option>
                <option value={21}>3 هفته</option>
                <option value={30}>1 ماه</option>
              </CFormSelect>
              <CFormLabel style={{ paddingTop: 15 }}>دسته بندی</CFormLabel>
              <CFormSelect
                name="type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.type}
              >
                <option value="forest">طبیعت گردی</option>
                <option value="mountain">کوهنوردی</option>
                <option value="offroad">آفرود</option>
                <option value="sea">دریا</option>
                <option value="desert">کویر</option>
                <option value="historical">اماکن تاریخی</option>
              </CFormSelect>
              <CFormLabel style={{ paddingTop: 15 }}>تاریخ برگذاری</CFormLabel>
              <br />
              <DatePicker
                className="form-control input-group-lg"
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  height: '35px',
                  textAlign: 'center',
                  opacity: 0.5,
                }}
                containerStyle={{
                  width: '100%',
                }}
                minDate={new DateObject({ calendar: persian }).set('day')}
                weekDays={weekDays}
                inputClass="custom-input"
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-center"
                value={value}
                onChange={setValue}
                required
              />
              <CFormLabel style={{ paddingTop: 15 }}>عکس</CFormLabel>

              <CInputGroup className="mb-3">
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

              <CButton
                onClick={() => formik.handleSubmit}
                type="submit"
                disabled={formik.isSubmitting}
              >
                <CSpinner
                  // hidden={formik.isSubmitting ? false : true}
                  hidden={!btnReset}
                  component="span"
                  size="sm"
                  aria-hidden="true"
                />
                ثبت
              </CButton>
            </CForm>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default createpost
