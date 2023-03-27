import React, { useEffect, useState } from 'react'
import '../../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useNavigate } from 'react-router-dom'

const Index = () => {
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
      {/* <Helmet>
        <script src="../../assetsjs/main.js" type="text/javascript" />
      </Helmet> */}
      <div>
        {/* <!-- ======= Header ======= --> */}
        <div id="header" className={`fixed-top d-flex flex-start justify-content-center align-items-center ${visible ? null : 'header-transparent'} `}>
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

            <section class="top-nav" >
              <input id="menu-toggle" type="checkbox" />
              <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
              </label>
              <ul class="menu">

                <li><a className="nav-link scrollto active" href="/">صفحه اصلی</a></li>
                {/* <li><a className="nav-link scrollto" href="/">درباره ما</a></li> */}
                <li><a className="nav-link scrollto" href="/">ارتباط با ما</a></li>
                <li><a className="nav-link scrollto" href="/">دانلود اپلیکیشن</a></li>
                <li className='d-md-none'>
                  <a className="nav-link scrollto "
                    onClick={() => { navigate('/dashboard') }}>
                    {token ? 'حساب کاربری' : 'ورود و ثبت نام'}
                  </a></li>

              </ul>
            </section>

            {/* 
            <nav id="navbar" className='navbar top-nav'>


              <ul>
                <li><a className="nav-link scrollto active" href="#hero">صفحه اصلی</a></li>
                <li><a className="nav-link scrollto" href="#about">درباره ما</a></li>
                <li><a className="nav-link scrollto" href="#contact">ارتباط با ما</a></li>
                <li><a className="nav-link scrollto" href="#features">دانلود اپلیکیشن</a></li>
                <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
                <li><a className="nav-link scrollto" href="#team">Team</a></li>
                <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
                <li className="dropdown"><a href="/"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                  <ul>
                    <li><a href="/">Drop Down 1</a></li>
                    <li className="dropdown"><a href="/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                      <ul>
                        <li><a href="/">Deep Drop Down 1</a></li>
                        <li><a href="/">Deep Drop Down 2</a></li>
                        <li><a href="/">Deep Drop Down 3</a></li>
                        <li><a href="/">Deep Drop Down 4</a></li>
                        <li><a href="/">Deep Drop Down 5</a></li>
                      </ul>
                    </li>
                    <li><a href="/">Drop Down 2</a></li>
                    <li><a href="/">Drop Down 3</a></li>
                    <li><a href="/">Drop Down 4</a></li>
                  </ul>
                </li>
              </ul>
              <i className={`bi mobile-nav-toggle ${topnav ? 'bi-x' : 'bi-list'}`}
                onClick={() => {
                  if (topnav) {
                    setTopnav(false)
                  } else { setTopnav(true) }
                }}></i>
            </nav> */}
            {/* <!-- .navbar --> */}
            <div id="logo" className='homlog'>
              <h1 className='DastNevis-font'>تورمیت</h1>
              {/* <a href="index.html"><img src={require("./assets/img/logo.png")} alt="" /></a> */}
            </div>
          </div>
        </div>

        {/* <!-- End Header -->
               <!-- ======= Hero Section ======= --> */}
        <div id="hero">
          <div className="hero-text" data-aos="zoom-out">
            <p>تجربه یک آخر هفته به یاد ماندنی با</p>
            <h2 className="DastNevis-font">تورمیت</h2>
            <p>تور های تفریحی و گردشگری یک تا چند روزه </p>
            {/* <a href="#about" className="btn-get-started scrollto">دانلود اپلیکیشن</a> */}
            <button href="#about" className="btn-get-started scrollto">
              دانلود اپلیکیشن
            </button>
          </div>

          <div className="product-screens">
            <div className="product-screen-1" data-aos="fade-up" data-aos-delay="400">
              <img src={require('../../assets/img/product-screen-1.jpg')} alt="" style={{ borderRadius: 8 }} />
            </div>
            <div className="product-screen-2" data-aos="fade-up" data-aos-delay="200">
              <img src={require('../../assets/img/product-screen-2.jpg')} alt="" style={{ borderRadius: 8 }} />
            </div>

            <div className="product-screen-3" data-aos="fade-up">
              <img src={require('../../assets/img/product-screen-3.jpg')} alt="" style={{ borderRadius: 8 }} />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="section-bg">
          <div className="container-fluid" data-aos="fade-up">
            <div className="section-header">
              <h3 className="section-title">درباره ما</h3>
              <span className="section-divider"></span>
            </div>

            <div className="row">
              <div className="col-lg-6 about-img" data-aos="fade-right" dat-aos-delay="100">
                <img src={require('../../assets/img/about-img.jpg')} alt="" />
              </div>

              <div className="col-lg-6 content" data-aos="fade-left" dat-aos-delay="100">
                <h2>تورمیت چیست ؟</h2>
                <p>
                  تورمیت یک پلتفرم برای ایجاد تور های تفریحی و گردشگری برای برگزارکنندگان وصاحبان
                  تور و جستجوی انواع تور های یک تا چند روزه اعم از :
                </p>

                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i> طبیعت گردی
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> کوهنوردی
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> کویرگردی
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> آفررود
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> دریا
                  </li>
                </ul>
                <p>برای گردشگران عزیز است.</p>
                <p>
                  هدف ما در تورمیت ایجاد یک بستر <strong>امن و رایگان</strong> برای تمامی عزیزانی
                  است که در زمینه گردشگری فعالیت میکنند.
                </p>
                <p>
                  هم برگزارکنندگان تور ها و هم گردشگران به طور کاملا <strong>رایگان</strong>{' '}
                  میتوانند از این پلتفرم استفاده کنند.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Featuress Section ======= --> */}
        <section id="features">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-8 offset-lg-4">
                <div className="section-header">
                  <h3 className="section-title">چرا تورمیت ؟</h3>
                  <span className="section-divider"></span>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 features-img">
                <img
                  src={require('../../assets/img/product-features.png')}
                  alt=""
                  data-aos="fade-right"
                />
              </div>

              <div className="col-lg-8 col-md-7 ">
                <div className="row">
                  <div className="col-lg-6 col-md-6 box" data-aos="fade-up">
                    <div className="icon">
                      <i className="bi bi-currency-dollar"></i>
                    </div>
                    <h4 className="title">رایگان</h4>
                    <p className="description">
                      استفاده از تورمیت کاملا رایگان بوده و هیچگونه اشتراکی بابت استفاده از آن
                      دریافت نخواهد شد
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 box" data-aos="fade-up">
                    <div className="icon">
                      <i className="bi bi-chat-square-text"></i>
                    </div>
                    <h4 className="title">چت آنلاین</h4>
                    <p className="description">
                      قابلیت چت درون برنامه به شما این امکان را میدهد تا با همنوردان و دوستان خود
                      ارتباط برقرار کنید
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 box" data-aos="fade-up" dat-aos-delay="100">
                    <div className="icon">
                      <i className="bi bi-phone "></i>
                    </div>
                    <h4 className="title">رابط کاربری ساده</h4>
                    <p className="description">
                      اپلیکیشن تورمیت دارای رابط کابری بسیار آسان است تا همه بتوانند به راحتی از آن
                      بهره ببرند
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 box" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon">
                      <i className="bi bi-binoculars"></i>
                    </div>
                    <h4 className="title">دسترسی به تور های سراسر کشور</h4>
                    <p className="description">
                      با استفاده از اپلیکیشن تورمیت، در هرجای کشور که هستید میتوانید به تمامی تور
                      های شهر ها دسترسی پیدا کنید
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Featuress Section --> */}

        {/* <!-- ======= Advanced Featuress Section ======= --> */}
        {/* <section id="advanced-features">

          <div className="features-row section-bg" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <img className="advanced-feature-img-right wow fadeInRight" src={require("../../assets/img/advanced-feature-1.jpg")} alt="" />
                  <div>
                    <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse</h2>
                    <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="features-row" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <img className="advanced-feature-img-left" src={require("../../assets/img/advanced-feature-2.jpg")} alt="" />
                  <div>
                    <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse</h2>
                    <i className="bi bi-calendar4-week"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <i className="bi bi-bar-chart"></i>
                    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                    <i className="bi bi-brightness-high"></i>
                    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="features-row section-bg" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <img className="advanced-feature-img-right wow fadeInRight" src={require("../../assets/img/advanced-feature-3.jpg")} alt="" />
                  <div>
                    <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse</h2>
                    <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <i className="bi bi-binoculars"></i>
                    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- End Advanced Featuress Section --> */}

        {/* <!-- ======= Call To Action Section ======= --> */}
        <section id="call-to-action">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-end">
                <h3 className="cta-title">دانلود اپلیکیشن</h3>
                <p className="cta-text">
                  با دانلود اپلیکیشن تورمیت میتوانید به تمامی تور های تفریحی و گردشگری در سراسر کشور
                  دسترسی پیدا کنید{' '}
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <button className="cta-btn align-middle" href="/">
                  دانلود برای اندروید و ios
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Call To Action Section --> */}

        {/* <!-- ======= More Features Section ======= --> */}
        {/* <section id="more-features" className="section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <h3 className="section-title">More Features</h3>
              <span className="section-divider"></span>
              <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>

            <div className="row gy-4">

              <div className="col-lg-6">
                <div className="box">
                  <div className="icon"><i className="bi bi-briefcase"></i></div>
                  <h4 className="title"><a href="/">Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="box">
                  <div className="icon"><i className="bi bi-card-checklist"></i></div>
                  <h4 className="title"><a href="/">Dolor Sitema</a></h4>
                  <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata nodera clas.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="box">
                  <div className="icon"><i className="bi bi-bar-chart"></i></div>
                  <h4 className="title"><a href="/">Sed ut perspiciatis</a></h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trinige zareta lobur trade.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="box">
                  <div className="icon"><i className="bi bi-binoculars"></i></div>
                  <h4 className="title"><a href="/">Magni Dolores</a></h4>
                  <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera</p>
                </div>
              </div>

            </div>
          </div>
        </section> */}
        {/* <!-- End More Features Section --> */}

        {/* <!-- ======= Clients Section ======= --> */}
        {/* <section id="clients">
          <div className="container" data-aos="fade-up">

            <div className="row">

              <div className="col-md-2">
                <img src={require("../../assets/img/clients/client-1.png")} alt="" />
              </div>

              <div className="col-md-2">
                <img src={require("../../assets/img/clients/client-2.png")} alt="" />
              </div>

              <div className="col-md-2">
                <img src={require("../../assets/img/clients/client-3.png")} alt="" />
              </div>

              <div className="col-md-2">
                <img src={require("../../assets/img/clients/client-4.png")} alt="" />
              </div>

              <div className="col-md-2">
                <img src={require("../../assets/img/clients/client-5.png")} alt="" />
              </div>

              <div className="col-md-2">
                <img src={require("../../assets/img/clients/client-6.png")} alt="" />
              </div>

            </div>
          </div>
        </section> */}
        {/* <!-- End Clients Section --> */}

        {/* <!-- ======= Pricing Section ======= --> */}
        {/* <section id="pricing" className="section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <h3 className="section-title">Pricing</h3>
              <span className="section-divider"></span>
              <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>

            <div className="row">

              <div className="col-lg-4 col-md-6">
                <div className="box">
                  <h3>Free</h3>
                  <h4><sup>$</sup>0<span> month</span></h4>
                  <ul>
                    <li><i className="bi bi-check-circle"></i> Quam adipiscing vitae proin</li>
                    <li><i className="bi bi-check-circle"></i> Nec feugiat nisl pretium</li>
                    <li><i className="bi bi-check-circle"></i> Nulla at volutpat diam uteera</li>
                    <li><i className="bi bi-check-circle"></i> Pharetra massa massa ultricies</li>
                    <li><i className="bi bi-check-circle"></i> Massa ultricies mi quis hendrerit</li>
                  </ul>
                  <a href="/" className="get-started-btn">Get Started</a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="box featured">
                  <h3>Business</h3>
                  <h4><sup>$</sup>29<span> month</span></h4>
                  <ul>
                    <li><i className="bi bi-check-circle"></i> Quam adipiscing vitae proin</li>
                    <li><i className="bi bi-check-circle"></i> Nec feugiat nisl pretium</li>
                    <li><i className="bi bi-check-circle"></i> Nulla at volutpat diam uteera</li>
                    <li><i className="bi bi-check-circle"></i> Pharetra massa massa ultricies</li>
                    <li><i className="bi bi-check-circle"></i> Massa ultricies mi quis hendrerit</li>
                  </ul>
                  <a href="/" className="get-started-btn">Get Started</a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="box">
                  <h3>Developer</h3>
                  <h4><sup>$</sup>49<span> month</span></h4>
                  <ul>
                    <li><i className="bi bi-check-circle"></i> Quam adipiscing vitae proin</li>
                    <li><i className="bi bi-check-circle"></i> Nec feugiat nisl pretium</li>
                    <li><i className="bi bi-check-circle"></i> Nulla at volutpat diam uteera</li>
                    <li><i className="bi bi-check-circle"></i> Pharetra massa massa ultricies</li>
                    <li><i className="bi bi-check-circle"></i> Massa ultricies mi quis hendrerit</li>
                  </ul>
                  <a href="/" className="get-started-btn">Get Started</a>
                </div>
              </div>

            </div>
          </div>
        </section> */}
        {/* <!-- End Pricing Section --> */}

        {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
        <div id="faq" className="mx-4">
          <div className="section-header">
            <h3 className="faq-header section-title">سوالات متدوال</h3>
            <span className="section-divider"></span>
          </div>

          <div className="faq-content">
            <div className="faq-question">
              <input id="q1" type="checkbox" className="panel" />
              <div className="plus">+</div>
              <label for="q1" className="panel-title mx-4">
                آیا میتوان از سایت برای مشاهده تور های گردشگری استفاده کرد ؟
              </label>
              <p className="panel-content">
                تورگردان های محترم میتوانند با ثبت نام و ورود به پنل مدیریت، تور های خود را ثبت
                کنند. اما اگر گردشگر هستید میتوانید با نصب اپلیکیشن به تمامی تور ها دسترسی داشته
                باشید.
              </p>
            </div>

            <div className="faq-question">
              <input id="q2" type="checkbox" className="panel" />
              <div className="plus">+</div>
              <label for="q2" className="panel-title mx-4">
                چطور اپلیکیشن تورمیت را نصب کنیم؟
              </label>
              <p className="panel-content">
                از طریق منو اصلی و کلیک بر روی آن میتوانید اپلیکیشن را برای اندروید از طریق بازار و
                برای ios از طریق سیب اپ نصب نمایید.
              </p>
            </div>

            <div className="faq-question">
              <input id="q3" type="checkbox" className="panel" />
              <div className="plus">+</div>
              <label for="q3" className="panel-title mx-4">
                اگر برگزار کننده یا صاحب تور هستیم چگونه تور های خود را ثبت کنیم ؟
              </label>
              <p className="panel-content">
                تورگردان های محترم میتوانند با ثبت نام و ورود به پنل مدیریت، از قسمت ایجاد تور، تور
                های خودرا ثبت کرده و با گردشگران به اشتراک بگذارند.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- End Frequently Asked Questions Section --> */}

        {/* <!-- ======= Team Section ======= --> */}
        {/* <section id="team" className="section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3 className="section-title">Our Team</h3>
              <span className="section-divider"></span>
              <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <div className="pic"><img src={require("../../assets/img/team/team-1.jpg")} alt="" /></div>
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div className="social">
                    <a href="/"><i className="bi bi-twitter"></i></a>
                    <a href="/"><i className="bi bi-facebook"></i></a>
                    <a href="/"><i className="bi bi-instagram"></i></a>
                    <a href="/"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <div className="pic"><img src={require("../../assets/img/team/team-2.jpg")} alt="" /></div>
                  <h4>Sarah Jhinson</h4>
                  <span>Product Manager</span>
                  <div className="social">
                    <a href="/"><i className="bi bi-twitter"></i></a>
                    <a href="/"><i className="bi bi-facebook"></i></a>
                    <a href="/"><i className="bi bi-instagram"></i></a>
                    <a href="/"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <div className="pic"><img src={require("../../assets/img/team/team-3.jpg")} alt="" /></div>
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <div className="social">
                    <a href="/"><i className="bi bi-twitter"></i></a>
                    <a href="/"><i className="bi bi-facebook"></i></a>
                    <a href="/"><i className="bi bi-instagram"></i></a>
                    <a href="/"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <div className="pic"><img src={require("../../assets/img/team/team-4.jpg")} alt="" /></div>
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <div className="social">
                    <a href="/"><i className="bi bi-twitter"></i></a>
                    <a href="/"><i className="bi bi-facebook"></i></a>
                    <a href="/"><i className="bi bi-instagram"></i></a>
                    <a href="/"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section> */}
        {/* <!-- End Team Section --> */}

        {/* <!-- ======= Gallery Section ======= --> */}
        {/* <section id="gallery">
          <div className="container-fluid" data-aos="fade-up">
            <div className="section-header">
              <h3 className="section-title">Gallery</h3>
              <span className="section-divider"></span>
              <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>

            <div className="row g-0">

              <div className="col-lg-4 col-md-6">
                <div className="gallery-item">
                  <a href="../../assets/img/gallery/gallery-1.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                    <img src={require("../../assets/img/gallery/gallery-1.jpg")} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="gallery-item">
                  <a href="../../assets/img/gallery/gallery-2.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                    <img src={require("../../assets/img/gallery/gallery-2.jpg")} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="gallery-item">
                  <a href="../../assets/img/gallery/gallery-3.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                    <img src={require("../../assets/img/gallery/gallery-3.jpg")} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="gallery-item">
                  <a href="../../assets/img/gallery/gallery-4.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                    <img src={require("../../assets/img/gallery/gallery-4.jpg")} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="gallery-item">
                  <a href="../../assets/img/gallery/gallery-5.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                    <img src={require("../../assets/img/gallery/gallery-5.jpg")} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="gallery-item">
                  <a href="../../assets/img/gallery/gallery-6.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                    <img src={require("../../assets/img/gallery/gallery-6.jpg")} alt="" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section> */}
        {/* <!-- End Gallery Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-12 col-md-12">
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
                    <a href="/" className="linkedin">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-6 col-md-6">
                <div className="info">
                  <div >
                    <i className="bi bi-geo-alt"></i>
                    <p>آدرس دفتر: تبریز - میرداماد - بینش 2</p>
                  </div>

                  <div>
                    <i className="bi bi-envelope"></i>
                    <p>ایمیل : sinamadadi.work@gmail.com</p>
                  </div>

                  <div>
                    <i className="bi bi-phone"></i>
                    <p>تلفن پشتیبان : 09046342064</p>
                  </div>

                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
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
      {/* <!-- End  Footer --> */}
      <button
        onClick={scrollToTop}
        href="/"
        className="back-to-top d-flex align-items-center justify-content-center"
        style={{ visibility: visible ? 'visible' : 'hidden' }}
      >
        <i className="bi bi-chevron-up"></i>
      </button>
    </div>
  )
}

export default Index
