import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilArrowThickTop,
  cilBell,
  cilBolt,
  cilBusAlt,
  cilCalculator,
  cilCash,
  cilChartLine,
  cilChartPie,
  cilCursor,
  cilDelete,
  cilDollar,
  cilDrop,
  cilFilterPhoto,
  cilImage,
  cilLineWeight,
  cilList,
  cilMediaStop,
  cilNotes,
  cilPencil,
  cilPlus,
  cilPuzzle,
  cilRecycle,
  cilRunning,
  cilSpeedometer,
  cilStar,
  cilThumbDown,
  cilToilet,
  cilTransfer,
  cilUser,
  cilWalk,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const tourSideNav = [
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
  {
    component: CNavGroup,
    name: 'تور',
    icon: <CIcon icon={cilBusAlt} customClassName="nav-icon" />,
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
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'تورهای ردشده',
        to: '/dashboard/rejectedTours',
        icon: <CIcon icon={cilThumbDown} customClassName="nav-icon" />,
      },
    ],
  },
  // {
  //   component: CNavTitle,
  //   name: 'مالی',
  // },
  {
    component: CNavGroup,
    name: 'مالی',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'درخواست جدید',
        to: '/dashboard/withdraw',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'لیست درخواست ها',
        to: '/dashboard/withdrawList',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'تور لیدر ها',
    to: '/dashboard/tourLeaders',
    icon: <CIcon icon={cilWalk} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },

  // {
  //   component: CNavItem,
  //   name: 'گالری',
  //   to: '/dashboard/galleryPage',
  //   icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
  //   // badge: {
  //   //   color: 'info',
  //   //   text: 'NEW',
  //   // },
  // },
]

export default tourSideNav
