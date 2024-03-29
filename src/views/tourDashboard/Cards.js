import React, { useEffect, useState } from 'react'
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
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CProgress,
  CRow,
  CForm,
  CCardText,
} from '@coreui/react'
import { cilDelete, cilMonitor, cilPlus, cilStream, cilTrash } from '@coreui/icons'
import { useRef } from 'react'
import { Formik, useFormik } from 'formik'
import { useSelector } from 'react-redux'
import CIcon from '@coreui/icons-react'
import { changePassword, resetPassword } from 'src/services/usersService'
import swal from 'sweetalert'
import $ from 'jquery'
import * as Yup from 'yup'
import { addcard, deletecard, usercards } from 'src/services/adminService'

const Cards = () => {
  const [disabel, setdisable] = useState(true)
  function iso13616Prepare(iban) {
    iban = iban
    iban = iban.toUpperCase()
    iban = iban.substr(4) + iban.substr(0, 4)

    let A = 'A'.charCodeAt(0),
      Z = 'Z'.charCodeAt(0)

    return iban
      .split('')
      .map(function (n) {
        let code = n.charCodeAt(0)
        if (code >= A && code <= Z) {
          return code - A + 10
        } else {
          return n
        }
      })
      .join('')
  }

  function iso7064Mod97_10(iban) {
    let remainder = iban,
      block

    while (remainder.length > 2) {
      block = remainder.slice(0, 9)
      remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length)
    }

    return parseInt(remainder, 10) % 97
  }

  function ConvertNumberP2E(StrWithNumber) {
    let fn = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    let fn2 = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
    let en = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    do {
      let StrWithNumber2 = StrWithNumber
      for (let i = 0; i < 10; i++) {
        StrWithNumber = StrWithNumber.replace(fn[i], en[i])
        StrWithNumber = StrWithNumber.replace(fn2[i], en[i])
      }

      if (StrWithNumber2 === StrWithNumber) {
        break
      }
    } while (true)
    return StrWithNumber
  }

  function limit_number() {
    let input = $(this)
    setTimeout(function () {
      input.val(ConvertNumberP2E(input.val()).replace(/[^\d]+/g, ''))
    })
  }

  function getBankFromShaba(code) {
    switch (code) {
      case '010':
        return ['markazi', 'بانک مرکزی', '010']
        break
      case '011':
        return ['sanatmadan', 'بانک صنعت و معدن', '011']
        break
      case '012':
        return ['mellat', 'بانک ملت', '012']
        break
      case '013':
        return ['refah', 'بانک رفاه', '013']
        break
      case '014':
        return ['maskan', 'بانک مسکن', '014']
        break
      case '015':
        return ['sepah', 'بانک سپه', '015']
        break
      case '016':
        return ['keshaletsi', 'بانک کشاورزی', '016']
        break
      case '017':
        return ['meli', 'بانک ملی ایران', '017']
        break
      case '018':
        return ['tejarat', 'بانک تجارت', '018']
        break
      case '019':
        return ['saderat', 'بانک صادرات', '019']
        break
      case '020':
        return ['tooseesaderat', 'بانک توسعه صادرات', '020']
        break
      case '021':
        return ['postbank', 'پست بانک ایران', '021']
        break
      case '022':
        return ['toosetaavon', 'بانک توسعه تعاون', '022']
        break
      case '051':
        return ['etebaritosee', 'موسسه اعتباری توسعه', '051']
        break
      case '053':
        return ['karafarin', 'بانک کارآفرین', '053']
        break
      case '054':
        return ['parsian', 'بانک پارسیان', '054']
        break
      case '055':
        return ['eghtesad', 'بانک اقتصاد نوین', '055']
        break
      case '056':
        return ['saman', 'بانک سامان', '056']
        break
      case '057':
        return ['pasargad', 'بانک پاسارگاد', '057']
        break
      case '058':
        return ['sarmaye', 'بانک سرمایه', '058']
        break
      case '059':
        return ['sina', 'بانک سینا', '059']
        break
      case '060':
        return ['gharzolhasaneh', 'بانک قرض الحسنه مهر', '060']
        break
      case '061':
        return ['shahr', 'بانک شهر', '061']
        break
      case '062':
        return ['tat', 'بانک تات', '062']
        break
      case '063':
        return ['ansar', 'بانک انصار', '063']
        break
      case '064':
        return ['gardeshgari', 'بانک گردشگری', '064']
        break
      case '065':
        return ['hekmat', 'بانک حکمت ایرانیان', '065']
        break
      case '066':
        return ['day', 'بانک دی', '066']
        break
      case '069':
        return ['iranzamin', 'بانک ایران زمین', '069']
        break
      default:
        return ['no-img', 'بانک مرکزی', '000']
    }
  }

  function getBankFromCard(code) {
    switch (code) {
      case '603799':
        return ['meli', '603799', 'بانک ملی']
        break
      case '589210':
        return ['sepah', '589210', 'بانک سپه']
        break
      case '627961':
        return ['sanatmadan', '627961', 'بانک صنعت و معدن']
        break
      case '603770':
        return ['keshaletsi', '603770', 'بانک کشاورزی']
        break
      case '628023':
        return ['maskan', '628023', 'بانک مسکن']
        break
      case '627760':
        return ['postbank', '627760', 'پست بانک']
        break
      case '502908':
        return ['tosehe', '502908', 'بانک توسعه']
        break
      case '627412':
        return ['eghtesad', '627412', 'بانک اقتصاد']
        break
      case '622106':
        return ['parsian', '622106', 'بانک پارسیان']
        break
      case '502229':
        return ['pasargad', '502229', 'بانک پاسارگاد']
        break
      case '627488':
        return ['karafarin', '627488', 'بانک کارآفرین']
        break
      case '621986':
        return ['saman', '621986', 'بانک سامان']
        break
      case '639346':
        return ['sina', '639346', 'بانک سینا']
        break
      case '639607':
        return ['sarmaye', '639607', 'بانک سرمایه']
        break
      case '502806':
        return ['shahr', '502806', 'بانک شهر']
        break
      case '502938':
        return ['day', '502938', 'بانک دی']
        break
      case '603769':
        return ['saderat', '603769', 'بانک صادرات']
        break
      case '610433':
        return ['mellat', '610433', 'بانک ملت']
        break
      case '627353':
        return ['tejarat', '627353', 'بانک تجارت']
        break
      case '589463':
        return ['refah', '589463', 'بانک رفاه']
        break
      case '627381':
        return ['ansar', '627381', 'بانک انصار']
        break
      case '639370':
        return ['mehreqtesad', '639370', 'بانک مهراقتصاد']
        break
      case '639599':
        return ['ghavamin', '639599', 'بانک قوامین']
        break
      case '504172':
        return ['resalat', '504172', 'بانک رسالت']
        break
      default:
        return ['no-img', null, 'نامشخص']
    }
  }

  function validateCard(code) {
    let L = code.length
    if (L < 16 || parseInt(code.substr(1, 10), 10) == 0 || parseInt(code.substr(10, 6), 10) == 0)
      return false
    let c = parseInt(code.substr(15, 1), 10)
    let s = 0
    let k, d
    for (let i = 0; i < 16; i++) {
      k = i % 2 == 0 ? 2 : 1
      d = parseInt(code.substr(i, 1), 10) * k
      s += d > 9 ? d - 9 : d
    }
    return s % 10 == 0
  }

  const [bankName, setBankName] = useState([])
  $(document).ready(function () {
    $('.creditcart-input').on('input', function (e) {
      e.stopPropagation()
      e.stopImmediatePropagation()

      let cardnumber = e.currentTarget.value
      e.currentTarget.style.borderColor = 'lime'
      if (validateCard(cardnumber) === false) e.currentTarget.style.borderColor = 'red'
      let number = cardnumber.substring(6, -16)
      let bankData = getBankFromCard(number)
      setBankName(bankData)
      document.querySelector('.creditcart>img').src = require('../../assets/images/bank-iran/' +
        bankData[0] +
        '.png')
    })

    $('.shaba-input')
      .on('paste', limit_number)
      .on('blur', limit_number)
      .on('keypress', limit_number)
      .on('input', function () {
        let input = $(this)
        setTimeout(function () {
          let shaba = ConvertNumberP2E(input.val().replace(/\-/g, '')).toUpperCase()
          if (shaba.length >= 6) {
            let shabaCode = shaba.substr(2, 3)
            let shabbankd = getBankFromShaba(shabaCode)
            // document.querySelector('.shaba-number>img').src = require("../../assets/images/bank-iran/" + shabbankd[0] + ".png")
          }
          if (shaba.length === 0) {
            input.parent().removeClass('has-error')
            input.parent().removeClass('has-error')
            setdisable(true)

            return
          }
          if (shaba.length !== 24 || iso7064Mod97_10(iso13616Prepare('IR' + shaba)) !== 1) {
            input.parent().addClass('has-error')
            input.focus()
            input.css('border-color', 'red')
            setdisable(true)


          } else {
            input.css('border-color', 'lime')
            input.parent().removeClass('has-error')
            setdisable(false)

          }
        }, 100)
      })
    $('.creditcart-input')
      .on('paste', limit_number)
      .on('blur', limit_number)
      .on('keypress', limit_number)
      .on('input', function () {
        let input = $(this)
        setTimeout(function () {
          let shaba = input.val()
          //console.log(shaba)
          if (shaba.length === 0) {
            input.parent().removeClass('has-error')
            input.parent().removeClass('has-error')
            setdisable(true)

            return
          }
          if (shaba.length !== 16) {
            input.parent().addClass('has-error')
            input.focus()
            input.css('border-color', 'red')
            setdisable(true)


          } else {
            input.css('border-color', 'lime')
            input.parent().removeClass('has-error')
            setdisable(false)

          }
        }, 100)
      })
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    let card = $('.creditcart-input').val()
    let shaba = $('.shaba-input').val()
    addcard({ card: card, shaba: shaba, bankname: bankName[2] }).then((res) => {
      if (res.status === 200) {
        window.location.reload()
      } else {
        swal(res.data.message)
      }
    })
  }
  const [cards, setcards] = useState([])
  useEffect(() => {
    usercards().then((res) => {
      //console.log(res)
      if (res.status === 200) {
        setcards(res.data)
      }
    })
  }, [])
  const validationSchema = () => Yup.object({

    card: Yup.number().min(5).max(10).required(),
    shaba: Yup.number().min(5).max(10).required(),
  });

  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>کارت ها</CCardHeader>
          <CRow>
            <form onSubmit={handleSubmit}>
              <CCol xs={12} md={12} xl={12}>
                <CCardBody>
                  <div className="creditcart">
                    <img width="50px" src={require('../../assets/images/bank-iran/no-img.png')} />
                    <CFormLabel style={{ paddingTop: 15 }}>شماره کارت</CFormLabel>
                    <CFormInput
                      type="text"
                      name="bankNumber"
                      className="creditcart-input"
                      style={{ direction: 'rtl' }}
                      placeholder="شماره کارت را وارد کنید"
                    />
                  </div>

                  <div className="shaba-number">
                    {/* <img width="50px" src={require("../../assets/images/bank-iran/no-img.png")} /> */}
                    <CFormLabel style={{ paddingTop: 15 }}>شماره شبا</CFormLabel>
                    <CFormInput
                      type="text"
                      name="shabaNumber"
                      className="shaba-input"
                      style={{ direction: 'rtl' }}
                      placeholder=" کد شبا را وارد کنید (بدون IR) "
                    />
                  </div>
                  <br />
                  <CButton
                    // onClick={() => formik.handleSubmit}
                    type="submit"
                    disabled={disabel}
                  // disabled={formik.isSubmitting}
                  >
                    ثبت
                  </CButton>
                </CCardBody>
              </CCol>
            </form>
          </CRow>
        </CCard>
        <CCard>
          <CCardHeader>کارت ها</CCardHeader>
          <CCardBody>
            <CRow>
              {cards.map((item, i) => (
                <CCol key={i} xs={12} md={6} xl={4} className='mb-2'>
                  <CCard xs
                    className={`mb-1 border-top-dark border-top-3`}
                    style={{ marginTop: 10 }}
                  >
                    <CCardHeader>اطلاعات حساب</CCardHeader>
                    <CCardBody>
                      <CCardText>{item.bankname} </CCardText>
                      <CCardText>شماره کارت : {item.card}</CCardText>
                      <CCardText>شماره شبا : {item.shaba}</CCardText>
                    </CCardBody>
                  </CCard>
                  <CButton
                    onClick={() => {
                      deletecard({ cardid: item.id }).then((res) => {
                        if (res.status === 200) {
                          window.location.reload()
                        }
                      })
                    }}
                    className="btn btn-danger h-auto w-100 mb-2"
                  >
                    <CIcon icon={cilTrash} />
                  </CButton>
                </CCol>
              ))}
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards
