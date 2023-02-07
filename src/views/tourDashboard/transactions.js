import React from 'react'
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
// import '/src/scss/style.scss'
const transactions = () => {
    return (
        <CTable striped bordered borderColor="primary" align="middle" responsive >
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">ردیف</CTableHeaderCell>
                    <CTableHeaderCell scope="col">نام گردشگر</CTableHeaderCell>
                    <CTableHeaderCell scope="col">نام تور</CTableHeaderCell>
                    <CTableHeaderCell scope="col">شماره همراه</CTableHeaderCell>
                    <CTableHeaderCell scope="col">شماره تراکنش</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>ناصیر</CTableDataCell>
                    <CTableDataCell>تور شمال</CTableDataCell>
                    <CTableDataCell>09141112020</CTableDataCell>
                    <CTableDataCell>2020</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>مناف</CTableDataCell>
                    <CTableDataCell>گلستان باغی</CTableDataCell>
                    <CTableDataCell>09142221010</CTableDataCell>
                    <CTableDataCell>6969</CTableDataCell>
                </CTableRow>
                <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell >شراره</CTableDataCell>
                    <CTableDataCell>تور کویر</CTableDataCell>
                    <CTableDataCell>09143331111</CTableDataCell>
                    <CTableDataCell>8585</CTableDataCell>
                </CTableRow>
            </CTableBody>
        </CTable>
    )
}

export default transactions