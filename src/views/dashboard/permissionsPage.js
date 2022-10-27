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
import { addPermissions, addToGallery, getGalley, getPermissions } from 'src/services/postService'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Permissions from 'src/components/Pesrmissions'

const permissionsPage = () => {
  const navigate=useNavigate()
  const userId = useSelector((state) => state.profileState.userId)
  const [file, setfile] = useState([])
  const [photos,setPhotos]=useState([])
  useEffect(() => {
    getPermissions(userId).then((res) => {
      setPhotos(res.data)
    })
  }, [])
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>مجوزها</CCardHeader>
            <CCardBody>
              <CInputGroup className="mb-3">
                <CButton
                  onClick={() => {
                   const files = Array.prototype.slice.call(file)
                    const data={files,userId}
                    addPermissions(data).then((res) => {
                        if (res.status==200) {
                            alert(res.data.message)
                        }
                    })
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
<Permissions data={photos}/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default permissionsPage
