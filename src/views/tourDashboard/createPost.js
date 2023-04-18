import React, { useEffect, useState, createRef, useRef } from 'react'
import {
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CSpinner,
  CFormSelect,
  CForm,
  CListGroup,
  CPopover,
} from '@coreui/react'
// import { Editor } from '@tinymce/tinymce-react'

import { Field, Formik, useFormik } from 'formik'
import { createPost } from 'src/services/postService'
import swal from 'sweetalert'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import DatePicker, { DateObject } from 'react-multi-date-picker'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const createpost = () => {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      //console.log(editorRef.current.getContent())
    }
  }
  const thisDay = new DateObject({ calendar: persian }).set("date");
  const [btnReset, setBtnReset] = useState(false)
  const [file, setfile] = useState([])
  const weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']
  const [value, setValue] = useState()
  const [endvalue, setendValue] = useState()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      capacity: '',
      manualjoinedcount: 0,
      price: '',
      date: Date.now(),
      durationTime: 1,
      type: 'forest',
      thumbnail: file.name,
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .max(30, 'تعداد کاراکتر های وارد شده بیشتر از حد مجاز است !')
        .min(5, 'تعداد کاراکتر های وارد شده کمتر از حد مجاز است !')
        .required('لطفا عنوان تور را وارد کنید !'),
      body: Yup.string()
        .max(5000, 'تعداد کاراکتر های وارد شده بیشتر از حد مجاز است !')
        .min(10, 'تعداد کاراکتر های وارد شده کمتر از حد مجاز است !')
        .required('لطفا توضیحات را وارد کنید  !'),
      capacity: Yup.number()
        .max(1000, 'ظرفیت تور بیشتر از حد مجاز است !')
        .required('لطفا ظرفیت تور را وارد کنید !'),
      manualjoinedcount: Yup.number()
        .max(1000, 'ظرفیت تور بیشتر از حد مجاز است !')
        .required('لطفا تعداد افرادی که از طریق شما به تور عضو شده اند را وارد کنید !'),
      price: Yup.number()
        .max(10000000, 'قیمت بیشتر از حد مجاز است !')
        .required('لطفا قیمت را وارد کنید !'),
      date: Yup.number().required('لطفا تاریخ رفت تور را انتخاب کنید !'),
      // enddate: Yup.number().required('لطفا تاریخ برگشت تور را انتخاب کنید !'),
      // durationTime: Yup.string()
      //   .required('لطفا بازه تور را انتخاب کنید !'),
      type: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('لطفا نوع تور را انتخاب کنید !'),
    }),
    onSubmit: (values) => {
      const files = Array.prototype.slice.call(file)
      values.thumbnail = files
      values.date = value?.toDate()
      values.enddate = endvalue?.toDate()
      //console.log(values)
      createPost(values).then((res) => {
        setTimeout(() => {
          if (res.status == 200) {
            // swal('Good job!', res.data.message, 'success')
            swal({
              icon: 'success',
              title: 'تور شما با موفقیت ایجاد شد',
              // text: 'تور شما با موفقیت ایجاد شد'
            })
            //console.log(res.data.post)
            formik.resetForm()
            navigate(`/dashboard/postPage/${res.data.post._id}`)
          } else {
            swal('خطا', res.data.message, 'error')
          }
        }, 400)
      })
    },
  })
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>ایجادتور</CCardHeader>
        <CCardBody>
          <CRow>
            <CForm onSubmit={formik.handleSubmit}>
              <CFormLabel>عنوان</CFormLabel>
              <CFormInput
                type="text"
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                {...formik.getFieldProps('title')}
              />
              {formik.touched.title && formik.errors.title ? (
                <div style={{ color: 'red', margin: 10 }}>{formik.errors.title}</div>
              ) : null}
              <CFormLabel style={{ paddingTop: 15 }}>توضیحات</CFormLabel>
              <CPopover
                content="در این قسمت تمامی اطلاعات در مورد سفر باید ذکر شود. مثل: وسایل ضروری، طول مسیر، سخت یا آسان بودن برنامه، بیمه، محل و زمان دقیق حرکت و..."
                placement="bottom"
              >
                {/* <a className='mx-2' style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline', fontSize: '14px' }}>(راهنما)</a> */}
                <CButton className='mx-2' color="info" size="sm" shape="rounded-pill" variant="outline">راهنما</CButton>
              </CPopover>
              <CFormTextarea
                name="body"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.body}
                {...formik.getFieldProps('body')}
              />
              {formik.touched.body && formik.errors.body ? (
                <div style={{ color: 'red', margin: 10 }}>{formik.errors.body}</div>
              ) : null}
              {/* <Editor
                apiKey="your-api-key"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist',
                    'autolink',
                    'lists',
                    'link',
                    'image',
                    'charmap',
                    'preview',
                    'anchor',
                    'searchreplace',
                    'visualblocks',
                    'code',
                    'fullscreen',
                    'insertdatetime',
                    'media',
                    'table',
                    'code',
                    'help',
                    'wordcount',
                  ],
                  toolbar:
                    'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
              />
              <button onClick={log}>Log editor content</button> */}

              <CFormLabel style={{ paddingTop: 15 }}>ظرفیت</CFormLabel>
              <CFormInput
                type="number"
                name="capacity"
                min={10}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.capacity}
                {...formik.getFieldProps('capacity')}
              />
              {formik.touched.capacity && formik.errors.capacity ? (
                <div style={{ color: 'red', margin: 10 }}>{formik.errors.capacity}</div>
              ) : null}
              <CFormLabel style={{ paddingTop: 15 }}>تعداد افراد عضو شده به صورت دستی</CFormLabel>
              <CFormInput
                type="number"
                name="manualjoinedcount"
                min={0}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.capacity}
                {...formik.getFieldProps('manualjoinedcount')}
              />
              {formik.touched.manualjoinedcount && formik.errors.manualjoinedcount ? (
                <div style={{ color: 'red', margin: 10 }}>{formik.errors.manualjoinedcount}</div>
              ) : null}
              <CFormLabel style={{ paddingTop: 15 }}>قیمت(تومان)</CFormLabel>
              <CFormInput
                type="number"
                name="price"
                min={1000}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                {...formik.getFieldProps('price')}
              />
              {formik.touched.price && formik.errors.price ? (
                <div style={{ color: 'red', margin: 10 }}>{formik.errors.price}</div>
              ) : null}
              <CFormLabel style={{ paddingTop: 15 }}>طول تور</CFormLabel>
              <CFormSelect
                name="durationTime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.durationTime}
              >
                <option value={1}>1 روز</option>
                <option value={2}>2 روز</option>
                <option value={3}>3 روز</option>
                <option value={4}>4 روز</option>
                <option value={5}>5 روز</option>
                <option value={6}>6 روز</option>
                <option value={10}>10 روز</option>
                <option value={12}>12 روز</option>
                <option value={7}>1 هفته</option>
                <option value={14}>2 هفته</option>
                <option value={21}>3 هفته</option>
                <option value={30}>1 ماه</option>
              </CFormSelect>
              <CFormLabel style={{ paddingTop: 15 }}>دسته بندی</CFormLabel>
              <CFormSelect
                name="type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.type}
              >
                <option value="forest">طبیعت گردی</option>
                <option value="mountain">کوهنوردی</option>
                <option value="offroad">آفرود</option>
                <option value="sea">دریا</option>
                <option value="desert">کویر</option>
                <option value="historical">اماکن تاریخی</option>
              </CFormSelect>
              <CFormLabel style={{ paddingTop: 15 }}>تاریخ رفت</CFormLabel>
              <br />
              <DatePicker
                className="form-control input-group-lg"
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  height: '35px',
                  textAlign: 'center',
                  opacity: 0.5,
                }}
                containerStyle={{
                  width: '100%',
                }}
                minDate={new DateObject({ calendar: persian }).set('day', thisDay.day)}
                weekDays={weekDays}
                inputClass="custom-input"
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-center"
                value={value}
                onChange={setValue}
                required
              />

              <CFormLabel style={{ paddingTop: 15 }}>تاریخ برگشت</CFormLabel>
              <br />
              <DatePicker
                className="form-control input-group-lg"
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  height: '35px',
                  textAlign: 'center',
                  opacity: 0.5,
                }}
                containerStyle={{
                  width: '100%',
                }}
                minDate={new DateObject({ calendar: persian }).set('day', thisDay.day)}
                weekDays={weekDays}
                inputClass="custom-input"
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-center"
                value={endvalue}
                onChange={setendValue}
                required
              />
              <CFormLabel style={{ paddingTop: 15 }}>عکس</CFormLabel>

              <CInputGroup className="mb-3">
                <CFormInput
                  value={formik.values.thumbnail}
                  onChange={(event) => {
                    setfile(event.currentTarget.files)
                  }}
                  onBlur={formik.handleBlur}
                  type="file"
                  multiple={true}
                  id="thumbnail"
                  required
                />
              </CInputGroup>

              <CButton
                onClick={() => formik.handleSubmit}
                type="submit"
                disabled={formik.isSubmitting}
              >
                <CSpinner
                  hidden={formik.isSubmitting ? false : true}
                  // hidden={!btnReset}
                  component="span"
                  size="sm"
                  aria-hidden="true"
                />
                ثبت
              </CButton>
            </CForm>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default createpost
