import React from 'react'


const postPageT = React.lazy(() => import('../views/touristDashboard/postPageT'))
const touristDashboard = React.lazy(() => import('../views/touristDashboard/touristDashboard'))
const profile = React.lazy(() => import('../views/dashboard/profileAdmin'))

const routes3 = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/touristDashboard', name: 'touristDashboard', element: touristDashboard },
  { path: '/touristDashboard/postPageT/:id', name: 'postPageT', element: postPageT },
  { path: '/touristDashboard/profile', name: 'profile', element: profile },



]

export default routes3
