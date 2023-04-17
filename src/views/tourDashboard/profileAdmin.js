import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardImage,
  CCol,
  CForm,
  CCardText,
  CRow,
} from '@coreui/react'

import { useNavigate } from 'react-router-dom'
import { userProfile } from 'src/services/usersService'

const profileAdmin = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState({})

  useEffect(() => {
    userProfile().then((res) => {
      if (res.status === 200) {
        setProfile(res.data)
      }
    })
  }, [])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>پروفایل</CCardHeader>
            <CCol className='text-center' xs={12} md={12} xl={12}>
              {profile.profilePhotos == null || profile.profilePhotos.length === 0 ? (
                <CCardImage
                  className="rounded-circle w-50 mt-3"
                  orientation="top"
                  src={`https://api.tourmeet.ir/uploads/defaultProfile1.jpg`}
                />
              ) : (
                <CCardImage
                  className="rounded-circle w-50 mt-3"
                  orientation="top"
                  src={`https://api.tourmeet.ir/uploads/profilePhotos/${profile.profilePhotos[0].name}`}
                />
              )}
            </CCol>
            <CCol xs={12} md={12} xl={12}>
              <CCardBody>
                <CCardText>
                  {' '}
                  <strong>نام</strong>
                </CCardText>
                <CCardText>{profile.name}</CCardText>
                <hr />

                <CCardText>
                  {' '}
                  <strong>ایمیل</strong>
                </CCardText>
                <CCardText>{profile.email}</CCardText>
                <hr />

                <CCardText>
                  {' '}
                  <strong>تلفن</strong>
                </CCardText>
                <CCardText>{profile.phoneNumber}</CCardText>
                <hr />

                <CCardText>
                  {' '}
                  <strong>درباره</strong>
                </CCardText>
                <CCardText>{profile.description}</CCardText>
              </CCardBody>
              <CCardFooter className="mt-4">
                <CButton
                  onClick={() => {
                    navigate('/dashboard/editProfileAdmin')
                  }}
                  color="success"
                >
                  ویرایش
                </CButton>
              </CCardFooter>
            </CCol>

          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default profileAdmin
