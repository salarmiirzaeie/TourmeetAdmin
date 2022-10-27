import React from 'react'
import { useSelector } from 'react-redux'
import HomeAppContent from 'src/components/HomeAppContent'
import HomeHeader from 'src/components/HomeHeader'
import { AppContent, AppSidebar, AppHeader, AppFooter } from '../components/index'

const HomeLayout = () => {
  const type = useSelector((state) => state.profileState.type)
  return (
    <div>
      {/* <AppSidebar /> */}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <HomeHeader />
        <div className="body ">
          <HomeAppContent />
        </div>
       <AppFooter />
      </div>
    </div>
  )
}

export default HomeLayout
