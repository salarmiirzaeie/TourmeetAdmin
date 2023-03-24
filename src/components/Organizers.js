import React, { useState, useEffect } from 'react'
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
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import { getposts } from 'src/state-management/action/postsAction'
import { formDate, truncate } from '../utils/helpers'
export const Organizers = (res) => {
  const navigate = useNavigate()
  return (
    <CCol xs={{ cols: 1, gutter: 4 }} md={{ cols: 5 }}>
      {res.posts &&
        res.posts.map((user, i) => (
          <CCard key={i} onClick={() => navigate(`${res.adress}${user._id}`)}>
            <CRow>
              <CCol xs={12} md={3} xl={3}>
                <CCardImage
                  orientation="top"
                  src={`https://api.tourmeet.ir/uploads/${user?.profilePhoto}`}
                />
              </CCol>
              <CCol xs={12} md={9} xl={9}>
                <CCardBody>
                  <CCardTitle>{user?.name}</CCardTitle>
                </CCardBody>
                <CListGroup flush>
                  <CListGroupItem>
                    <CBadge color={user?.isAccept === 'accept' ? 'success' : 'danger'}>
                      {user?.isAccept}
                    </CBadge>
                  </CListGroupItem>
                  {/* <CListGroupItem>{truncate(user.description, 15)}</CListGroupItem> */}
                </CListGroup>
                <CCardFooter className="flex-end">
                  <small className="text-medium-emphasis">{formDate(user?.createdAt)}</small>
                </CCardFooter>
              </CCol>
            </CRow>
          </CCard>
        ))}
    </CCol>
  )
}
