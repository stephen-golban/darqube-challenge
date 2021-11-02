import { SearchIcon } from '@components/Icons'
import tw from 'tailwind-styled-components'

export const TWSearchBar = tw.input`
    pl-6
    text-xs
    h-[30px]
    w-[162px]
    md:w-full
    text-white
    bg-[#191818]
    placeholder-[#686868]
`
export const TWSearchBarIcon = tw(SearchIcon)`
    left-2
    absolute
    w-[10.95px]
    h-[11.28px]
`
export const TWSearchBarWrapper = tw.div`
    flex
    relative
    md:w-full
    items-center
`
