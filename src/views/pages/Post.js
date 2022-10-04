import React, { useEffect, useState } from 'react'
import {
    CButton,
    CCol,
    CContainer,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
    CCardHeader,
    CCardBody,
    CCard,
  } from '@coreui/react'
import SinglePost from 'src/components/SinglePost'
import { useParams } from 'react-router-dom'
import { getPost } from 'src/services/blogService'
const Post = () => {
  const params = useParams()
  const [post, setpost] = useState({})
  useEffect(() => {
    getPost(params.id).then((res) => {
      setpost(res.data.post)
    })
  }, [])
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow>
          <CCol xs>
            <CCard className="mb-4">
              <CCardHeader>تورهای شما</CCardHeader>
              <CCardBody>
              <SinglePost data={post} />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
   
  )
}
export default Post
