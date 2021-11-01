import tw from 'tailwind-styled-components'

export const TWLayout = tw.div`
    w-full
    h-screen
    p-[40px]
    bg-[#242525]
    overflow-hidden
`
type Inner = {
  $divide: boolean
}

export const TWLayoutInner = tw.main<Inner>`
    grid
    ${(p) => (p.$divide ? 'gap-4' : '')}
    ${(p) => (p.$divide ? 'grid-cols-3' : '')}
`
