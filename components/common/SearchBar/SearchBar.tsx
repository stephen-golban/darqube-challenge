import React from 'react'
import { setSearchValueSlice } from '@store/slices'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { TWSearchBar, TWSearchBarIcon, TWSearchBarWrapper } from './tw-styled'

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const { value } = useAppSelector((state) => state.search)

  return (
    <TWSearchBarWrapper>
      <TWSearchBarIcon />
      <TWSearchBar
        value={value}
        placeholder="Search"
        style={{ outline: 'none' }}
        onChange={(e) => dispatch(setSearchValueSlice(e.target.value))}
      />
    </TWSearchBarWrapper>
  )
}

export default SearchBar
