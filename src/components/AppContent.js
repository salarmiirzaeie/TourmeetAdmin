import React, { Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { useSelector } from 'react-redux'
// routes config
import routes from '../routes'
import routes2 from 'src/routes2'
import routes3 from 'src/routes3'

import { isAuth } from 'src/utils/helpers'
const AppContent = () => {
  const type = useSelector((state) => state.profileState.type)
  const token = localStorage.getItem('token')
  // const [authenticated, setAuthenticated] = useState(false)
  // useEffect(() => {
  //   isAuth(token).then((res) => {
  //     if (res.status == 200) {
  //       console.log(res.status)
  //       setAuthenticated(true)
  //     }
  //   })
  // }, [token])
  if (type=="admin") {
    return (
      <CContainer lg>
        <Suspense fallback={<CSpinner color="primary" />}>
          {token ? (
            <Routes>
              {routes2.map((route, idx) => {
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

              <Route path="*" element={<Navigate to={'adminDashboard'} replace />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="*" element={<Navigate to={'login'} replace />} />
            </Routes>
          )}
        </Suspense>
      </CContainer>
    )
  } else if(type=="tour") {
    return (
      <CContainer lg>
        <Suspense fallback={<CSpinner color="primary" />}>
          {token ? (
            <Routes>
              {routes.map((route, idx) => {
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

              <Route path="*" element={<Navigate to={'dashboard'} replace />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="*" element={<Navigate to={'login'} replace />} />
            </Routes>
          )}
        </Suspense>
      </CContainer>
    )
  }else if(type=="tourist") {
    return (
      <CContainer lg>
        <Suspense fallback={<CSpinner color="primary" />}>
          {token ? (
            <Routes>
              {routes3.map((route, idx) => {
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

              <Route path="*" element={<Navigate to={'touristDashboard'} replace />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="*" element={<Navigate to={'login'} replace />} />
            </Routes>
          )}
        </Suspense>
      </CContainer>
    )
  }
}

export default React.memo(AppContent)
