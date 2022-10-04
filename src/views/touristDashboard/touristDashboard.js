import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CPagination,
  CRow,
  CPaginationItem,
} from '@coreui/react'

import { myPosts } from 'src/services/postService'
import { useSelector } from 'react-redux'
import { Posts } from 'src/components/Posts'
import { getIndex } from 'src/services/blogService'

const touristDashboard = () => {
    const [posts, setposts] = useState([])
    useEffect(() => {
      getIndex().then((res) => {
          // console.log(res.data.posts)
        setposts(res.data.posts)
      })
    }, [])
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>تورهای شما</CCardHeader>
            <CCardBody>
              <Posts adress={'/touristDashboard/postPageT/'} posts={posts} />
              {/* <br />
              <CPagination className="justify-content-center" aria-label="Page navigation example">
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

export default touristDashboard
