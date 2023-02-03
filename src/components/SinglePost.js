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
const SinglePost = (data) => {
  const type = useSelector((state) => state.profileState.type)
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const [file, setfile] = useState([])
  let id = data.data._id

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
                      className="d-block w-100"
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
                const files = Array.prototype.slice.call(file)
                values.thumbnail = files
                let data = { id, values }

                setTimeout(() => {
                  editPost(data).then((res) => {
                    navigate('/dashboard/myTours')
                    // window.location.reload()
                    // alert(res.data.message)
                    // setSubmitting(false)
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
                    <option value="1day">یک روز</option>
                    <option value="2days">دوروز</option>
                    <option value="3days">سه روز</option>
                  </CFormSelect>
                  <CFormLabel>تاریخ برگذاری</CFormLabel>

                  <CFormInput
                    type="date"
                    name="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                  />
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
                        .catch(() => {})
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
