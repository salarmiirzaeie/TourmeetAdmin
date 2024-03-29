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
  CCardImage,
} from '@coreui/react'
import { Formik, useFormik } from 'formik'

import { deletePost, editPost } from 'src/services/postService'
import { useNavigate } from 'react-router-dom'
import { formDate, persianDuration, persianType } from 'src/utils/helpers'
import { useSelector } from 'react-redux'
import swal from 'sweetalert'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import DatePicker, { DateObject } from 'react-multi-date-picker'
import * as Yup from 'yup'
import CIcon from '@coreui/icons-react'
import { cilTrash } from '@coreui/icons'
import { deletethumb } from 'src/services/adminService'

const SinglePost = ({ data }) => {
  const thisDay = new DateObject({ calendar: persian }).set("date");
  const navigate = useNavigate()
  const [editMode, setEditMode] = useState(false)
  const [file, setfile] = useState([])

  let id = data._id
  const weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']
  const [value, setValue] = useState()
  const [endvalue, setendValue] = useState()

  //console.log(data);
  const formik = useFormik({
    initialValues: {
      title: data.title,
      body: data.body,
      capacity: data.capacity,
      manualjoinedcount: data.manualjoinedcount,
      durationTime: data.durationTime,
      date: data.date,
      price: data.price,
      type: data.type,
      thumbnail: data.thumbnail,
      isAccept: data.isAccept,
    },
    enableReinitialize: true,

    // validationSchema: Yup.object({
    //   title: Yup.string()
    //     .max(30, 'تعداد کاراکتر های وارد شده بیشتر از حد مجاز است !')
    //     .min(5, 'تعداد کاراکتر های وارد شده کمتر از حد مجاز است !')
    //     .required('لطفا عنوان تور را وارد کنید !'),
    //   body: Yup.string()
    //     .max(500, 'تعداد کاراکتر های وارد شده بیشتر از حد مجاز است !')
    //     .min(10, 'تعداد کاراکتر های وارد شده کمتر از حد مجاز است !')
    //     .required('لطفا توضیحات را وارد کنید  !'),
    //   capacity: Yup.number()
    //     .max(1000, 'ظرفیت تور بیشتر از حد مجاز است !')
    //     .required('لطفا ظرفیت تور را وارد کنید !'),
    //   price: Yup.number()
    //     .max(10000000, 'قیمت بیشتر از حد مجاز است !')
    //     .required('لطفا قیمت را وارد کنید !'),
    //   date: Yup.number().required('لطفا تاریخ تور را انتخاب کنید !'),
    //   durationTime: Yup.string().required('لطفا بازه تور را انتخاب کنید !'),
    //   type: Yup.string()
    //     .max(10, 'Must be 10 characters or less')
    //     .required('لطفا نوع تور را انتخاب کنید !'),
    // }),
    onSubmit: (values, { setSubmitting }) => {
      const files = Array.prototype.slice.call(file)
      values.thumbnail = files
      values.date = value?.toDate()
      values.enddate = endvalue?.toDate()

      let data = { id, values }
      //console.log(values)
      setTimeout(() => {
        editPost(data).then((res) => {
          if (res.status == 200) {
            //console.log(res)
            // navigate('/dashboard/myTours')
            swal('Good job!', res.data.message, 'success')
            window.location.reload()

            // setSubmitting(false)
          } else {
            swal('خطا', res.data.message, 'error')
          }
        }).catch(() => {
          swal.close()
        })
      }, 400)
    },
  })

  return (
    <CCard>
      <CCol xs={12} className={'p-3'} md={12} xl={12}>
        <CRow>
          {data.thumbnail &&
            data.thumbnail.map((item, i) => (
              <CCol key={i} xs={12} md={4} xl={3} className='mb-2'>
                <CCardImage
                  orientation="top"
                  src={`http://localhost:3333/uploads/thumbnails/${item}`}
                />
                {editMode ? (
                  <CButton
                    onClick={() => {
                      deletethumb({ id: id, name: item }).then((res) => {
                        if (res.status === 200) {
                          window.location.reload()
                        }
                      })
                    }}
                    className="btn btn-danger h-auto w-100 mb-2"
                  >
                    <CIcon icon={cilTrash} />
                  </CButton>
                ) : (
                  ''
                )}
              </CCol>
            ))}
        </CRow>
      </CCol>
      {editMode ? (
        <CCol className="p-3" xs={12} md={12} xl={12}>
          <CForm onSubmit={formik.handleSubmit}>
            <CFormLabel>عنوان</CFormLabel>
            <CFormInput
              disabled={data?.joinedUsers?.length > 0 ? true : false}
              type="text"
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              {...formik.getFieldProps('title')}
            />
            {/* {//console.log()} */}
            {formik.touched.title && formik.errors.title ? (
              <div style={{ color: 'red', margin: 10 }}>{formik.errors.title}</div>
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
              <div style={{ color: 'red', margin: 10 }}>{formik.errors.body}</div>
            ) : null}
            <CFormLabel style={{ paddingTop: 10 }}>ظرفیت</CFormLabel>
            <CFormInput
              // disabled={data?.joinedUsers?.length > 0 ? true : false}
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
            <CFormLabel style={{ paddingTop: 10 }}>تعداد افراد عضو شده به صورت دستی</CFormLabel>
            <CFormInput
              // disabled={data?.joinedUsers?.length > 0 ? true : false}
              type="number"
              name="manualjoinedcount"
              min={0}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.manualjoinedcount}
              {...formik.getFieldProps('manualjoinedcount')}
            />
            {formik.touched.manualjoinedcount && formik.errors.manualjoinedcount ? (
              <div style={{ color: 'red', margin: 10 }}>{formik.errors.manualjoinedcount}</div>
            ) : null}

            <CFormLabel style={{ paddingTop: 15 }}>قیمت(تومان)</CFormLabel>
            <CFormInput
              disabled={data?.joinedUsers?.length > 0 ? true : false}
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
              <div style={{ color: 'red', margin: 10 }}>{formik.errors.price}</div>
            ) : null}

            <CFormLabel style={{ paddingTop: 10 }}>طول تور</CFormLabel>
            <CFormSelect
              disabled={data?.joinedUsers?.length > 0 ? true : false}
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
            <CFormLabel style={{ paddingTop: 10 }}>دسته بندی</CFormLabel>
            <CFormSelect
              disabled={data?.joinedUsers?.length > 0 ? true : false}
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
            <CFormLabel style={{ paddingTop: 10 }}>تاریخ رفت</CFormLabel>
            <br />
            <DatePicker
              disabled={data?.joinedUsers?.length > 0 ? true : false}
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
              minDate={new DateObject({ calendar: persian }).set('day', thisDay.day)}
              weekDays={weekDays}
              inputClass="custom-input"
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-center"
              value={value}
              // editable
              onChange={setValue}
            />
            <br />

            <CFormLabel style={{ paddingTop: 15 }}>تاریخ برگشت</CFormLabel>
            <br />
            <DatePicker
              disabled={data?.joinedUsers?.length > 0 ? true : false}
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
              minDate={new DateObject({ calendar: persian }).set('day', thisDay.day)}
              weekDays={weekDays}
              inputClass="custom-input"
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-center"
              value={endvalue}
              onChange={setendValue}
              required
            />
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
                ثبت
              </CButton>
              <CButton
                style={{ padding: 15, margin: 10 }}
                color="danger"
                onClick={() => setEditMode(false)}
              >
                انصراف
              </CButton>
            </CCardFooter>
          </CForm>
        </CCol>
      ) : (
        <CCol className="mt-1" xs={12} md={12} xl={12}>
          <CListGroup className="rounded-4">
            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">عنوان</CCardText>
              <p className="m-0"> {data.title}</p>
            </CListGroupItem>
            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">دسته بندی</CCardText>
              <p className="m-0"> {persianType(data.type)}</p>
            </CListGroupItem>

            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">ظرفیت</CCardText>
              <p className="m-0"> {data.capacity} نفر</p>
            </CListGroupItem>

            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">تعداد افراد عضو شده به صورت دستی</CCardText>
              <p className="m-0"> {data.manualjoinedcount} نفر</p>
            </CListGroupItem>

            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">تاریخ رفت</CCardText>
              <p className="m-0"> {formDate(data.date)}</p>
            </CListGroupItem>

            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">تاریخ برگشت</CCardText>
              <p className="m-0"> {formDate(data.enddate)}</p>
            </CListGroupItem>
            {/* {console.log(data)} */}
            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">مدت زمان</CCardText>
              <p className="m-0"> {persianDuration(data.durationTime)}</p>
            </CListGroupItem>

            <CListGroupItem className="justify-content-between d-flex">
              <CCardText className="text-dark m-0">قیمت</CCardText>
              <p className="m-0"> {data.price}</p>
            </CListGroupItem>

            <CListGroupItem style={{ height: 'auto' }}>
              <CCardText className="text-dark m-0">درباره</CCardText>
              <br />
              <p className="m-0"> {data.body}</p>
            </CListGroupItem>
          </CListGroup>
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
              disabled={data?.joinedUsers?.length > 0 ? true : false}
              onClick={() => {
                swal({
                  title: 'آیا مطمئن به حذف هستید؟',
                  text: 'با حذف کردن دیگر به آن دسترسی نخواهید داشت!',
                  icon: 'warning',
                  buttons: true,
                  dangerMode: true,
                  closeOnCancel: true
                })
                  .then((result) => {

                    if (result) {
                      deletePost(data._id)
                        .then((res) => {

                          if (res.status == 200) {
                            navigate('/dashboard/myTours')
                          } else {
                            swal(res.data.message, 'error')
                          }
                        })
                    } else {
                      swal.fire('Changes are not saved', '', 'info')
                    }
                  })
                  // .finally(() => {
                  //   deletePost(data._id)
                  //     .then((res) => {
                  //       //console.log(res.status)
                  //       if (res.status == 200) {
                  //         navigate('/dashboard/myTours')
                  //       } else {
                  //         swal(res.data.message, 'error')
                  //       }
                  //     })
                  //     .catch(() => { })
                  // })
                  .catch(() => {
                    // //console.log('hey')
                  })
              }}
            >
              حذف
            </CButton>
            <CButton
              style={{ padding: 15, margin: 10 }}
              onClick={() => navigate(`/dashboard/statistics/${data._id}`)}
              className="btn btn-btn-outline-primary"
            >
              آمار
            </CButton>
            <CCardText>تاریخ ایجاد : {formDate(data.createdAt)}</CCardText>
          </CCardFooter>
        </CCol>
      )}
    </CCard>
  )
}
export default SinglePost
