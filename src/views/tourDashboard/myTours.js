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
              {posts.length === 0 ? (
                <h3 className='m-3'>هیچ تور ثبت شده ای نداری دوست من !</h3>
              ) : (
                <Posts adress={'/dashboard/postPage/'} posts={posts} />
              )}

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default myTours
