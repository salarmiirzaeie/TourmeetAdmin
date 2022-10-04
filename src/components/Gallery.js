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
import { cilMonitor, cilStream } from '@coreui/icons'

const Gallery = () => {
  return (
    <>
      <CRow xs={{ cols: 1, gutter: 1 }} md={{ cols: 4 }}>
        <CCol xs>
          <CPopover
            content={
              <CListGroup flush>
                <CListGroupItem>cc</CListGroupItem>
                <CListGroupItem>ssccz</CListGroupItem>
                <CListGroupItem>ssccz</CListGroupItem>

              </CListGroup>
            }
            placement="left"
          >
            <CButton style={{ position: 'absolute' }} color="transparent" size="sm">
              <CIcon style={{ color: 'white' }} size="xxl" icon={cilStream} />
            </CButton>
          </CPopover>
          <CCardImage
            orientation="top"
            src={`http://localhost:3333/uploads/thumbnails/-HtVYZBuN_5xI7lVjc8_Sunsetv2.0.jpg`}
          />
        </CCol>
        <CCol xs>
          <CCardImage
            orientation="top"
            src={`http://localhost:3333/uploads/thumbnails/-HtVYZBuN_5xI7lVjc8_Sunsetv2.0.jpg`}
          />
        </CCol>
        <CCol xs>
          <CCardImage
            orientation="top"
            src={`http://localhost:3333/uploads/thumbnails/-HtVYZBuN_5xI7lVjc8_Sunsetv2.0.jpg`}
          />
        </CCol>
        <CCol xs>
          <CCardImage
            orientation="top"
            src={`http://localhost:3333/uploads/thumbnails/-HtVYZBuN_5xI7lVjc8_Sunsetv2.0.jpg`}
          />
        </CCol>
        <CCol xs>
          <CCardImage
            orientation="top"
            src={`http://localhost:3333/uploads/thumbnails/-HtVYZBuN_5xI7lVjc8_Sunsetv2.0.jpg`}
          />
        </CCol>
        <CCol xs>
          <CCardImage
            orientation="top"
            src={`http://localhost:3333/uploads/thumbnails/-HtVYZBuN_5xI7lVjc8_Sunsetv2.0.jpg`}
          />
        </CCol>{' '}
        <CCol xs>
          <CCardImage
            orientation="top"
            src={`http://localhost:3333/uploads/thumbnails/-HtVYZBuN_5xI7lVjc8_Sunsetv2.0.jpg`}
          />
        </CCol>{' '}
        <CCol xs>
          <CCardImage
            orientation="top"
            src={`http://localhost:3333/uploads/thumbnails/-HtVYZBuN_5xI7lVjc8_Sunsetv2.0.jpg`}
          />
        </CCol>{' '}
        <CCol xs>
          <CCardImage
            orientation="top"
            src={`http://localhost:3333/uploads/thumbnails/-HtVYZBuN_5xI7lVjc8_Sunsetv2.0.jpg`}
          />
        </CCol>{' '}
        <CCol xs>
          <CCardImage
            orientation="top"
            src={`http://localhost:3333/uploads/thumbnails/-HtVYZBuN_5xI7lVjc8_Sunsetv2.0.jpg`}
          />
        </CCol>{' '}
        <CCol xs>
          <CCardImage
            orientation="top"
            src={`http://localhost:3333/uploads/thumbnails/-HtVYZBuN_5xI7lVjc8_Sunsetv2.0.jpg`}
          />
        </CCol>{' '}
        <CCol xs>
          <CCardImage
            orientation="top"
            src={`http://localhost:3333/uploads/thumbnails/-HtVYZBuN_5xI7lVjc8_Sunsetv2.0.jpg`}
          />
        </CCol>
      </CRow>
    </>
  )
}

export default Gallery
