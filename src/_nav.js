import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilBolt,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilMediaStop,
  cilNotes,
  cilPencil,
  cilPlus,
  cilPuzzle,
  cilRunning,
  cilSpeedometer,
  cilStar,
  cilToilet,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  {
    component: CNavGroup,
    name: 'تور',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'ایجادتور',
        to: '/dashboard/createPost',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,

      },
      {
        component: CNavItem,
        name: 'تورهای من',
        to: '/dashboard/myTours',
        icon: <CIcon icon={cilRunning} customClassName="nav-icon" />,

      }
     
    ],
  },
]

export default _nav
