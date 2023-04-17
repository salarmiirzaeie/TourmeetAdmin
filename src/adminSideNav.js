import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDoor,
  cilDrop,
  cilHotTub,
  cilList,
  cilNotes,
  cilPencil,
  cilPlus,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const adminSideNav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/adminDashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavItem,
    name: 'تورهای درانتظار',
    to: '/adminDashboard/requestedposts',
    icon: <CIcon icon={cilDoor} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'شرکت های درانتظار',
    to: '/adminDashboard/requestedTours',
    icon: <CIcon icon={cilHotTub} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'تراکنش های درانتظار',
    to: '/adminDashboard/requestedTrans',
    icon: <CIcon icon={cilHotTub} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'کنترل ورژن',
    to: '/adminDashboard/versionControl',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: ' شرکت ها',
    to: '/adminDashboard/allcompanies',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
]

export default adminSideNav
