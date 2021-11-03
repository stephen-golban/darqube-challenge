import Pagination from 'rc-pagination'
import tw from 'tailwind-styled-components'

export const TWPagination = tw(Pagination)`
    flex
    w-full
    relative
    items-center
    justify-end
`
export const TWPaginationLeft = tw.div`
    flex
    text-xs
    absolute
    left-0
    font-normal
    items-center
    text-white
`
export const TWPaginationRight = tw.div`
    flex
    flex-wrap
    items-center
`
export const TWPaginationBtn = tw.button`
    h-[25px]
    uppercase
    font-bold
    w-[116px]
    text-[10px]
    text-white
    duration-200
    bg-[#3C3C3C]
    rounded-[60px]
    transition-all
    hover:opacity-60
`
