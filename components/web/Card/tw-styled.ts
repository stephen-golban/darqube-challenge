import tw from 'tailwind-styled-components'

type Card = {
  $latest?: boolean
}

export const TWCard = tw.div<Card>`
  flex
  flex-col
  justify-between
  ${(p) => (p.$latest ? 'py-5 px-[30px]' : 'py-5 px-[25px]')}
  ${(p) => (p.$latest ? 'w-[478px] h-[628px]' : 'w-[280px] h-[425px]')}
`
export const TWCardTag = tw.div`
  flex
  border
  w-[88px]
  h-[21px]
  text-[10px]
  items-center
  text-white
  justify-center
  rounded-[30px]
  border-white
`
export const TWCardImportantTag = tw.div`
  flex
  w-[96px]
  h-[17px]
  uppercase
  font-bold
  text-[8px]
  items-center
  text-white
  leading-[9px]
  rounded-[2px]
  justify-center
  bg-[#B73556]
  tracking-[0.06em]
`
export const TWCardTop = tw.div`
  flex
  w-full
  items-center
  justify-between
`
export const TWCardBottom = tw.div`
  w-full
`
export const TWCardHeadLine = tw.div<Card>`
  break-words
  text-white
  ${(p) => (p.$latest ? 'text-2xl leading-8' : 'text-[20px] leading-[28px]')}
`
export const TWCardToolBar = tw.div`
  flex
  mt-8
  w-full
  items-center
  justify-between
`
export const TWCardToolbarReadWrapper = tw.div`
  flex
  items-center
`
export const TWCardToolBarReadButton = tw.div`
  flex
  text-xs  
  font-bold
  items-center
  text-white
  cursor-pointer
`
export const TWCardToolBarReadDivider = tw.div`
  mx-4
  h-[18px]
  w-[2px]
  bg-white
  opacity-[0.08]
`
export const TWCardToolBarDate = tw.div`
  text-xs
  opacity-75
  text-white
  leading-[14px]
`
