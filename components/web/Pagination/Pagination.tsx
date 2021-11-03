import React from 'react'
import { INews } from '@typings/news'
import { PaginationProps } from 'rc-pagination'
import { TWPagination, TWPaginationBtn, TWPaginationLeft, TWPaginationRight } from './tw-styled'

interface IProps extends PaginationProps {
  data: INews[]
}

const Pagination: React.FC<IProps> = ({ data, ...props }) => {
  const paginationButtonRender = (_page: number, type: string, element: React.ReactNode): React.ReactNode => {
    if (type === 'prev') return <TWPaginationBtn title="prev">Prev</TWPaginationBtn>
    if (type === 'next') return <TWPaginationBtn title="next">next</TWPaginationBtn>
    return element
  }

  const renderTotal = (total: number, range: [number, number]): React.ReactNode => (
    <TWPaginationLeft>
      {range[0]} - {range[1]} <span className="ml-1.5 opacity-25">out of {total}</span>
    </TWPaginationLeft>
  )

  return (
    <TWPagination
      {...props}
      total={data.length}
      showTotal={renderTotal}
      className="modified-pagination"
      itemRender={paginationButtonRender}
    />
  )
}

export default Pagination
