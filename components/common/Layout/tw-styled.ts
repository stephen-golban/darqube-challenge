import tw from 'tailwind-styled-components'

type Inner = {
  $divide: boolean
}

export const TWLayout = tw.div`
    flex
    w-full
    py-10
    px-0
    2xl:px-10
    min-h-screen
    justify-center
    bg-[#242525]
`

export const TWLayoutInner = tw.div`
    2xl:w-full
    w-[1439px]
`
export const TWLayoutInnerContent = tw.div<Inner>`
    flex
    xl:flex-col
    justify-between
`
