import React from 'react'
import { Navbar } from '../Navbar'
import { TWLayout, TWLayoutInner, TWLayoutInnerContent } from './tw-styled'

interface IProps {
  divide_grid?: boolean
  children: React.ReactNode
}

const Layout: React.FC<IProps> = ({ divide_grid, children }) => {
  return (
    <TWLayout>
      <TWLayoutInner>
        <Navbar />
        <TWLayoutInnerContent $divide={divide_grid}>{children}</TWLayoutInnerContent>
      </TWLayoutInner>
    </TWLayout>
  )
}

export default Layout
