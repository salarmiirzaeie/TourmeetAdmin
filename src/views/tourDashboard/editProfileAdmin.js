import React, { useState } from 'react'
import {
    CAccordion,
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem,
    CAvatar,
    CBadge,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCardImage,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CInputGroup,
    CProgress,
    CRow,
} from '@coreui/react'
import { profile } from 'src/state-management/action/profileAction'

import { cilDelete, cilMonitor, cilPlus, cilStream } from '@coreui/icons'
import { useRef } from 'react'
import { Formik, useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import CIcon from '@coreui/icons-react'
import { editProfile } from 'src/services/usersService'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
const editProfileAdmin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const avatar = useRef()
    const [file, setfile] = useState('')
    const [editmode, setEditmode] = useState(true)
    const profilee = useSelector((state) => state.profileState)
    const formik = useFormik({
        initialValues: {
            name: profilee.name,
            email: profilee.userEmail,
            description: profilee.description,
            profilePhoto: file,
            phoneNumber: '',
        },

        // validationSchema: Yup.object({
        //   title: Yup.string()
        //     .max(30, 'تعداد کاراکتر های وارد شده بیشتر از حد مجاز است !')
        //     .min(5, 'تعداد کاراکتر های وارد شده کمتر از حد مجاز است !')
        //     .required('لطفا عنوان تور را وارد کنید !'),
        //   body: Yup.string()
        //     .max(500, 'تعداد کاراکتر های وارد شده بیشتر از حد مجاز است !')
        //     .min(10, 'تعداد کاراکتر های وارد شده کمتر از حد مجاز است !')
        //     .required('لطفا توضیحات را وارد کنید  !'),
        //   capacity: Yup.number()
        //     .max(1000, 'ظرفیت تور بیشتر از حد مجاز است !')
        //     .required('لطفا ظرفیت تور را وارد کنید !'),
        //   price: Yup.number()
        //     .max(10000000, 'قیمت بیشتر از حد مجاز است !')
        //     .required('لطفا قیمت را وارد کنید !'),
        //   date: Yup.number()
        //     .required('لطفا تاریخ تور را انتخاب کنید !'),
        //   durationTime: Yup.string()
        //     .required('لطفا بازه تور را انتخاب کنید !'),
        //   type: Yup.string()
        //     .max(10, 'Must be 10 characters or less')
        //     .required('لطفا نوع تور را انتخاب کنید !'),
        // }),
        onSubmit: (values, { setSubmitting }) => {
            editProfile(values).then((res) => {
                setTimeout(() => {
                    if (res.status == 200) {
                        swal('Good job!', res.data.message, 'success')
                        console.log(res.data);
                        dispatch(profile(res.data))
                        // navigate(`/dashboard`)

                    } else {
                        swal('خطا', res.data.message, 'error')
                    }
                    // setSubmitting(false)
                }, 400)
            })
        }
    })

    return (
        <>
            <CRow>
                <CCol xs>
                    <CCard className="mb-4">
                        <CCardHeader>پروفایل</CCardHeader>
                        <CRow>
                            <CCol xs={12} md={9} xl={9}>
                                <CCardBody>
                                    <CForm onSubmit={formik.handleSubmit}>
                                        <CFormLabel>نام</CFormLabel>
                                        <CFormInput
                                            type="text"
                                            name="name"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                        // disabled={editmode}
                                        />
                                        <CFormLabel>ایمیل</CFormLabel>
                                        <CFormInput
                                            type="email"
                                            name="email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                        // disabled={editmode}
                                        />
                                        <CFormLabel>تلفن</CFormLabel>
                                        <CFormInput
                                            type="text"
                                            name="phoneNumber"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.phoneNumber}
                                        // disabled={editmode}
                                        />
                                        <CFormLabel>درباره</CFormLabel>
                                        <CFormTextarea
                                            name="description"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.description}
                                        // disabled={editmode}
                                        />
                                        <CFormInput
                                            value={formik.values.profilePhoto}
                                            onBlur={formik.handleBlur}
                                            type="file"
                                            name="profilePhoto"
                                            hidden={true}
                                            ref={avatar}
                                            onChange={(event) => {
                                                setfile(event.currentTarget.files[0])
                                                // console.log(event.currentTarget.files[0])
                                            }}
                                        />
                                        <div className="mt-4">
                                            {/* <CButton
                                                hidden={!editmode}
                                                onClick={() => setEditmode(false)}
                                                color="success"
                                            >
                                                ویرایش
                                            </CButton> */}
                                            <CButton
                                                style={{ padding: 15, margin: 10 }}
                                                // hidden={editmode}
                                                // onClick={formik.handleSubmit}
                                                onClick={formik.handleSubmit}
                                                color="info"
                                                type="submit"
                                            >
                                                ثبت
                                            </CButton>
                                            <CButton
                                                style={{ padding: 15, margin: 10 }}

                                                onClick={() => navigate('/dashboard/profileAdmin')}
                                                // hidden={editmode}
                                                color="danger"
                                            >
                                                انصراف
                                            </CButton>
                                        </div>
                                    </CForm>
                                </CCardBody>
                            </CCol>
                            <CCol xs={12} md={3} xl={3}>
                                <CCardImage
                                    className="rounded-circle"
                                    orientation="top"
                                    src={`http://localhost:3333/uploads/${profilee.profilePhoto}`}
                                />
                                <CButton
                                    // hidden={editmode}
                                    onClick={() => {
                                        avatar.current.click()
                                    }}
                                    className="rounded-circle"
                                >
                                    <CIcon size="lg" icon={cilPlus} />
                                </CButton>
                            </CCol>
                        </CRow>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default editProfileAdmin