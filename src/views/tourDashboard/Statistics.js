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
import { useNavigate, useParams } from 'react-router-dom'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import { CChart } from '@coreui/react-chartjs'
import { getSinglePost } from 'src/services/postService'
const Statistics = () => {
  const navigate = useNavigate()
  const route = useParams()
  const [post, setpost] = useState({})
  useEffect(() => {
    getSinglePost(route.id).then((res) => {
      if (res.status === 200) {
        setpost(res.data)
        console.log(res.data)
      }
    })
  }, [])
  

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
              labels: ['تعدادافردباقی مانده', 'تعدادافردعضوشده'],
              datasets: [
                {
                  backgroundColor: ['#39f', '#2eb85c'],
                  data: [ post.capacity - post.joinedUsers?.length ,post.joinedUsers?.length],
                },
              ],
            }}
          />
        </CCol>
        <CCol lg={5} xs={12} md={6}>
          <CCard
            color="primary"
            // xs={{ cols: 1 }}

            textColor="white"
            className="mb-3"
            style={{ maxWidth: '18rem', marginRight: 10, marginTop: 10 }}
            // key={index}
          >
            <CCardHeader>درآمدپیش بینی شده ازاین تور</CCardHeader>
            <CCardBody>
              {/* <CCardTitle>card title</CCardTitle> */}
              <CCardText>{post.capacity*post.price}تومان</CCardText>
            </CCardBody>
          </CCard>
          <CCard
            color="success"
            // xs={{ cols: 1 }}

            textColor="white"
            className="mb-3"
            style={{ maxWidth: '18rem', marginRight: 10, marginTop: 10 }}
            // key={index}
          >
            <CCardHeader>درآمدتااین لحظه</CCardHeader>
            <CCardBody>
              {/* <CCardTitle>card title</CCardTitle> */}
              <CCardText>{post.joinedUsers?.length*post.price}تومان</CCardText>
            </CCardBody>
          </CCard>
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
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {post.joinedUsers?.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          src={`http://localhost:3333/uploads/profilePhotos/${
                            item.profilephotoss ? item.profilephotoss[0].name : 'defaultProfile.jpg'
                          }`}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.name}</div>
                        <div className="small text-medium-emphasis">
                          {/* <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '} */}
                          {/* {item.user.registered} */}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">تور شمال</CTableDataCell>
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
