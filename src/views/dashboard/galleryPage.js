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
  CCardHeader,
  CFormInput,
  CInputGroupText,
  CInputGroup,
} from '@coreui/react'
import Gallery from 'src/components/Gallery'
import { addToGallery } from 'src/services/postService'
import { useSelector } from 'react-redux'

const galleryPage = () => {
  const userId = useSelector((state) => state.profileState.userId)
  const [files, setfile] = useState([])
  const arr = [{s:'cat'}, {s:'dog'}, {s:'fish'}];

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader> گالری</CCardHeader>
            <CCardBody>
              <CInputGroup className="mb-3">
                <CButton
                  onClick={() => {
                    // const files = [...files]
                    files = Array.from(files)
                    const data={files,userId}
                    addToGallery(data).then((res) => {console.log(res.data.message)})
                  }}
                >
                  Upload
                </CButton>

                <CFormInput
                  onChange={(event) => {
                    setfile(event.currentTarget.files)
                  }}
                  type="file"
                  multiple={true}
                  id="inputGroupFile01"
                />
              </CInputGroup>

              <Gallery />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default galleryPage
