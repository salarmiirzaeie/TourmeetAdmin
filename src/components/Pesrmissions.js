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

const Permissions = ({ data }) => {
  return (
    <>
      <CRow xs={{ cols: 1, gutter: 1 }} md={{ cols: 4 }}>
        {data &&
          data.map((post, i) => (
            <CCol key={i} xs>
              <CCardImage
                orientation="top"
                src={`http://localhost:3333/uploads/permissions/${post.name}`}
              />
            </CCol>
          ))}
      </CRow>
    </>
  )
}

export default Permissions
