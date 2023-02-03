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
                    <option value="1 روزه">یک روز</option>
                    <option value="2 روزه">دو روز</option>
                    <option value="3 روزه">سه روز</option>
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
          <CCol xs={12} md={6} xl={6}>
            <CListGroup flush>
              <CListGroupItem>{data.data.title}</CListGroupItem>

              <CListGroupItem>{data.data.body}</CListGroupItem>
              <CListGroupItem>{data.data.capacity}</CListGroupItem>
              <CListGroupItem>{data.data.durationTime}</CListGroupItem>
              <CListGroupItem>{formDate(data.data.date)}</CListGroupItem>

              <CListGroupItem>
                <CBadge color={data.data.isAccept === 'accept' ? 'success' : 'danger'}>
                  {data.data.isAccept}
                </CBadge>
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
