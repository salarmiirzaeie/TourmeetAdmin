import React, { useEffect, useState } from 'react'
import { CCard } from '@coreui/react'

import SinglePost from 'src/components/SinglePost'
import { getSinglePost } from 'src/services/postService'
import { useParams } from 'react-router-dom'
const postPage = () => {
  // const params=useParams()
  // console.log(params)
  const [post, setpost] = useState({})
  getSinglePost(params.id).then((res) => {
    if (res.status==200) {
      setpost(res.data)

    }
  })
  return (
    <CCard>
      {/* <singlePost id={params.id}/> */}
      <SinglePost data={post} />
    </CCard>
  )
}
export default postPage
