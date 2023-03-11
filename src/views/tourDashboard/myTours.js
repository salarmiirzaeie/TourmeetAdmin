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
import { Posts } from 'src/components/Posts'

const myTours = () => {
  const [posts, setposts] = useState([])
  useEffect(() => {
    myPosts().then((res) => {
      console.log(res.data)

      res.data = res.data.filter((p) => p.isAccept !== 'reject')
      setposts(res.data)

    })
  }, [])
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>تورهای شما</CCardHeader>
            <CCardBody>
              <Posts adress={'/dashboard/postPage/'} posts={posts} />
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

export default myTours
