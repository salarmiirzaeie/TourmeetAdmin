import React, { useRef, useState } from 'react'
import {
    CCard, CCardBody, CCardHeader, CCardText, CCardTitle,
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
    CTableRow, CTableHeaderCell, CTableHead
} from '@coreui/react';
import { Button } from '@coreui/coreui';

// const columns = [
//     {
//         key: 'name',
//         label: 'نام لیدر',
//         _props: { scope: 'col' },
//     },
//     {
//         key: 'phone',
//         label: 'شماره تلفن',
//         _props: { scope: 'col' },
//     },
//     {
//         key: 'email',
//         label: 'ایمیل',
//         _props: { scope: 'col' },
//     },
//     {
//         key: 'delete',
//         label: 'حذف لیدر',
//         _props: { scope: 'col' },
//     },
// ]
// const items = [
//     {
//         name: 784512,
//         phone: '85000 تومان ',
//         email: '1401/8/5',
//         delete: 'موفق',
//         _cellProps: { id: { scope: 'row' } },
//     },
//     {
//         name: 145898,
//         phone: '75000 تومان ',
//         email: '1401/9/5',
//         delete: 'd',
//         _cellProps: { id: { scope: 'row' } },
//     },
//     {
//         name: 986523,
//         phone: '95000 تومان ',
//         email: '1401/11/5',
//         delete: 'موفق',
//         _cellProps: { id: { scope: 'row' } },
//     },
// ]

const tourLeaders = () => {
    const [show, setshow] = useState(false)
    const input = useRef()
    return (
        <>
            <CCard className="mb-4">
                <CCardHeader className='lead'>لیدرها</CCardHeader>
                <CCardBody>
                    <CInputGroup>
                        <CFormInput ref={input} onChange={() => {
                            if (input.current.value !== '' && input.current.value !== null)
                                setshow(true); else { setshow(false) }
                        }} aria-label="Text input with segmented dropdown button" />
                        <CDropdown className='tourLeader'
                            aria-hidden={false} alignment="end" variant="input-group">
                            <CButton type="button" color="secondary" variant="outline">اضافه کردن</CButton>
                            <CDropdownMenu className={`w-100 ${show ? 'show' : ''} mt-5`}>
                                <CDropdownItem href="#">Action</CDropdownItem>
                                <CDropdownItem href="#">Another action</CDropdownItem>
                                <CDropdownItem href="#">Something else here</CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem href="#">Separated link</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                    </CInputGroup>

                    <CRow className="p-2 mt-3">
                        <CCol xs>
                            <CCard>
                                <CTable>
                                    <CTableHead>
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">نام لیدر</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">شماره تلفن</CTableHeaderCell>
                                            {/* <CTableHeaderCell scope="col">ایمیل</CTableHeaderCell> */}
                                            <CTableHeaderCell scope="col">حذف لیدر</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">صمد بهرنگی</CTableHeaderCell>
                                            <CTableDataCell>09142226611</CTableDataCell>
                                            <CTableDataCell><CButton>حذف</CButton></CTableDataCell>

                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">اخوان ثالث</CTableHeaderCell>
                                            <CTableDataCell>091411113366</CTableDataCell>
                                            {/* <CTableDataCell>salis@gmail.com</CTableDataCell> */}
                                            <CTableDataCell><CButton>حذف</CButton></CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">نیما یوشیج</CTableHeaderCell>
                                            <CTableDataCell>091477771122</CTableDataCell>
                                            {/* <CTableDataCell>nima@gmail.com</CTableDataCell> */}
                                            <CTableDataCell><CButton>حذف</CButton></CTableDataCell>

                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CCard>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </>)
}

export default tourLeaders