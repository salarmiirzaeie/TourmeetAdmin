import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CRow,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CSpinner,
  CTable,
  CTableDataCell,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableHead,
  CFormSelect,
} from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import { Field, Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import swal from 'sweetalert'
import { createTransactions, getincome, usercards } from 'src/services/adminService'

const withdraw = () => {
  const [money, setmoney] = useState({})
  const [cards, setcards] = useState([])
  useEffect(() => {
    getincome().then((res) => {
      if (res.status === 200) {
        setmoney(res.data)
        console.log(res.data)
      }
    })
    usercards().then((res) => {
      if (res.status === 200) {
        setcards(res.data)
      }
    })
  }, [])
  const formik = useFormik({
    initialValues: {
      price: '',
      card: 0,
    },

    validationSchema: Yup.object({
      price: Yup.number()
        .min(10000, 'حداقل مبلغ برداشت باید 10 هزار تومان باشد !')
        .required('لطفا قیمت را وارد کنید !'),
    }),
    onSubmit: (values) => {
      // console.log("object");
      setTimeout(() => {
        createTransactions(values).then((res) => {
          swal('Good job!', res.data.message)
          if (res.status === 200) {
            window.location.reload()
          }
        })
        formik.resetForm()
      }, 400)
    },
  })

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>حسابداری</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs>
              <CCard
                color="primary"
                // xs={{ cols: 1 }}

                textColor="white"
                className="mb-3"
                style={{ maxWidth: '18rem', marginRight: 10, marginTop: 10 }}
                // key={index}
              >
                <CCardHeader>موجودی کل</CCardHeader>
                <CCardBody>
                  {/* <CCardTitle>card title</CCardTitle> */}
                  <CCardText>{money.blokedmony + money.money}تومان</CCardText>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol xs>
              <CCard
                color="success"
                // xs={{ cols: 1 }}

                textColor="white"
                className="mb-3"
                style={{ maxWidth: '18rem', marginRight: 10, marginTop: 10 }}
                // key={index}
              >
                <CCardHeader>موجودی قابل برداشت</CCardHeader>
                <CCardBody>
                  {/* <CCardTitle>card title</CCardTitle> */}
                  <CCardText>{money.money}تومان</CCardText>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol xs>
              <CCard
                color="info"
                // xs={{ cols: 1 }}
                textColor="white"
                className="mb-3"
                style={{ maxWidth: '18rem', marginRight: 10, marginTop: 10 }}
                // key={index}
              >
                <CCardHeader>موجودی غیر قابل برداشت</CCardHeader>
                <CCardBody>
                  {/* <CCardTitle>card title</CCardTitle> */}
                  <CCardText>{money.blokedmony}تومان</CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
            <CForm onSubmit={formik.handleSubmit}>
              <CFormLabel>کارت</CFormLabel>
              <CFormSelect
                name="card"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                
                value={formik.values.card}
                {...formik.getFieldProps('card')}
              >

               
                {cards.map((item, i) => (
                  <option key={i} value={item.id}>
                    {item.bankname}
                    {'IR' + item.shaba}
                  </option>
                ))}
              </CFormSelect>
              <CFormLabel>مبلغ</CFormLabel>
              <CFormInput
                placeholder="لطفا مبلغ مورد نظر را به تومان وارد نمایید"
                type="number"
                name="price"
                min={10000}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                {...formik.getFieldProps('price')}
              />
              {formik.values.price > money.money ? (
                <p style={{ color: 'red', margin: 10 }}>موجودی کافی نمیباشد !</p>
              ) : null}
              {formik.touched.price && formik.errors.price ? (
                <div style={{ color: 'red', margin: 10 }}>{formik.errors.price}</div>
              ) : null}
              {formik.values.price > money.money ? (
                <CButton
                  // onClick={() => formik.handleSubmit}
                  onClick={() => {
                    formik.handleSubmit
                    // console.log('pox')
                  }}
                  type="submit"
                  disabled
                  style={{ margin: 10 }}
                >
                  ثبت درخواست
                </CButton>
              ) : (
                <CButton
                  // onClick={() => formik.handleSubmit}
                  onClick={() => {
                    formik.handleSubmit
                    // console.log('pox')
                  }}
                  type="submit"
                  disabled={formik.isSubmitting}
                  style={{ margin: 10 }}
                >
                  ثبت درخواست
                </CButton>
              )}
            </CForm>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>تراکنش ها</CCardHeader>
        <CCardBody>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">مبلغ </CTableHeaderCell>
                <CTableHeaderCell scope="col">تاریخ درخواست</CTableHeaderCell>
                <CTableHeaderCell scope="col">وضعیت</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {money &&
                money.transactions?.map((item, i) => (
                  <CTableRow key={i}>
                    <CTableHeaderCell scope="row">{item.amount}</CTableHeaderCell>

                    <CTableDataCell>{item.createdAt}</CTableDataCell>
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

export default withdraw
