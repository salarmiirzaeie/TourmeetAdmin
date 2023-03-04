import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { useSelector } from 'react-redux'
// routes config
import tourRoutes from '../routes/tourRoutes'
import adminRoutes from 'src/routes/adminRoutes'

const AppContent = () => {
  const type = useSelector((state) => state.profileState.type)
  const token = localStorage.getItem('token')
  
  if (type == "admin") {
    return (
      <CContainer lg>
        <Suspense fallback={<CSpinner color="primary" />}>
          {token ? (
            <Routes>
              {adminRoutes.map((route, idx) => {
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
  } else {
    return (
      <CContainer lg>
        <Suspense fallback={<CSpinner color="primary" />}>
          {token ? (
            <Routes>
              {tourRoutes.map((route, idx) => {
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
  }
}

export default React.memo(AppContent)
