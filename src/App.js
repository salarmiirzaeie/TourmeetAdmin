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
const Page404 = React.lazy(() => import('./views/commonPages/Page404'))
const Page500 = React.lazy(() => import('./views/commonPages/Page500'))
const ForgetPassword = React.lazy(() => import('./views/commonPages/ForgetPassword'))
const EnterNumb = React.lazy(() => import('./views/commonPages/EnterNumb'))
const Changepass = React.lazy(() => import('./views/commonPages/Changepass'))

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
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route exact path="/forgetpassword" name="forgetpassword" element={<ForgetPassword />} />
          <Route exact path="/EnterNumb/:id" name="EnterNumb" element={<EnterNumb />} />
          <Route exact path="/changepass/:token" name="Changepass" element={<Changepass />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
