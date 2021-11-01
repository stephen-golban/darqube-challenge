import tw from 'tailwind-styled-components'

type NavLink = {
  $active: boolean
}

export const TWNavLink = tw.a<NavLink>`
    mr-5
    leading-8
    font-bold
    capitalize
    text-[28px]
    text-white
    ${(p) => (p.$active ? 'opacity-100' : 'opacity-50')}
`
