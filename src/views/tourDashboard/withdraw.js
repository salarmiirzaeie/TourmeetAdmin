import React from 'react'
import { CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CRow, CCol } from '@coreui/react';
import { CChart } from '@coreui/react-chartjs';

const withdraw = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm'>
                    <CCard
                        color='primary'
                        // xs={{ cols: 1 }}

                        textColor='white'
                        className="mb-3"
                        style={{ maxWidth: '18rem' }}
                    // key={index}
                    >
                        <CCardHeader>موجودی کل</CCardHeader>
                        <CCardBody>
                            {/* <CCardTitle>card title</CCardTitle> */}
                            <CCardText>
                                110,000 هزار تومان
                            </CCardText>
                        </CCardBody>
                    </CCard>
                    <CCard
                        color='success'
                        // xs={{ cols: 1 }}

                        textColor='white'
                        className="mb-3"
                        style={{ maxWidth: '18rem' }}
                    // key={index}
                    >
                        <CCardHeader>موجودی قابل برداشت</CCardHeader>
                        <CCardBody>
                            {/* <CCardTitle>card title</CCardTitle> */}
                            <CCardText>
                                80,000 هزار تومان
                            </CCardText>
                        </CCardBody>
                    </CCard>

                    <CCard
                        color='info'
                        // xs={{ cols: 1 }}
                        textColor='white'
                        className="mb-3"
                        style={{ maxWidth: '18rem' }}
                    // key={index}
                    >
                        <CCardHeader>موجودی غیر قابل برداشت</CCardHeader>
                        <CCardBody>
                            {/* <CCardTitle>card title</CCardTitle> */}
                            <CCardText>
                                30,000 هزار تومان
                            </CCardText>
                        </CCardBody>
                    </CCard>
                </div>
                <div className='col-sm'>
                    <CChart
                        style={{
                            width: 350,
                            alignItems: 'center',
                            textAlign: 'center'
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
                </div>
            </div>
        </div>
    )
}

export default withdraw