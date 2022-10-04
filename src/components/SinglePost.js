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
} from '@coreui/react'
import AngularImg from 'src/assets/images/angular.jpg'
import { Formik } from 'formik'

import { deletePost, editPost } from 'src/services/postService'
import { useNavigate } from 'react-router-dom'
import { formDate } from 'src/utils/helpers'
import { useSelector } from 'react-redux'
const SinglePost = (data) => {
  const type = useSelector((state) => state.profileState.type)
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const [file, setfile] = useState('')
  let id = data.data._id

  return (
    <CCard>
      <CRow className="p-2">
        {/* <CCardHeader>تورها </CCardHeader> */}
        <CCol xs={6} md={{ cols: 12 }}>
          {data.data.thumbnail ? (
            <CCard>
              <CCarousel indicators controls>
                <CCarouselItem>
                  <img
                    className="d-block w-100"
                    src={`http://localhost:3333/uploads/thumbnails/${data.data.thumbnail}`}
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <img
                    className="d-block w-100"
                    src={`http://localhost:3333/uploads/thumbnails/${data.data.thumbnail}`}
                    alt="slide 2"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <img
                    className="d-block w-100"
                    src={`http://localhost:3333/uploads/thumbnails/${data.data.thumbnail}`}
                    alt="slide 3"
                  />
                </CCarouselItem>
              </CCarousel>
            </CCard>
          ) : (
            <CSpinner />
          )}
        </CCol>
        {editMode ? (
          <CCol xs={6}>
            <Formik
              initialValues={{
                title: data.data.title,
                body: data.data.body,
                thumbnail: file.name,
                isAccept: 'waiting',
              }}
              validate={(values) => {
                const errors = {}
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                values.thumbnail = file
                let data = { id, values }
                console.log(values)

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
                  <CFormLabel>عکس</CFormLabel>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      value={values.thumbnail}
                      onChange={(event) => {
                        setfile(event.currentTarget.files[0])
                      }}
                      onBlur={handleBlur}
                      type="file"
                      id="thumbnail"
                    />
                  </CInputGroup>
                  {type=="tour"? <CCardFooter>
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
                  </CCardFooter>:''}
                 
                </form>
              )}
            </Formik>
          </CCol>
        ) : (
          <CCol xs={6}>
            <CListGroup flush>
              <CListGroupItem>{data.data.title}</CListGroupItem>

              <CListGroupItem>{data.data.body}</CListGroupItem>
              <CListGroupItem>
                <CBadge color={data.data.isAccept === 'accept' ? 'success' : 'danger'}>
                  {data.data.isAccept}
                </CBadge>
              </CListGroupItem>
              <CListGroupItem>{formDate(data.data.createdAt)}</CListGroupItem>
            </CListGroup>
            {type=="tour"? <CCardFooter>
              <CButton
                onClick={() => setEditMode(true)}
                className="justify-content-end"
                color="warning"
              >
                ویرایش
              </CButton>
              <CButton color="danger" onClick={() => setVisible(!visible)}>
                حذف
              </CButton>
              <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalBody>آیامطمئن به حذف پست هستید؟</CModalBody>
                <CModalFooter>
                  <CButton
                    onClick={() => {
                      deletePost(data.data._id).then((res) => {
                        if (res.status == 200) {
                          navigate('/dashboard/myTours')
                        } else {
                          setVisible(false)
                          alert(res.data.message)
                        }
                      })
                    }}
                    color="primary"
                  >
                    بله
                  </CButton>
                </CModalFooter>
              </CModal>
            </CCardFooter>:''}
           
          </CCol>
        )}
      </CRow>
    </CCard>
  )
}
export default SinglePost
