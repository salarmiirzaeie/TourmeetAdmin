import React from 'react'
import { useSelector } from 'react-redux'
import { AppContent, AppSidebar, AppHeader, AppFooter } from '../components/index'

const DefaultLayout = () => {
  const type = useSelector((state) => state.profileState.type)
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        {type == 'tourist' ? <AppFooter /> : ''}
      </div>
    </div>
  )
}

export default DefaultLayout
