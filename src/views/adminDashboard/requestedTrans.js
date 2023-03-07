import {
  CCard,
  CCardBody,
  CTable,
  CTableDataCell,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableHead,
  CButton,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { getalltrans, setpair } from 'src/services/adminService'

const requestedTrans = () => {
  const [transs, settrsnz] = useState([])
  useEffect(() => {
    getalltrans().then((res) => {
      if (res.status === 200) {
        settrsnz(res.data)
        console.log(res.data)
      }
    })
  }, [])
  return (
    <>
      <CCard>
        <CCardBody>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">مبلغ </CTableHeaderCell>
                <CTableHeaderCell scope="col">تاریخ درخواست</CTableHeaderCell>
                <CTableHeaderCell scope="col">وضعیت</CTableHeaderCell>
                <CTableHeaderCell scope="col">وضعیت</CTableHeaderCell>
                <CTableHeaderCell scope="col">وضعیت</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {transs &&
                transs?.map((item, i) => (
                  <CTableRow key={i}>
                    <CTableHeaderCell scope="row">{item.amount}</CTableHeaderCell>

                    <CTableDataCell>{item.createdAt}</CTableDataCell>
                    <CTableDataCell>{"item.user"}</CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          className="btn btn-success"
                          onClick={() => {
                            setpair({ id: item._id,data:true }).then((res) => {
                              if (res.status === 200) {
                                window.location.reload()
                              }
                            })
                          }}
                        >
                          تایید
                        </CButton>
                    </CTableDataCell>
                    <CTableDataCell>{!item.paired ? 'درحال بررسی' : 'پرداخت شده'}</CTableDataCell>
                  </CTableRow>
                ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}
export default requestedTrans
