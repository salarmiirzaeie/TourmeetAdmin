import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import { myPosts } from 'src/services/postService'
import { useSelector } from 'react-redux'
import { Posts } from 'src/components/Posts'

const Dashboard = () => {
  const userId = useSelector((state) => state.profileState.userId)
  const [posts, setposts] = useState([])
  useEffect(() => {
    myPosts(userId).then((res) => {
      setposts(res.data)
    })
  }, [])

  return (
    <>
    
    </>
  )
}

export default Dashboard
