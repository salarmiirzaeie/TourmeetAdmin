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
import { formDate, truncate, acceptOrNot, persianStatus } from '../utils/helpers'
export const Posts = (res) => {
  const navigate = useNavigate()
  return (
    <CRow>
      {res && res !== undefined ? (
        res.posts &&
        res.posts.map((post, i) => (
          <CCol key={i} xs={12} lg={4} md={6} className='mb-3'>
            <CCard onClick={() => navigate(`${res.adress}${post._id}`)}>
              <CCardImage
                orientation="top"
                src={`https://api.tourmeet.ir/uploads/thumbnails/${post.thumbnail[0]}`}
              />
              <CCardBody>
                <CCardTitle>{post.title}</CCardTitle>
              </CCardBody>
              <CListGroup flush>
                <CListGroupItem>
                  <small>تاییدیه : </small>
                  <CBadge color={post.isAccept === 'accept' ? 'success' : 'danger'}>
                    {acceptOrNot(post.isAccept)}
                  </CBadge>
                </CListGroupItem>
                <CListGroupItem>{truncate(post.body, 40)}</CListGroupItem>
              </CListGroup>
              <CListGroup flush>
                <CListGroupItem>
                  <small>وضعیت : </small>
                  <CBadge color={post.status === 'Recruiting' ? 'primary' : 'danger'}>
                    {persianStatus(post.status)}
                  </CBadge>
                </CListGroupItem>
              </CListGroup>
              <CCardFooter>
                <small className="text-medium-emphasis">تاریخ ایجاد :{formDate(post.createdAt)} </small>
              </CCardFooter>
            </CCard>
          </CCol>
        ))
      ) : (
        <p>no data</p>
      )}
    </CRow>
  )
}
