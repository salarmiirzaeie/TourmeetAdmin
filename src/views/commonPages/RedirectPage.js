import React, { useEffect, useState } from 'react'
import { verify } from 'src/services/blogService'
import '../../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import CIcon from '@coreui/icons-react'
import { cilCheck, cilCheckCircle, cilXCircle } from '@coreui/icons'

const RedirectPage = () => {
  const address = window.location.href
  const urlparams = new URLSearchParams(address)
  const [stat, setmstate] = useState(0)
  const [data, setdata] = useState('')
  useEffect(() => {
    verify({
      Authority: urlparams.get('Authority'),
      userId: urlparams.get('UserId'),
      postId: urlparams.get('postId'),
      Status: urlparams.get('Status')
    }).then((res) => {
      if (res.status === 200) {
        setmstate(1)
        setdata(res.data.title)
      } else {
        setmstate(2)
      }
      //console.log(res)
    })
  }, [])
  return (
    <div>
      <div className="transactionStatus pt-5">
        {stat === 1 ? (
          <>
            <CIcon icon={cilCheckCircle} size="3xl" style={{ color: 'green' }} />
            <h3>پرداخت با موفقیت انجام شد</h3>
            <p style={{ color: 'gray' }}>
              همسفر عزیز، شما با موفقیت به <strong className="bold">{data}</strong> پیوستید.
            </p>
            <p>
              هم اکنون میتوانید با مراجعه به قسمت تور های من در اپلیکیشن، وضعیت تور های خود را
              مشاهده نمایید.
            </p>
          </>
        ) : stat === 2 ? (
          <>
            <CIcon icon={cilXCircle} size="3xl" style={{ color: 'red' }} />
            <h3>پرداخت ناموفق بود</h3>
            <p style={{ color: 'gray' }}>
              همسفر گرامی، متاسفانه مشکلی در هنگام پرداخت رخ داده است.
            </p>
            <p>
              در صورتی که پولی از حساب شما کسر شده است، ظرف 72 ساعت کاری به حساب شما باز خواهد گشت.
              در غیر این صورت با کارشناسان ما در بخش پشتیبانی تماس حاصل فرمایید.
            </p>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default RedirectPage
