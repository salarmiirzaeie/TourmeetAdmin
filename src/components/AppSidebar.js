import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'



import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../tourSideNav'
import navigation2 from '../adminSideNav'

import { increment } from 'src/state-management/action/sidebarAction'
import { cilTerrain } from '@coreui/icons'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.counState.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.counState.sidebarShow)
  const type = useSelector((state) => state.profileState.type)
  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(increment({ sidebarShow: visible }))
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <p className="sidebar-brand-full bglogo tourmeet-font" >تورمیت</p>
        {/* لوگوی سایدبار */}
        <CIcon className="sidebar-brand-narrow bglogo" icon={cilTerrain} />
        {/* <img className="sidebar-brand-narrow bglogo" src='../assets/images/ic_launcher (1).png' /> */}
        {/* لوگوی کوچک سایدبار */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={type == "admin" ? navigation2 : navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(increment({ sidebarUnfoldable: !unfoldable }))}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
