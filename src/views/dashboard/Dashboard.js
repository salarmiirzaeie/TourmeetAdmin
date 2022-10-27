import React, { useEffect, useState } from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CAlert,
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsB,
  CWidgetStatsC,
} from '@coreui/react'
import { CChartDoughnut, CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilUserFollow,
  cilBasket,
} from '@coreui/icons'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { myPosts } from 'src/services/postService'
import { useSelector } from 'react-redux'
import { JoinedUserstb } from 'src/components/JoinedUserstb'
import { useNavigate } from 'react-router-dom'
import { isAuth } from 'src/utils/helpers'

const dashboard = () => {
  // const navigate = useNavigate()
  // const [posts, setposts] = useState([])

  return (
    <>
      <CRow>
        <CCol xs>
          {/* {posts.map((post, i) => (
            <CCard key={i} className="mb-4">
              <CCardHeader>{post.title}</CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol md={9} xl={9}>
                    <WidgetsDropdown />
                  </CCol>
                  <CCol md={3} xl={3}>
                    <CRow>
                      <CCol>
                        <CChartDoughnut
                          data={{
                            datasets: [
                              {
                                backgroundColor: ['#DD1B16', 'green'],
                                data: [
                                  post.joinedUsers.length,
                                  post.capacity - post.joinedUsers.length,
                                ],
                              },
                            ],
                          }}
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
                <CAccordion className="mt-1" flush>
                  <CAccordionItem itemKey={3}>
                    <CAccordionHeader>افرادعضوشده</CAccordionHeader>
                    <CAccordionBody>
                      <CTable align="middle" className="mb-0 border" hover responsive>
                        <CTableHead color="light">
                          <CTableRow>
                            <CTableHeaderCell className="text-center">
                              <CIcon icon={cilPeople} />
                            </CTableHeaderCell>
                            <CTableHeaderCell>User</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                            <CTableHeaderCell>Usage</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">
                              Payment Method
                            </CTableHeaderCell>
                            <CTableHeaderCell>Activity</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          <JoinedUserstb users={post.joinedUsers} />
                        </CTableBody>
                      </CTable>
                    </CAccordionBody>
                  </CAccordionItem>
                </CAccordion>
              </CCardBody>
            </CCard>
          ))} */}
        </CCol>
      </CRow>
    </>
  )
}

export default dashboard
