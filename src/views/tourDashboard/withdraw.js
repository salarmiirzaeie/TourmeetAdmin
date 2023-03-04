import React from 'react'
import { CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CRow, CCol, CForm, CFormLabel, CFormInput, CButton, CSpinner } from '@coreui/react';
import { Field, Formik, useFormik } from 'formik'
import * as Yup from 'yup';
import swal from 'sweetalert';

const withdraw = () => {
    const formik = useFormik({
        initialValues: {
            price: '',
        },

        validationSchema: Yup.object({
            price: Yup.number()
                .min(10000, 'حداقل مبلغ برداشت باید 10 هزار تومان باشد !')
                .required('لطفا قیمت را وارد کنید !'),
        }),
        onSubmit: values => {
            // console.log("object");
            // console.log(values)
            setTimeout(() => {
                swal('Good job!', 'koskesh')
                formik.resetForm()

            }, 400)


        },
    });


    return (
        <>
            <CCard className="mb-4">
                <CCardHeader>ایجادتور</CCardHeader>
                <CCardBody>
                    <CRow>
                        <CForm onSubmit={formik.handleSubmit}>
                            <CCard
                                className={`mb-3 border-top-dark border-top-3`}
                                // color='dark'
                                // textColor='white'
                                className="mb-3"
                                style={{ maxWidth: '18rem', marginRight: 10, marginTop: 10 }}
                            >
                                <CCardHeader>شماره حساب مقصد</CCardHeader>
                                <CCardBody>
                                    {/* <CCardTitle>card title</CCardTitle> */}
                                    <CCardText>
                                        بانک مسکن
                                    </CCardText>
                                    <CCardText>
                                        شماره حساب: 111333888777</CCardText>
                                    <CCardText>
                                        شبا:IR114993300008811188</CCardText>
                                </CCardBody>
                            </CCard>
                            <CFormLabel>مبلغ</CFormLabel>
                            <CFormInput
                                placeholder='لطفا مبلغ مورد نظر را به تومان وارد نمایید'
                                type="number"
                                name="price"
                                min={10000}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.price}
                                {...formik.getFieldProps('price')}
                            />
                            {formik.touched.price && formik.errors.price ? (
                                <div style={{ color: 'red', margin: 10 }} >{formik.errors.price}</div>
                            ) : null}
                            <CButton
                                // onClick={() => formik.handleSubmit}
                                onClick={() => {
                                    formik.handleSubmit
                                    // console.log('pox')
                                }}
                                type="submit" disabled={formik.isSubmitting}
                                style={{ margin: 10 }}
                            >
                                ثبت درخواست
                            </CButton>
                        </CForm>
                    </CRow>
                </CCardBody>
            </CCard>
        </>
    )
}

export default withdraw