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
  CSpinner,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CCardText,
  CFormSelect,
  CForm,
} from '@coreui/react'
import { Formik, useFormik } from 'formik'

import { deletePost, editPost } from 'src/services/postService'
import { useNavigate } from 'react-router-dom'
import { formDate } from 'src/utils/helpers'
import { useSelector } from 'react-redux'
import swal from 'sweetalert'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DatePicker, { DateObject } from 'react-multi-date-picker'
import * as Yup from 'yup';
import EditPost from './EditPost';

const SinglePost = (data) => {

  const type = useSelector((state) => state.profileState.type)
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [file, setfile] = useState([])
  let id = data.data._id

  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
  const [value, setValue] = useState()
  // console.log(data.data.title);
  const formik = useFormik({
    initialValues: {
      title: data.data.title,
      body: data.data.body,
      capacity: data.data.capacity,
      durationTime: data.data.durationTime,
      date: data.data.date,
      thumbnail: data.data.thumbnail,
      isAccept: 'waiting',
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
    onSubmit: (values, { setSubmitting }) => {
      const files = Array.prototype.slice.call(file)
      values.thumbnail = files
      let data = { id, values }
      console.log(values)
      setTimeout(() => {

        editPost(data).then((res) => {
          if (res.status == 200) {
            console.log(res)
            // navigate('/dashboard/myTours')
            // window.location.reload()
            swal('Good job!', res.data.message, 'success')
            // setSubmitting(false)
          } else {
            swal('خطا', res.data.message, 'error')
          }

        })

      }, 400)
    },
  });

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
              {/* {console.log()} */}
              {formik.touched.title && formik.errors.title ? (
                <div style={{ color: 'red', margin: 10 }} >{formik.errors.title}</div>
              ) : null}

              <CFormLabel style={{ paddingTop: 10 }}>توضیحات</CFormLabel>
              <CFormTextarea
                name="body"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.body}
                {...formik.getFieldProps('body')}
              />
              {formik.touched.body && formik.errors.body ? (
                <div style={{ color: 'red', margin: 10 }} >{formik.errors.body}</div>
              ) : null}
              <CFormLabel style={{ paddingTop: 10 }}>ظرفیت</CFormLabel>
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
                <div style={{ color: 'red', margin: 10 }} >{formik.errors.capacity}</div>
              ) : null}

              <CFormLabel style={{ paddingTop: 15 }}>قیمت(تومان)</CFormLabel>
              <CFormInput
                type="number"
                name="price"
                min={10000}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                required
                {...formik.getFieldProps('price')}
              />
              {formik.touched.price && formik.errors.price ? (
                <div style={{ color: 'red', margin: 10 }} >{formik.errors.price}</div>
              ) : null}

              <CFormLabel style={{ paddingTop: 10 }}>طول تور</CFormLabel>
              <CFormSelect
                name="durationTime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.durationTime}
              >
                <option value="1 روزه">یک روز</option>
                <option value="2 روزه">دو روز</option>
                <option value="3 روزه">سه روز</option>
              </CFormSelect>
              <CFormLabel style={{ paddingTop: 10 }}>دسته بندی</CFormLabel>
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
              <CFormLabel style={{ paddingTop: 10 }}>تاریخ برگذاری</CFormLabel>
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
              <CFormLabel style={{ paddingTop: 10 }}>عکس</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput
                  onChange={(event) => {
                    setfile(event.currentTarget.files)
                  }}
                  onBlur={formik.values.handleBlur}
                  type="file"
                  id="thumbnail"
                  multiple={true}
                  required
                />
              </CInputGroup>
              {/* {type == 'tour' ? ( */}
              <CCardFooter>
                <CButton
                  style={{ padding: 15, margin: 10 }}

                  color="success"
                  onClick={() => {
                    formik.handleSubmit()

                    formik.setSubmitting(true)
                  }}
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  {/* <CSpinner
                    component="span"
                    size="sm"
                    hidden={formik.isSubmitting ? false : true}
                    aria-hidden="true"
                  /> */}
                  ثبت
                </CButton>
                <CButton
                  style={{ padding: 15, margin: 10 }}
                  color="danger"
                  onClick={() => setEditMode(false)}>
                  انصراف
                </CButton>
              </CCardFooter>
              {/* ) : ('')} */}
            </CForm>

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
                  style={{ padding: 15, margin: 10 }}
                  onClick={() => setEditMode(true)}
                  className="justify-content-end"
                  color="warning"
                >
                  ویرایش
                </CButton>
                <CButton
                  style={{ padding: 15, margin: 10 }}
                  color="danger"
                  onClick={() => {
                    swal({
                      title: 'آیا مطمئن به حذف هستید؟',
                      text: 'با حذف کردن دیگر به آن دسترسی نخواهید داشت!',
                      icon: 'warning',
                      buttons: true,
                      dangerMode: true,
                    }).finally(() => {
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
                      .catch(() => {
                        console.log('pox')
                      })
                  }}
                >
                  حذف
                </CButton>
                <CCardText>تاریخ ایجاد : {formDate(data.data.createdAt)}</CCardText>
              </CCardFooter>
            ) : ('')}
          </CCol>
        )}
      </CRow>
    </CCard>
  )
}
export default SinglePost
