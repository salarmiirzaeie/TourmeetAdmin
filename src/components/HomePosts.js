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
import { formDate, truncate } from '../utils/helpers'
export const HomePosts = (res) => {
  const navigate = useNavigate()
  return (
    <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 5 }}>
      {res.posts.map((post, i) => (
        <CCol key={i} xs>
          <CCard onClick={() => navigate(`${res.adress}${post._id}`)}>
            <CCardImage
              orientation="top"
              src={`http://localhost:3333/uploads/thumbnails/${post.thumbnail[0]}`}
            />
            <CCardBody>
              <CCardTitle>{post.title}</CCardTitle>
            </CCardBody>
            <CListGroup flush>
              <CListGroupItem>
                <CBadge color={post.isAccept === 'accept' ? 'success' : 'danger'}>
                  {post.isAccept}
                </CBadge>
              </CListGroupItem>
              <CListGroupItem>{truncate(post.body, 15)}</CListGroupItem>
            </CListGroup>
            <CCardFooter>
              <small className="text-medium-emphasis">{formDate(post.createdAt) }</small>
            </CCardFooter>
          </CCard>
        </CCol>
      ))}
    </CRow>
  )
}
