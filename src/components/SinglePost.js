import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CPagination,
  CRow,
  CPaginationItem,
  CCarousel,
  CCarouselItem,
  CListGroup,
  CListGroupItem,
  CBadge,
  CCardFooter,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CSpinner,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CCardText,
  CFormSelect,
} from '@coreui/react'
import { Formik } from 'formik'

import { deletePost, editPost } from 'src/services/postService'
import { useNavigate } from 'react-router-dom'
import { formDate } from 'src/utils/helpers'
import { useSelector } from 'react-redux'
import swal from 'sweetalert'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DatePicker, { DateObject } from 'react-multi-date-picker'
const SinglePost = (data) => {
  const type = useSelector((state) => state.profileState.type)
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const [file, setfile] = useState([])
  let id = data.data._id


  function CustomRangeInput({ openCalendar, value }) {
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

  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
  const [value, setValue] = useState()


  return (
    <CCard>
      <CRow className="p-2">
        {/* <CCardHeader>تورها </CCardHeader> */}
        <CCol xs={12} md={6} xl={6}>
          {data.data.thumbnail ? (
            <CCard>
              <CCarousel transition='crossfade' pause={'hover'} indicators controls>
                {data.data.thumbnail.map((name, i) => (
                  <CCarouselItem key={i}>
                    <img
                      className="d-block w-50 rounded mx-auto"
                      src={`http://localhost:3333/uploads/thumbnails/${name}`}
                    />
                  </CCarouselItem>
                ))}
              </CCarousel>
            </CCard>
          ) : (
            <CSpinner />
          )}
        </CCol>
        {editMode ? (
          <CCol xs={12} md={6} xl={6}>
            <Formik
              initialValues={{
                title: data.data.title,
                body: data.data.body,
                thumbnail: data.data.thumbnail,
                isAccept: 'waiting',
                capacity: data.data.capacity,
                durationTime: data.data.durationTime,
                date: data.data.date,
              }}
              validate={(values) => {
                const errors = {}
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log("fuck")
                const files = Array.prototype.slice.call(file)
                values.thumbnail = files
                let data = { id, values }
                console.log(values)
                setTimeout(() => {
                  editPost(data).then((res) => {
                    console.log(res)
                    // navigate('/dashboard/myTours')
                    // window.location.reload()
                    swal('Good job!', res.data.message, 'success')
                    setSubmitting(false)
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
                    name="capacity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.capacity}
                  />
                  <CFormLabel>طول تور</CFormLabel>

                  <CFormSelect
                    name="durationTime"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.durationTime}
                  >
                    <option value="1 روزه">یک روز</option>
                    <option value="2 روزه">دو روز</option>
                    <option value="3 روزه">سه روز</option>
                  </CFormSelect>
                  <CFormLabel>تاریخ برگذاری</CFormLabel>

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
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-center"
                    value={value}
                    onChange={setValue}

                  />

                  {/* <CFormInput
                    type="date"
                    name="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                  /> */}
                  <CFormLabel>عکس</CFormLabel>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={(event) => {
                        setfile(event.currentTarget.files)
                      }}
                      onBlur={handleBlur}
                      type="file"
                      id="thumbnail"
                      multiple={true}
                    />
                  </CInputGroup>
                  {type == 'tour' ? (
                    <CCardFooter>
                      <CButton
                        color="success"
                        onClick={() => {
                          handleSubmit()

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
                      <CButton color="danger" onClick={() => setEditMode(false)}>
                        انصراف
                      </CButton>
                    </CCardFooter>
                  ) : (
                    ''
                  )}
                </form>
              )}
            </Formik>
          </CCol>
        ) : (
          <CCol xs={12} md={6} xl={6} className="">
            <CListGroup className="rounded-4">
              <CListGroupItem className="justify-content-between d-flex">
                <CCardText className="text-dark m-0">عنوان</CCardText>
                <p className="m-0"> {data.data.title}</p>
              </CListGroupItem>
              <CListGroupItem className="justify-content-between d-flex">
                <CCardText className="text-dark m-0">ظرفیت</CCardText>
                <p className="m-0"> {data.data.capacity}</p>
              </CListGroupItem>
              <CListGroupItem className="justify-content-between d-flex">
                <CCardText className="text-dark m-0">تاریخ</CCardText>
                <p className="m-0"> {formDate(data.data.date)}</p>
              </CListGroupItem>
              <CListGroupItem className="justify-content-between d-flex">
                <CCardText className="text-dark m-0">مدت زمان</CCardText>
                <p className="m-0"> {data.data.durationTime}</p>
              </CListGroupItem>
              <CListGroupItem className="justify-content-between d-flex">
                <CCardText className="text-dark m-0">قیمت</CCardText>
                <p className="m-0"> {data.data.price}</p>
              </CListGroupItem>


              <CListGroupItem style={{ height: "150px" }}>
                <CCardText className="text-dark m-0">درباره</CCardText>
              </CListGroupItem>
            </CListGroup>
            {type == 'tour' ? (
              <CCardFooter>
                <CButton
                  onClick={() => setEditMode(true)}
                  className="justify-content-end"
                  color="warning"
                >
                  ویرایش
                </CButton>
                <CButton
                  color="danger"
                  onClick={() => {
                    swal({
                      title: 'آیامطمئن به حذف هستید؟',
                      text: 'باحذف کردن دیگربه آن دسترسی نخواهیدداشت!',
                      icon: 'warning',
                      buttons: true,
                      dangerMode: true,
                    }).then(() => {
                      deletePost(data.data._id)
                        .then((res) => {
                          if (res.status == 200) {
                            navigate('/dashboard/myTours')
                          } else {
                            swal(res.data.message, 'error')
                          }
                        })
                        .catch(() => { })
                    })
                  }}
                >
                  حذف
                </CButton>
                <CCardText>{formDate(data.data.createdAt)}</CCardText>
              </CCardFooter>
            ) : (
              ''
            )}
          </CCol>
        )}
      </CRow>
    </CCard>
  )
}
export default SinglePost
