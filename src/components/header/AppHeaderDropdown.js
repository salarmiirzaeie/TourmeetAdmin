import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilToggleOff,
  cilAccountLogout,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar8 from './../../assets/images/avatars/8.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { profile } from 'src/state-management/action/profileAction'
import { Link, useNavigate } from 'react-router-dom'
const AppHeaderDropdown = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profile = useSelector((state) => state.profileState)

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={`http://localhost:3333/uploads/${profile.profilePhoto}`} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Tasks
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
        <CDropdownItem href="/#/dashboard/profileAdmin">
          <CIcon icon={cilUser} className="me-2" />
          {/* <Link to={"/dashboard/profileAdmin"}> Profile</Link> */}
          پروفایل
        </CDropdownItem>
        <CDropdownItem href="/#/dashboard/security">
          <CIcon icon={cilLockLocked} className="me-2" />
          امنیت
        </CDropdownItem>
        {/* <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem> */}
        {/* <CDropdownDivider /> */}
        <CDropdownItem
          href="#"
          onClick={() => {
            localStorage.removeItem('token')
            localStorage.clear()

            navigate('login')
          }}
        >
          <CIcon icon={cilAccountLogout} className="me-2" />
          خروج
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
