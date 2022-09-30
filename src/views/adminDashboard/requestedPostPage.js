import { CCard } from '@coreui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { AcceptControl } from 'src/components/AcceptControl'
import SinglePost from 'src/components/SinglePost'
import { acceptPost } from 'src/services/postService'

export default function postPage() {
  const params = useParams()
  const id=params.id
  const accept = (isAccept) => {
    acceptPost({id,isAccept}).then((res) => {
      alert(res.data.message)
    })
  }
  return (
    <CCard>
      {/* <singlePost id={params.id}/> */}
      <AcceptControl accept={accept} />
      <SinglePost id={id} />
    </CCard>
  )
}
