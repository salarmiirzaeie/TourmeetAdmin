import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilBolt,
  cilCalculator,
  cilCash,
  cilChartPie,
  cilCursor,
  cilDelete,
  cilDollar,
  cilDrop,
  cilFilterPhoto,
  cilImage,
  cilMediaStop,
  cilNotes,
  cilPencil,
  cilPlus,
  cilPuzzle,
  cilRecycle,
  cilRunning,
  cilSpeedometer,
  cilStar,
  cilToilet,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'داشبورد',
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
    name: 'مالی',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'برداشت وجه',
        to: '/dashboard/createPost',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,

      },
      {
        component: CNavItem,
        name: 'تراکنش ها',
        to: '/dashboard/createPost',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,

      },
     
     
    ],
  },
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

      },
      {
        component: CNavItem,
        name: 'تورهای ردشده',
        to: '/dashboard/rejectedTours',
        icon: <CIcon icon={cilDelete} customClassName="nav-icon" />,

      }
     
    ],
  },
  {
    component: CNavItem,
    name: 'گالری',
    to: '/dashboard/galleryPage',
    icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
]

export default _nav
