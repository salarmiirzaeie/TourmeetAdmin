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
import { getRequestedPosts } from 'src/services/adminService'
import { Posts } from 'src/components/Posts'

const requestedposts = () => {
  const [posts, setposts] = useState([])
  useEffect(() => {
    getRequestedPosts().then((res) => {
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
              <Posts adress={'/adminDashboard/requestedPostPage/'} posts={posts} />

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
export default requestedposts
