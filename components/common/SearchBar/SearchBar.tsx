import { useAppDispatch } from '@store/hooks'
import { setSearchedNewsSlice } from '@store/slices'
import React from 'react'
import { TWSearchBar, TWSearchBarIcon, TWSearchBarWrapper } from './tw-styled'

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const [val, setVal] = React.useState<string>('')

  React.useEffect(() => {
    if (val.length > 0) dispatch(setSearchedNewsSlice(val))
  }, [val])

  return (
    <TWSearchBarWrapper>
      <TWSearchBarIcon />
      <TWSearchBar
        placeholder="Search"
        style={{ outline: 'none' }}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    </TWSearchBarWrapper>
  )
}

export default SearchBar
