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

import { Formik } from 'formik'
import { createPost } from 'src/services/postService'
import swal from 'sweetalert'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DatePicker, { DateObject } from 'react-multi-date-picker'


function CustomRangeInput({ openCalendar, value }) {
  let from = value[0] || "";
  let to = value[1] || "";

  value = from && to ? "از " + from + "، تا " + to : from;
  return (
    <input
      style={{
        width: "100%",
      }}

      onFocus={openCalendar}
      value={value}
      readOnly
    />
  )
}
const createpost = () => {
  const [file, setfile] = useState([])

  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

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
                type: '',
                price: 0
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
                  <br />

                  <DatePicker
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      height: "26px",
                      textAlign: "center"
                    }}
                    containerStyle={{
                      width: "100%"
                    }}
                    minDate={new DateObject({ calendar: persian }).set("day",)}
                    weekDays={weekDays}
                    inputClass="custom-input"
                    range
                    eachDaysInRange
                    render={<CustomRangeInput />}
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-center"

                  />
                  {/* <CFormInput
                    type="date"
                    name="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                  /> */}
                  <br />
                  <CFormLabel>طول تور</CFormLabel>
                  <CFormSelect
                    name="durationTime"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.durationTime}
                  >
                    <option value="1day">یک روز</option>
                    <option value="2days">دو روز</option>
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
