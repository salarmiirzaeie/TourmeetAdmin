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
import { addToGallery, getGalley } from 'src/services/postService'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const galleryPage = () => {
  const navigate = useNavigate()
  const userId = useSelector((state) => state.profileState.userId)
  const [file, setfile] = useState([])
  const [photos, setPhotos] = useState([])
  // useEffect(() => {
  //   getGalley(userId).then((res) => {
  //     setPhotos(res.data)
  //   })
  // }, [])
  //THIS PAGE HAS BEEN DISABELED !
  return (
    <>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>گالری</CCardHeader>
            <CCardBody>
              <CInputGroup className="mb-3">
                <CButton
                  onClick={() => {
                    const files = Array.prototype.slice.call(file)
                    const data = { files, userId }
                    addToGallery(data).then((res) => { navigate(0) })
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

              <Gallery data={photos} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default galleryPage
