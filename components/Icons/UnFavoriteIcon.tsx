import React, { SVGAttributes } from 'react'

type IProps = SVGAttributes<SVGElement>

const UnFavoriteIcon: React.FC<IProps> = ({ ...props }) => {
  return (
    <svg width="13" height="13" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 0H41V43.9286L20.3913 35.3824L0 43.9286V0Z" fill="white" />
    </svg>
  )
}

export default UnFavoriteIcon
