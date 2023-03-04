import React from 'react'
import { CCard, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';

const withdrawList = () => {
    const columns = [
        {
            key: 'trackingNum',
            label: 'شماره پیگیری',
            _props: { scope: 'col' },
        },
        {
            key: 'price',
            label: 'مبلغ برداشت',
            _props: { scope: 'col' },
        },
        {
            key: 'date',
            label: 'تاریخ برداشت',
            _props: { scope: 'col' },
        },
        {
            key: 'status',
            label: 'وضعیت',
            _props: { scope: 'col' },
        },
    ]
    const items = [
        {
            trackingNum: 784512,
            price: '85000 تومان ',
            date: '1401/8/5',
            status: 'موفق',
            _cellProps: { id: { scope: 'row' } },
        },
        {
            trackingNum: 145898,
            price: '75000 تومان ',
            date: '1401/9/5',
            status: 'موفق',
            _cellProps: { id: { scope: 'row' } },
        },
        {
            trackingNum: 986523,
            price: '95000 تومان ',
            date: '1401/11/5',
            status: 'موفق',
            _cellProps: { id: { scope: 'row' } },
        },
    ]
    return (
        <CCard>
            <CRow className="p-2">
                <CCol xs={12} md={12} xl={12}>
                    <CTable align="middle" columns={columns} items={items} striped />
                </CCol>
            </CRow>
        </CCard>
    )

}

export default withdrawList