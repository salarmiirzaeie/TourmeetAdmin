import React, { Component, Suspense, useState, useEffect } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
// Pages
const Login = React.lazy(() => import('./views/commonPages/Login'))
const Index = React.lazy(() => import('./views/commonPages/Index'))
const Register = React.lazy(() => import('./views/commonPages/Register'))
const Peyment = React.lazy(() => import('./views/commonPages/Peyment'))
const CallbackPage = React.lazy(() => import('./views/commonPages/CallbackPage'))
const ForgetPassword = React.lazy(() => import('./views/commonPages/ForgetPassword'))
const EnterNumb = React.lazy(() => import('./views/commonPages/EnterNumb'))
const Changepass = React.lazy(() => import('./views/commonPages/Changepass'))
const ContactUs = React.lazy(() => import('./views/commonPages/ContactUs'))
const AppDownload = React.lazy(() => import('./views/commonPages/AppDownload'))

const App = () => {
  const token = localStorage.getItem('token')

  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          {/* <Route path="*" name="Home" element={<HomeLayout />} /> */}
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/" name="Index" element={<Index />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/peyment" name="Page 404" element={<Peyment />} />
          <Route exact path="/500" name="Page 500" element={<CallbackPage />} />
          <Route exact path="/forgetpassword" name="forgetpassword" element={<ForgetPassword />} />
          <Route exact path="/EnterNumb/:id" name="EnterNumb" element={<EnterNumb />} />
          <Route exact path="/changepass/:token" name="Changepass" element={<Changepass />} />
          <Route exact path="/contact" name="ContactUs" element={<ContactUs />} />
          <Route exact path="/download" name="AppDownload" element={<AppDownload />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
