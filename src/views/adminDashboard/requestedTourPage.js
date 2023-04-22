import { CCard } from '@coreui/react'
import { data } from 'jquery'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AcceptControl } from 'src/components/AcceptControl'
import SinglePost from 'src/components/SinglePost'
import { acceptPost, getCampGallery, getSinglePost } from 'src/services/postService'
import { acceptTour } from 'src/services/usersService'
import swal from 'sweetalert'
import Permissions from './../../components/Pesrmissions';

export default function requestedTourPage() {
  const navigate = useNavigate()
  const params = useParams()
  const [post, setpost] = useState({})

  useEffect(() => {
    const id = params.id
    data = { data, id }
    getCampGallery(data).then((res) => {
      setpost(res.data)
    })
  }, [])
  const changeAccept = async (data) => {
    const id = params.id
    data = { data, id }
    await acceptTour(data).then((res) => {
      if (res.status == 200) {
        navigate('/adminDashboard/requestedTours')
      }
      else {
        swal(res.data.message)
      }
    })
  }
  return (
    <CCard>
      <AcceptControl accept={changeAccept} />
      <Permissions data={post} />

    </CCard>
  )
}
