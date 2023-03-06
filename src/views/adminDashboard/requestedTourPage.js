import { CCard } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AcceptControl } from 'src/components/AcceptControl'
import SinglePost from 'src/components/SinglePost'
import { acceptPost, getSinglePost } from 'src/services/postService'
import { acceptTour } from 'src/services/usersService'
import swal from 'sweetalert'

export default function requestedTourPage() {
  const navigate = useNavigate()
  const params = useParams()
  const [post, setpost] = useState({})
  useEffect(() => {
    // getSinglePost(params.id).then((res) => {
    //   setpost(res.data)
    // })
  }, [])
  const changeAccept = async (data) => {
    const id = params.id
    data = { data, id }
    await acceptTour(data).then((res) => {
      if (res.status == 200) {
        navigate('/adminDashboard/requestedTours')
      }
      else{
        swal(res.data.message)
      }
    })
  }
  return (
    <CCard>
      <AcceptControl accept={changeAccept} />
      {/* <SinglePost data={post} /> */}
    </CCard>
  )
}
