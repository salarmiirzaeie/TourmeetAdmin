import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CRow,
  CNavbarText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilLocationPin, cilMap, cilMenu } from '@coreui/icons'

import { AppHeaderDropdown } from './header/index'
import { increment } from 'src/state-management/action/sidebarAction'
import { userProfile } from 'src/services/usersService'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.counState.sidebarShow)
  const [profile, setProfile] = useState({ profilePhotos: [], money: '', city: '', isAccept: '' })

  useEffect(() => {
    userProfile().then((res) => {
      if (res.status === 200) {
        setProfile(res.data)
        console.log(res.data)
      }
    })
  }, [])
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch(increment({ sidebarShow: !sidebarShow }))}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex me-auto">
          {/* <CNavItem>
            <CNavbarText component={NavLink}>
              موجودی کل
            </CNavbarText>
            <CNavbarText>{profile.money}</CNavbarText>

          </CNavItem>
          <CNavItem className='mx-5'>
            <CNavbarText>موجودی بلوکه شده</CNavbarText>
            <CNavbarText>{profile.money}</CNavbarText>
          </CNavItem> */}

        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <CNavbarText className='mx-4'> <CIcon icon={cilLocationPin} /> {profile.city}</CNavbarText>

          <AppHeaderDropdown
            profilePhoto={profile?.profilePhotos[0]}
            isAccept={profile?.isAccept}
          />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
