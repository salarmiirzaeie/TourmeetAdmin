import React, { Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { useSelector } from 'react-redux'
// routes config
import routes from '../routes/tourRoutes'
import routes2 from 'src/routes/adminRoutes'
import routes3 from 'src/routes/routes3'

import { isAuth } from 'src/utils/helpers'
import Index from 'src/views/pages/Index'
import HomeRoutes from 'src/routes/Homeroutes'
const HomeAppContent = () => {
  const type = useSelector((state) => state.profileState.type)
  const token = localStorage.getItem('token')
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>

        <Routes>
          {HomeRoutes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(HomeAppContent)
