import React from 'react'
import { NavLink } from './NavLink'
import { useRouter } from 'next/router'
import { TWNavbar, TWNavLinks } from './tw-styled'
import { SearchBar } from '../SearchBar'

const Navbar: React.FC = () => {
  const {} = useRouter()
  return (
    <TWNavbar>
      <TWNavLinks>
        <NavLink href="/" text="News" />
        <NavLink href="/bookmarks" text="bookmarks" />
      </TWNavLinks>
      <SearchBar />
    </TWNavbar>
  )
}

export default Navbar
