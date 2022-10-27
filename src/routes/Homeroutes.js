import React from 'react'

const Index = React.lazy(() => import('../views/pages/Index'))
const buttons = React.lazy(() => import('../views/buttons/buttons/Buttons'))

const HomeRoutes = [
  { path: '/home', exact: true, name: 'Home', element: Index},
  { path: '/home/buttons', name: 'buttons' , element: buttons },

]

export default HomeRoutes
