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
import { formDate } from 'src/utils/helpers'

const requestedTrans = () => {
  const [transs, settrsnz] = useState([])
  useEffect(() => {
    getalltrans().then((res) => {
      if (res.status === 200) {
        settrsnz(res.data)
        //console.log(res.data)
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
                <CTableHeaderCell scope="col">کارت</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {transs &&
                transs?.map((item, i) => (
                  <CTableRow key={i}>
                    <CTableHeaderCell scope="row">{item.amount}</CTableHeaderCell>

                    <CTableDataCell>{formDate(item.createdAt)}</CTableDataCell>
                    <CTableDataCell>
                      <CButton onClick={() => { Navigate('login') }}>کاربر</CButton>
                    </CTableDataCell>

                    <CTableDataCell>{!item.paired ? 'درحال بررسی' : 'پرداخت شده'}</CTableDataCell>
                    <CTableDataCell>{item.card?.shaba},{item?.card?.card},{item?.card?.bankname}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        className="btn btn-success"
                        onClick={() => {
                          setpair({ id: item._id, data: true }).then((res) => {
                            if (res.status === 200) {
                              window.location.reload()
                            }
                          })
                        }}
                      >
                        تایید
                      </CButton>
                    </CTableDataCell>
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
