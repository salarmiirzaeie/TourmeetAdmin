import React, { useEffect, useState } from 'react'
import {
  CCardBody,
  CCardImage,
  CCol,
  CRow,
  CCard,
  CBadge,
  CButton,
  CCardHeader,
  CFormInput,
  CInputGroupText,
  CInputGroup,
} from '@coreui/react'
import { addPermissions, getPermissions } from 'src/services/adminService'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Permissions from 'src/components/Pesrmissions'

const permissionsPage = () => {
  const navigate = useNavigate()
  const [file, setfile] = useState([])
  const [photos, setPhotos] = useState([])
  const [status, sestsus] = useState(0)
  useEffect(() => {
    getPermissions().then((res) => {
      setPhotos(res.data)
      console.log(res.data)
    })
  }, [status])
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
                    console.log(files)
                    addPermissions(files).then((res) => {
                      if (res.status === 200) {
                        swal(res.data.message)
                        sestsus(Math.random(0))
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
              <Permissions data={photos} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default permissionsPage
