import React from 'react'
import { Navbar } from '../Navbar'
import { TWLayout, TWLayoutInner } from './tw-styled'

interface IProps {
  divide_grid?: boolean
  children: React.ReactNode
}

const Layout: React.FC<IProps> = ({ divide_grid, children }) => {
  return (
    <TWLayout>
      <Navbar />
      <TWLayoutInner $divide={divide_grid!}>{children}</TWLayoutInner>
    </TWLayout>
  )
}

export default Layout
