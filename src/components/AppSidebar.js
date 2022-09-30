import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'



import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import navigation2 from '../_nav2'

import { increment } from 'src/state-management/action/sidebarAction'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.counState.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.counState.sidebarShow)
  const admin = useSelector((state) => state.profileState.admin)
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
        <p className="sidebar-brand-full bglogo">Tourino</p>
        {/* لوگوی سایدبار */}
        <p className="sidebar-brand-narrow bglogo">T</p>
        {/* لوگوی کوچک سایدبار */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={admin?navigation2:navigation} />
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
