import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CPagination,
  CRow,
  CPaginationItem,
  CCarousel,
  CCarouselItem,
  CListGroup,
  CListGroupItem,
  CBadge,
  CCardFooter,
  CButton,
  CSpinner,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CCardText,
  CFormSelect,
  CForm,
  CCardImage,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CAvatar,
} from '@coreui/react'
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
} from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import { CChart } from '@coreui/react-chartjs'
const Statistics = () => {
  const navigate = useNavigate()
  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'شراره قره باغی',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'مناف قزلجه زاده',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'ناصیر پخله پز', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'نصرت گلهین', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'آناهیتا راد',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'ایسماییل اصغر پور',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <CCard>
      <CRow>
        <CCol lg={5} xs={12} md={6}>
          <CChart
            style={{
              width: 330,
              alignItems: 'center',
              textAlign: 'center',
            }}
            type="pie"
            data={{
              labels: ['غیر قابل برداشت', 'قابل برداشت'],
              data: [300, 50, 100],
              datasets: [
                {
                  backgroundColor: ['#39f', '#2eb85c'],
                  data: [30, 80],
                },
              ],
            }}
          />
        </CCol>
        <CCol lg={5} xs={12} md={6}>
          <CChart
            style={{
              width: 330,
              alignItems: 'center',
              textAlign: 'center',
            }}
            type="pie"
            data={{
              labels: ['غیر قابل برداشت', 'قابل برداشت'],
              data: [300, 50, 100],
              datasets: [
                {
                  backgroundColor: ['#39f', '#2eb85c'],
                  data: [30, 80],
                },
              ],
            }}
          />
        </CCol>
      </CRow>
      <CCol xs={12} className={'p-3'} md={12} xl={12}>
        <CAccordion flush>
          <CAccordionItem itemKey={1}>
            <CAccordionHeader>افرادعضوشده</CAccordionHeader>
            <CAccordionBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>نام گردشگر</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">نام تور</CTableHeaderCell>
                    {/* <CTableHeaderCell>Usage</CTableHeaderCell> */}
                    <CTableHeaderCell className="text-center">تاریخ واریز</CTableHeaderCell>
                    <CTableHeaderCell>شماره تراکنش</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {/* <CIcon size="xl" icon={item.country.flag} title={item.country.name} /> */}
                        تور شمال
                      </CTableDataCell>
                      {/* <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell> */}
                      <CTableDataCell className="text-center">
                        {/* <CIcon size="xl" icon={item.payment.icon} /> */}
                        1401/10/12
                        <div className="small text-medium-emphasis">14:32</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        {/* <div className="small text-medium-emphasis">Last login</div> */}
                        <strong>777222111</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CAccordionBody>
          </CAccordionItem>
        </CAccordion>
      </CCol>
    </CCard>
  )
}
export default Statistics
