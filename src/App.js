import React, { Component, Suspense, useState, useEffect } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import { isAuth } from './utils/helpers'
import Index from './views/commonPages/Index'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/commonPages/Login'))
const Register = React.lazy(() => import('./views/commonPages/Register'))
const Page404 = React.lazy(() => import('./views/commonPages/Page404'))
const Page500 = React.lazy(() => import('./views/commonPages/Page500'))

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          {/* <Route path="*" name="Home" element={<HomeLayout />} /> */}
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
