import React from 'react'

const adminDashboard = React.lazy(() => import("../views/adminDashboard/adminDashboard"))
const requestedposts = React.lazy(() => import('../views/adminDashboard/requestedposts'))
const requestedPostPage = React.lazy(() => import('../views/adminDashboard/requestedPostPage'))
const requestedTours = React.lazy(() => import('../views/adminDashboard/requestedTours'))
const requestedTourPage = React.lazy(() => import('../views/adminDashboard/requestedTourPage'))
const requestedTrans = React.lazy(() => import('../views/adminDashboard/requestedTrans'))
const versionControl = React.lazy(() => import('../views/adminDashboard/versionControl'))
const allcompanies = React.lazy(() => import('../views/adminDashboard/allcompanies'))

const adminRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/adminDashboard', name: 'adminDashboard', element: adminDashboard },
  { path: '/adminDashboard/requestedposts', name: 'requestedposts', element: requestedposts },
  { path: '/adminDashboard/requestedPostPage/:id', name: 'post', element: requestedPostPage },
  { path: '/adminDashboard/requestedTours', name: 'requestedTours', element: requestedTours },
  { path: '/adminDashboard/requestedTrans', name: 'requestedTrans', element: requestedTrans },
  { path: '/adminDashboard/requestedTourPage/:id', name: 'requestedTourPage', element: requestedTourPage },
  { path: '/adminDashboard/versionControl', name: 'versionControl', element: versionControl },
  { path: '/adminDashboard/allcompanies', name: 'allcompanies', element: allcompanies },

]

export default adminRoutes
