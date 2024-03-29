import React from 'react'

const Dashboard = React.lazy(() => import('../views/tourDashboard/Dashboard'))
const myTours = React.lazy(() => import('../views/tourDashboard/myTours'))
const postPage = React.lazy(() => import('../views/tourDashboard/postPage'))
const profileAdmin = React.lazy(() => import('../views/tourDashboard/profileAdmin'))
const rejectedTours = React.lazy(() => import('../views/tourDashboard/rejectedTours'))
const galleryPage = React.lazy(() => import('../views/tourDashboard/galleryPage'))
const security = React.lazy(() => import('../views/tourDashboard/security'))
const permissionsPage = React.lazy(() => import('../views/tourDashboard/permissionsPage'))
const transactions = React.lazy(() => import('../views/tourDashboard/transactions'))
const createPost = React.lazy(() => import('../views/tourDashboard/createPost'))
const withdraw = React.lazy(() => import('../views/tourDashboard/withdraw'))
const withdrawList = React.lazy(() => import('../views/tourDashboard/withdrawList'))
const Equity = React.lazy(() => import('../views/tourDashboard/equity'))
const tourLeaders = React.lazy(() => import('../views/tourDashboard/tourLeaders'))
const editProfileAdmin = React.lazy(() => import('../views/tourDashboard/editProfileAdmin'))
const Statistics = React.lazy(() => import('../views/tourDashboard/Statistics'))
const Cards = React.lazy(() => import('../views/tourDashboard/Cards'))

const tourRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/dashboard/createPost', name: 'createPost', element: createPost, exact: true },
  { path: '/dashboard/rejectedTours', name: 'rejectedTours', element: rejectedTours },
  { path: '/dashboard/myTours', name: 'myTours', element: myTours },
  { path: '/dashboard/postPage/:id', name: 'postPage', element: postPage },
  { path: '/dashboard/profileAdmin', name: 'profileAdmin', element: profileAdmin },
  { path: '/dashboard/galleryPage', name: 'galleryPage', element: galleryPage },
  { path: '/dashboard/security', name: 'security', element: security },
  { path: '/dashboard/permissionsPage', name: 'permissionsPage', element: permissionsPage },
  { path: '/dashboard/transactions', name: 'transactions', element: transactions },
  { path: '/dashboard/withdraw', name: 'withdraw', element: withdraw },
  { path: '/dashboard/withdrawList', name: 'withdrawList', element: withdrawList },
  { path: '/dashboard/equity', name: 'Equity', element: Equity },
  { path: '/dashboard/tourLeaders', name: 'tourLeaders', element: tourLeaders },
  { path: '/dashboard/editProfileAdmin', name: 'editProfileAdmin', element: editProfileAdmin },
  { path: '/dashboard/statistics/:id', name: 'Statistics', element: Statistics },
  { path: '/dashboard/cards', name: 'Cards', element: Cards },

]

export default tourRoutes
