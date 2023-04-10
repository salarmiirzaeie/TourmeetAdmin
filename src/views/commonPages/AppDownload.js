import React, { useEffect, useState } from 'react'
import '../../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useNavigate } from 'react-router-dom'

const AppDownload = () => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }
  window.addEventListener('scroll', toggleVisible)
  const navigate = useNavigate()
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }, [])
  const [topnav, setTopnav] = useState(false)
  const token = localStorage.getItem('token')

  return (
    <div>
      <div id="header" className={`fixed-top d-flex flex-start justify-content-center align-items-center `}>
        <div className="container d-flex  align-items-center">
          <div>
            <button onClick={() => {
              navigate('/dashboard')
            }}
              className="btn-get-started scrollto"
            >
              {token ? 'حساب کاربری' : 'ورود و ثبت نام'}
            </button>
          </div>

          <section className="top-nav" >
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
              <div className='menu-button'></div>
            </label>
            <ul className="menu">

              <li><a className="nav-link scrollto active" href="/">صفحه اصلی</a></li>
              {/* <li><a className="nav-link scrollto" href="/">درباره ما</a></li> */}
              <li><a className="nav-link scrollto" href="/#/contact">ارتباط با ما</a></li>
              <li><a className="nav-link scrollto" href="/#/download">دانلود اپلیکیشن</a></li>
              <li className='d-md-none'>
                <a className="nav-link scrollto "
                  onClick={() => { navigate('/dashboard') }}>
                  {token ? 'حساب کاربری' : 'ورود و ثبت نام'}
                </a></li>

            </ul>
          </section>

          {/* 
           
                    {/* <!-- .navbar --> */}
          <div id="logo" className='homlog'>
            <h1 className='DastNevis-font'>تورمیت</h1>
            {/* <a href="index.html"><img src={require("./assets/img/logo.png")} alt="" /></a> */}
          </div>
        </div>
      </div>
      <div className='mt-5 pt-5 container marketImg'>
        <div>
          <h4>اپلیکیشن تورمیت</h4>
          <p>با نصب اپلیکیشن تورمیت، به همه تور ها در سرتاسر ایران دسترسی پیدا کن!</p>
          <p style={{ fontSize: 13 }}>نسخه ios اپلیکیشن بزودی راه اندازی خواهد شد.</p>
          <a href='http://cafebazar.ir/app/?id=com.Tourmeet&ref=share'><img src={require('../../assets/img/bazaar.webp')} /> </a>
          <a href='https://myket.ir/app/com.Tourmeet'><img src={require('../../assets/img/myket.webp')} /> </a>
        </div>
        <div className='mt-5 mb-5'>
          <h4>چرا از اپلیکیشن تورمیت استفاده کنیم؟</h4>
          <p>دیگه لازم نیست تا ۱۰۰ تا پیج اینستاگرامی رو دنبال کنی .

            با اپلیکیشن تورمیت همه ی تورهارو میتونی ببینی و اونیکه دوست داری رو انتخاب کنی و علاوه بر اون:</p>
          <h5><i className="bi bi-currency-dollar"></i>     قیمت های ویژه</h5>
          <p>قیمت های ویژه با تخفیف های وسوسه انگیز، فقط در اپلیکیشن تورمیت قابل خرید می باشد</p>
          <h5><i className="bi bi-megaphone"></i>     اطلاع رسانی</h5>
          <p>با نصب اپلیکیشن تورمیت هیچ تخفیف و یا جشنواره فروشی
            را از دست ندهید</p>
          <h5><i className="bi bi-calendar-heart"></i>     آسودگی خاطر</h5>
          <p>با دانلود اپلیکیشن تورمیت دیگه نگران این نباش که کجا و کی و چطوری بری! همه چی باماست</p>
          <h5><i className="bi bi-chat-square-text"></i>     چت آنلاین</h5>
          <p>قابلیت چت درون برنامه به شما این امکان را میدهد تا با همنوردان و دوستان خود ارتباط برقرار کنید</p>
        </div>
      </div>

      <section id="contact">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-4 col-md-6  mb-4">
              <h4>درباره ما</h4>
              <p>
                تورمیت یک پلتفرم رایگان برای  سازماندهی و یکپارچه سازی برای دسترسی آسان به تمامی تور های تفریحی و گردشگری برای تمامی افراد است. با نصب اپلیکیشن گردشگران میتوانند به تمامی تور های متنوع تفریحی در سرتاسر کشور دسترسی پیدا کنند. </p>
            </div>
            {/* <div className="col-lg-4 col-md-6 text-center mb-4">
                <div className="info">
                  <div >
                    <i className="bi bi-geo-alt mx-3 "></i>
                    <p>آدرس دفتر: تبریز - میرداماد - بینش 2</p>
                  </div>

                  <div>
                    <i className="bi bi-envelope mx-3"></i>
                    <p>ایمیل : info@tourmeet.com</p>
                  </div>

                  <div>
                    <i className="bi bi-phone mx-3"></i>
                    <p>تلفن پشتیبان : 09046342064</p>
                  </div>

                </div>
              </div> */}

            <div className="col-lg-5 col-md-6 mt-3">
              <div className="contact-about">
                <h3 className="text-center">مارا در شبکه های اجتماعی دنبال کنید.</h3>
                <br />
                {/* <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p> */}
                <div className="social-links text-center">
                  <a href="/" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="/" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/tourmeet" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>



            <div className="col-lg-3 col-md-12 text-center">
              <p>اعتماد شما افتخار ما</p>
              <a referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=333225&amp;Code=nD9Cc3gyS6U7flz1s3ez"><img referrerPolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=333225&amp;Code=nD9Cc3gyS6U7flz1s3ez" alt="" style={{ 'cursor': 'pointer' }} id="nD9Cc3gyS6U7flz1s3ez" /></a>
            </div>

          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg- text-lg-center">

              <div>کلیه حقوق این سایت محفوظ است.</div>
              <div className="credits">
                {/* <!--
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Avilon
          --> */}
                <a href="/"></a> طراحی شده با   🧡
              </div>
            </div>
            {/* <div className="col-lg-6">
              <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                <a href="#intro" className="scrollto">Home</a>
                <a href="#about" className="scrollto">About</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms of Use</a>
              </nav>
            </div> */}
          </div>
        </div>
      </footer>
    </div>)
}

export default AppDownload