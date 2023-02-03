import React, { useEffect, useState } from 'react'
import { CButton, CCard } from '@coreui/react'
import { getPost } from 'src/services/blogService'
import SinglePost from 'src/components/SinglePost'
import { useParams } from 'react-router-dom'
import { joinTour } from 'src/services/postService'
import { useSelector } from 'react-redux'

const postPage = () => {
  const userId = useSelector((state) => state.profileState.userId)
  const params = useParams()
  const postId = params.id
  const data = { postId, userId }
  const [post, setpost] = useState({})

  useEffect(() => {
    getPost(params.id).then((res) => {
      setpost(res.data.post)
    })
  }, [])

  return (
    <CCard>
      {/* <singlePost id={params.id}/> */}
      <SinglePost data={post} />
      <CButton onClick={() => {
        joinTour(data).then((res) => {
          alert(res.data.message)

        })
      }} color="success">پیوستن</CButton>
    </CCard>
  )
}
export default postPage
