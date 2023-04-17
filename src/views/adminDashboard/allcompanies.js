import React, { useEffect, useState } from 'react'
import { deletecampbyadmin } from 'src/services/adminService'
import { getallcompany } from 'src/services/blogService'
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
import { formDate } from 'src/utils/helpers'
const allcompanies = () => {
  const [camps, setcamps] = useState([])
  useEffect(() => {
    getallcompany().then((res) => {
      setcamps(res.data)
    })
  }, [])
  return (
    <>
      <CCard>
        <CCardBody>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">نام </CTableHeaderCell>
                <CTableHeaderCell scope="col"> ایمیل</CTableHeaderCell>
                <CTableHeaderCell scope="col">موجودی</CTableHeaderCell>
                <CTableHeaderCell scope="col">موجودی بلاک</CTableHeaderCell>
                <CTableHeaderCell scope="col">شهر</CTableHeaderCell>
                <CTableHeaderCell scope="col">زمان ایجاد</CTableHeaderCell>
                <CTableHeaderCell scope="col">حذف</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {camps &&
                camps?.map((item, i) => (
                  <CTableRow key={i}>
                    <CTableHeaderCell scope="row">{item.name}</CTableHeaderCell>

                    <CTableDataCell>{item.email}</CTableDataCell>
                    <CTableDataCell>{item.money}</CTableDataCell>
                    <CTableDataCell>{item.blockedmoney}</CTableDataCell>
                    <CTableDataCell>{item.city===12?'تبریز':'تهران'}</CTableDataCell>
                    <CTableDataCell>{formDate(item.createdAt)}</CTableDataCell>

                    <CTableDataCell>
                      <CButton
                        className="btn btn-danger"
                        onClick={() => {
                          deletecampbyadmin(item._id).then((res) => {
                            if (res.status === 200) {
                              window.location.reload()
                            }
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
        </CCardBody>
      </CCard>
    </>
  )
}
export default allcompanies
