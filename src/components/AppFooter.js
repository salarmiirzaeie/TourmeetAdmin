import React from 'react'
import { CCol, CFooter, CNav, CNavItem, CNavLink, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilHome, cilList, cilListFilter, cilListHighPriority, cilListLowPriority, cilListRich, cilUser, cilUserFemale, cilUserFollow, cilUserPlus, cilUserX } from '@coreui/icons'

const AppFooter = () => {
  return (
    <CFooter position="sticky" className="d-md-none p-0 rounded-3 bg-white">
      <CNav variant="pills" className="w-100" layout="fill">
        <CNavItem>
          <CNavLink href='/#/touristDashboard' className="text-center">
            <CIcon icon={cilHome} />
          </CNavLink>
        </CNavItem>
        <CNavItem className="">
          <CNavLink href='#' className="text-center">
            <CIcon icon={cilListRich} />
          </CNavLink>
        </CNavItem>
        <CNavItem>
        <CNavLink href='/#/touristDashboard/profile' className="text-center rounded-3 bg-light">
            <CIcon icon={cilUser} />
          </CNavLink>
        </CNavItem>
      </CNav>
    </CFooter>
  )
}

export default React.memo(AppFooter)
