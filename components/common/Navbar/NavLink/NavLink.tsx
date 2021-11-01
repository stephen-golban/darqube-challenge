import React from 'react'
import { TWNavLink } from './tw-styled'
import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'

interface IProps extends LinkProps {
  text: string
}

const NavLink: React.FC<IProps> = ({ text, ...props }) => {
  const { pathname } = useRouter()
  return (
    <Link {...props} passHref>
      <TWNavLink $active={props.href === pathname}>{text}</TWNavLink>
    </Link>
  )
}

export default NavLink
