import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
} from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'
import axios from 'axios'
import { Formik } from 'formik'
const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-medium-emphasis">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-medium-emphasis">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div>
      {children}
      <ThemeView />
    </CCol>
  )
}

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const Colors = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Theme colors
          <DocsLink href="https://coreui.io/docs/utilities/colors/" />
        </CCardHeader>
        <CCardBody>
          <CRow>
            <Formik
              initialValues={{
                title: ' پاتاتوریا',
                description: 'بسیار هیجان انگیز',
                caption: 'string',
                dispatch: {
                  name: 'اینجا',
                  latitude: 33.867886,
                  longitude: -63.987,
                },
                destination: {
                  name: 'اینجا',
                  latitude: 33.867886,
                  longitude: -63.987,
                },
                destinationType: 'کوهستانی',
                bannerUrl: 'https://wisgoon.com/pin/21336210/',
                photos: [
                  {
                    url: 'https://png.pngtree.com/png-vector/20201229/ourlarge/pngtree-a-british-short-blue-and-white-cat-png-image_2654518.jpg',
                    caption: 'string',
                  },
                ],
                duration: '2022-08-18T12:03:52.607Z',
                price: 69000,
                capacity: 20,
                approvalStatus: 0,
                organizationId: 3,
              }}
              validate={(values) => {
                const errors = {}

                // if (!values.email) {
                //   errors.email = 'Required'
                // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                //   errors.email = 'Invalid email address'
                // }

                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                // setTimeout(() => {

                axios
                  .post('http://api.tourino-panel.ir/api/tour/list', JSON.stringify(values))
                  .then(function (response) {
                    console.log(response.data)
                  })
                  .catch(function (error) {
                    console.log('جزا')
                  })
                // alert(JSON.stringify(values, null))

                setSubmitting(false)
                // }, 100)
              }}
            >
              {({
                values,

                errors,

                touched,

                handleChange,

                handleBlur,

                handleSubmit,

                isSubmitting,

                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <CFormLabel>عنوان</CFormLabel>
                  <CFormInput
                    type="text"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />

                  {errors.title && touched.title && errors.title}
                  <CFormLabel>توضیحات</CFormLabel>

                  <CFormTextarea
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />

                  {errors.description && touched.description && errors.description}
                  <CFormLabel>زمان</CFormLabel>
                  <CFormInput
                    type="text"
                    name="duration"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.duration}
                  />

                  {errors.duration && touched.duration && errors.duration}
                  <CFormLabel>قیمت</CFormLabel>
                  <CFormInput
                    type="number"
                    name="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                  />

                  {errors.price && touched.price && errors.price}
                  <CFormLabel>ظرفیت</CFormLabel>
                  <CFormInput
                    type="number"
                    name="capacity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.capacity}
                  />

                  {errors.capacity && touched.capacity && errors.capacity}

                  <CButton type="submit" disabled={isSubmitting}>
                    Submit
                  </CButton>
                </form>
              )}
            </Formik>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Colors
