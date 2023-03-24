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

const rejectedTours = () => {
  const userId = useSelector((state) => state.profileState.userId)
  const [posts, setposts] = useState([])
  useEffect(() => {
    myPosts(userId).then((res) => {
      res.data = res.data.filter((p) => p.isAccept == 'reject')
      setposts(res.data)
    })
  }, [])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>تورهای رد شده</CCardHeader>
            <CCardBody>
              {posts.length === 0 ? (
                <h3 className='m-3'>هیچ تور رد شده ای نداری دوست من !</h3>
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

export default rejectedTours
