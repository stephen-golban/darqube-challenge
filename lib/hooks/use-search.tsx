import React from 'react'
import { INews } from '@typings/news'
import { useAppSelector } from '@store/hooks'
import { UtilityService } from '@lib/services'

interface IProps {
  data: INews[]
}

const useSearch = ({ data }: IProps) => {
  const { value } = useAppSelector((state) => state.search)

  const [results, setResults] = React.useState<INews[]>([])

  React.useEffect(() => setResults(UtilityService.search(data, value)), [value])

  return {
    results,
    setResults,
    searchValue: value,
  }
}
export default useSearch
