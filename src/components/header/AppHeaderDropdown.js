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
  cilCheck,
  cilDelete,
  cilInfo,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar8 from './../../assets/images/avatars/8.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { profile } from 'src/state-management/action/profileAction'
import { Link, useNavigate } from 'react-router-dom'
const AppHeaderDropdown = ({ isAccept,profilePhoto }) => {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar
          src={`http://localhost:3333/uploads/profilePhotos/${profilePhoto?.name}`}
          size="md"
        />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">پروفایل</CDropdownHeader>

        <CDropdownItem href="/#/dashboard/permissionsPage" className="p-3">
          <CIcon icon={cilCreditCard} className="me-2" />
          {'مجوزها'}
          <CBadge
            shape="rounded-pill"
            // className='p-2'
            color={isAccept == 'accept' ? 'success' : isAccept == 'waiting' ? 'info' : 'danger'}
          >
            {isAccept}
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-2">تنظیمات</CDropdownHeader>
        <CDropdownItem href="/#/dashboard/profileAdmin">
          <CIcon icon={cilUser} className="me-2" />
          پروفایل
        </CDropdownItem>
        <CDropdownItem href="/#/dashboard/security">
          <CIcon icon={cilLockLocked} className="me-2" />
          امنیت
        </CDropdownItem>
        
        <CDropdownItem
          onClick={() => {
            localStorage.removeItem('token')
            localStorage.clear()
            dispatch(profile({}))
            

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
