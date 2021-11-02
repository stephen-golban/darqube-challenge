import React, { SVGAttributes } from 'react'

type IProps = SVGAttributes<SVGElement>

const SearchIcon: React.FC<IProps> = ({ ...props }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.17203 9.17597L12.472 12.3L9.17203 9.17597ZM1.52503 5.37497C1.5272 4.51229 1.78502 3.6696 2.26591 2.95337C2.74679 2.23714 3.42917 1.67951 4.22684 1.35092C5.0245 1.02234 5.90166 0.93754 6.74749 1.10725C7.59333 1.27695 8.36989 1.69355 8.97906 2.3044C9.58824 2.91525 10.0027 3.69295 10.1701 4.53925C10.3375 5.38555 10.2503 6.26247 9.91949 7.05923C9.58871 7.85599 9.02921 8.53683 8.31166 9.01575C7.59411 9.49467 6.75072 9.75017 5.88803 9.74997C5.31428 9.74919 4.74631 9.6354 4.21654 9.41511C3.68677 9.19482 3.20558 8.87234 2.80044 8.46608C2.39529 8.05983 2.07414 7.57775 1.8553 7.04738C1.63647 6.517 1.52424 5.94872 1.52503 5.37497V5.37497Z"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  )
}

export default SearchIcon