import React from 'react'

const adminDashboard = React.lazy(() => import("../views/adminDashboard/adminDashboard"))
const requestedposts = React.lazy(() => import('../views/adminDashboard/requestedposts'))
const requestedPostPage = React.lazy(() => import('../views/adminDashboard/requestedPostPage'))
const requestedTours = React.lazy(() => import('../views/adminDashboard/requestedTours'))
const requestedTourPage = React.lazy(() => import('../views/adminDashboard/requestedTourPage'))

const adminRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/adminDashboard', name: 'adminDashboard', element: adminDashboard },
  { path: '/adminDashboard/requestedposts', name: 'requestedposts', element: requestedposts },
  { path: '/adminDashboard/requestedPostPage/:id', name: 'post', element: requestedPostPage },
  { path: '/adminDashboard/requestedTours', name: 'requestedTours', element: requestedTours },
  { path: '/adminDashboard/requestedTourPage/:id', name: 'requestedTourPage', element: requestedTourPage },

]

export default adminRoutes
