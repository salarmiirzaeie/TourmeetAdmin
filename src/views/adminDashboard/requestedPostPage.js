import { CCard } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AcceptControl } from 'src/components/AcceptControl'
import SinglePost from 'src/components/SinglePost'
import { acceptPost, getSinglePost } from 'src/services/postService'

export default function postPage() {
  const navigate=useNavigate()
  const params = useParams()
  const [post, setpost] = useState({})
  useEffect(() => {
    getSinglePost(params.id).then((res) => {
      setpost(res.data)
    })
  }, [])
  const changeAccept = (data) => {
    const id = params.id
    data = { data, id }
    acceptPost(data).then((res) => {
      if (res.status==200) {
        navigate('/adminDashboard/requestedposts')
        
      }
    })
  }
  return (
    <CCard>
      <AcceptControl accept={changeAccept} />
      <SinglePost data={post} />
    </CCard>
  )
}
