import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CPagination,
  CRow,
  CPaginationItem,
  CButton,
  CCardFooter,
} from '@coreui/react'
import { getRequestedPosts, getRequestedTours } from 'src/services/adminService'
import { Posts } from 'src/components/Posts'
import { Organizers } from 'src/components/Organizers'

const requestedTours = () => {
  const [posts, setposts] = useState([])
  useEffect(() => {
    getRequestedTours().then((res) => {
      setposts(res.data)
    })
  }, [])
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>تورهای درخواستی</CCardHeader>
            <CCardBody>
              <Organizers adress={'/adminDashboard/requestedTourPage/'} posts={posts} />
              {/* <Posts adress={'/adminDashboard/requestedPostPage/'} posts={posts} /> */}
              <br />
              {/* <CPagination className="justify-content-center" aria-label="Page navigation example">
                <CPaginationItem disabled>Previous</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>Next</CPaginationItem>
              </CPagination> */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
export default requestedTours
