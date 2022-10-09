import React, { useEffect, useState } from 'react'
import {
  CCardBody,
  CCardImage,
  CCol,
  CRow,
  CCardFooter,
  CListGroup,
  CCardTitle,
  CListGroupItem,
  CCard,
  CBadge,
  CButton,
  CPopover,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilDelete, cilMonitor, cilStream } from '@coreui/icons'
import { deletegallery } from 'src/services/postService'
import { createBrowserHistory } from 'history'
import { useNavigate } from 'react-router-dom'

const Gallery = (data) => {
const navigate=useNavigate()
  return (
    <>
      <CRow xs={{ cols: 1, gutter: 1 }} md={{ cols: 4 }}>
        {data.data.map((post, i) => (
          <CCol key={i} xs>
            <CButton style={{ position: 'absolute' }} onClick={()=>{
              deletegallery(post._id).then((res)=>{
                // alert(res.data.message)
                navigate(0)
              })
            }} color="transparent" size="sm">
              <CIcon style={{ color: 'white' }} size="xxl" icon={cilDelete} />
            </CButton>
            <CCardImage
              orientation="top"
              src={`http://localhost:3333/uploads/thumbnails/${post.name}`}
            />
          </CCol>
        ))}
      </CRow>
    </>
  )
}

export default Gallery
