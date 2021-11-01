import React, { SVGAttributes } from 'react'

type IProps = SVGAttributes<SVGElement>

const FavoriteIcon: React.FC<IProps> = ({ ...props }) => {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.76398 2.47485V9.79631L5.71358 8.5601L6.48257 8.23781L7.25277 8.5572L10.2703 9.80855V2.47485H2.76398ZM0.763977 0.474854H12.2703V12.8031L6.48665 10.4047L0.763977 12.8031V0.474854Z"
        fill="white"
      />
    </svg>
  )
}

export default FavoriteIcon
