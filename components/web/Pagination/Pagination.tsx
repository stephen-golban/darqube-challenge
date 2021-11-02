import React from 'react'
import { INews } from '@typings/news'
import { setNewsSlice } from '@store/slices'
import { useAppDispatch } from '@store/hooks'
import { UtilityService } from '@lib/utility-service'
import { TWPagination, TWPaginationBtn, TWPaginationLeft, TWPaginationRight } from './tw-styled'

interface IProps {
  news: INews[]
}

const Pagination: React.FC<IProps> = ({ news }) => {
  const dispatch = useAppDispatch()
  const [currentPage, setCurrentPage] = React.useState<number>(1)

  React.useEffect(() => {
    if (news !== null) dispatch(setNewsSlice(news.slice(0, 6)))
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    dispatch(setNewsSlice(UtilityService.paginate(news, currentPage)))
    // eslint-disable-next-line
  }, [currentPage])

  const nextPage = () => setCurrentPage(currentPage + 1)
  const prevPage = () => setCurrentPage(currentPage - 1)

  return (
    <TWPagination>
      <TWPaginationLeft>
        {currentPage} - {Math.ceil(news.length / 6)} <span className="ml-1.5 opacity-25">out of {news.length}</span>
      </TWPaginationLeft>
      <TWPaginationRight>
        {currentPage <= 1 ? null : <TWPaginationBtn onClick={() => prevPage()}>previous</TWPaginationBtn>}
        {currentPage < Math.ceil(news.length / 6) ? (
          <TWPaginationBtn className="ml-4" onClick={() => nextPage()}>
            next
          </TWPaginationBtn>
        ) : null}
      </TWPaginationRight>
    </TWPagination>
  )
}

export default Pagination
