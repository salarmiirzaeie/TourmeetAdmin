import React from 'react'

const Index = React.lazy(() => import('../views/commonPages/Index'))
const buttons = React.lazy(() => import('../views/buttons/buttons/Buttons'))

const HomeRoutes = [
  { path: '/home', exact: true, name: 'Home', element: Index },
  { path: '/home/buttons', name: 'buttons', element: buttons },

]

export default HomeRoutes
