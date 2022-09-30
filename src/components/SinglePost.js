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
} from '@coreui/react'

import { deletePost } from 'src/services/postService'
const SinglePost = (data) => {
  const[visible,setVisible]=useState(false)
  return (
    <CCard>
      <CRow className="p-2">
        {/* <CCardHeader>تورهای شما</CCardHeader> */}
        <CCol xs={6}>
          <CCard>
            {/* <Posts posts={posts} /> */}
            <CCarousel indicators controls>
              <CCarouselItem>
                <img
                  className="d-block w-100"
                  src={`http://localhost:3333/uploads/thumbnails/${data.data.thumbnail}`}
                />
              </CCarouselItem>
              {/* <CCarouselItem>
                <img
                  className="d-block w-100"
                  src={`http://localhost:3333/uploads/thumbnails/${post.thumbnail}`}
                  alt="slide 2"
                />
              </CCarouselItem>
              <CCarouselItem>
                <img
                  className="d-block w-100"
                  src={`http://localhost:3333/uploads/thumbnails/${post.thumbnail}`}
                  alt="slide 3"
                />
              </CCarouselItem> */}
            </CCarousel>
          </CCard>
        </CCol>

        <CCol xs={6}>
          <CListGroup flush>
            <CListGroupItem>{data.data.title}</CListGroupItem>
            <CListGroupItem>{data.data.body}</CListGroupItem>

            <CListGroupItem>
              <CBadge color={'danger'}>{data.isAccept}</CBadge>
            </CListGroupItem>
          </CListGroup>
          <CCardFooter>
            <CButton className="justify-content-end" color="warning">
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
          </CCardFooter>
        </CCol>
      </CRow>
    </CCard>
  )
}
export default SinglePost
