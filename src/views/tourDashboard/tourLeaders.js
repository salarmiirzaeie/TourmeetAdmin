import React, { useEffect, useRef, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CDropdown,
  CDropdownToggle,
  CDropdownDivider,
  CRow,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CSpinner,
  CInputGroup,
  CDropdownMenu,
  CDropdownItem,
  CTable,
  CTableDataCell,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableHead,
  CAvatar,
} from '@coreui/react'
import { deleteleader, getleaders, getusersearch } from 'src/services/adminService'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import { addleader } from 'src/services/postService'
import swal from 'sweetalert'

const tourLeaders = () => {
  const [show, setshow] = useState(false)
  const [users, setusers] = useState([])
  const [leaders, setleaders] = useState([])
  const [status, setstatus] = useState(0)
  const [status2, setstatus2] = useState(0)
  const input = useRef()
  useEffect(() => {
    getleaders().then((res) => {
      if (res.status === 200) {
        setleaders(res.data)
      }
    })
  }, [status2])
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader className="lead">لیدرها</CCardHeader>
        <CCardBody>
          <CInputGroup>
            <CFormInput
              ref={input}
              onChange={() => {
                if (input.current.value !== '') {
                  setshow(true)
                } else {
                  setshow(false)
                }
              }}
              placeholder="نام کاربری یاایمیل"
              aria-label="Text input with segmented dropdown button"
            />
            <CDropdown
              className="tourLeader"
              aria-hidden={false}
              alignment="end"
              variant="input-group"
            >
              <CButton
                type="button"
                onClick={() => {
                  if (input.current.value !== '') {
                    getusersearch(input.current.value).then((res) => {
                      console.log(res)
                      if (res.status === 200) {
                        setusers(res.data)
                        console.log(res.data)
                        setstatus(0)
                      }
                      if (res.status === 405) {
                        swal(res.data.message)
                      } else {
                        setstatus(3)
                      }
                    })
                    setshow(true)
                  } else {
                    setshow(false)
                  }
                }}
                color="secondary"
                variant="outline"
              >
                {'جستجو'}
              </CButton>
              <CDropdownMenu className={`w-100 ${show ? 'show' : ''} mt-5`}>
                {
                  // status !== 0 ? (
                  users &&
                    users.map((user, i) => (
                      <CDropdownItem key={i}>
                        <CRow>
                          <CCol>
                            <CAvatar
                              src={`http://localhost:3333/uploads/profilePhotos/${user.profilePhotos[0]?.name}`}
                            />
                          </CCol>
                          <CCol>
                            <CCardText> {user.username}</CCardText>
                          </CCol>
                          <CCol>
                            <CCardText> {user.email}</CCardText>
                          </CCol>
                          <CCol>
                            <CButton
                              onClick={() => {
                                addleader({ id: user.id }).then((res) => {
                                  swal(res.data.message)
                                  setstatus2(Math.random(0))
                                })
                              }}
                              className="btn btn-success"
                            >
                              <CIcon icon={cilPlus}></CIcon> اضافه کردن
                            </CButton>
                          </CCol>
                        </CRow>
                      </CDropdownItem>
                    ))
                  // ) : (
                  //   <CDropdownItem>چنین یوزری نیست</CDropdownItem>
                  // )
                }
              </CDropdownMenu>
            </CDropdown>
          </CInputGroup>

          <CRow className="p-2 mt-3">
            <CCol xs>
              <CCard>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col"> </CTableHeaderCell>
                      <CTableHeaderCell scope="col">نام لیدر</CTableHeaderCell>
                      <CTableHeaderCell scope="col">نام کاربری </CTableHeaderCell>
                      {/* <CTableHeaderCell scope="col">ایمیل</CTableHeaderCell> */}
                      <CTableHeaderCell scope="col">حذف لیدر</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {leaders &&
                      leaders.map((leader, i) => (
                        <CTableRow key={i}>
                          <CTableHeaderCell scope="row">
                            <CAvatar
                              src={`http://192.168.43.153:3333/uploads/profilePhotos/${
                                leader.profilephotoss[0]
                                  ? leader.profilephotoss[0].name
                                  : 'defaultProfile.jpg'
                              }`} 
                            />
                          </CTableHeaderCell>
                          <CTableHeaderCell scope="row">{leader.name}</CTableHeaderCell>

                          <CTableDataCell>{leader.username}</CTableDataCell>
                          <CTableDataCell>
                            <CButton
                              className="btn btn-danger"
                              onClick={() => {
                                deleteleader({ id: leader._id }).then((res) => {
                                  if (res.status === 200) {
                                    setstatus2(Math.random(0))
                                  }
                                  swal(res.data.message)
                                })
                              }}
                            >
                              حذف
                            </CButton>
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                  </CTableBody>
                </CTable>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default tourLeaders
