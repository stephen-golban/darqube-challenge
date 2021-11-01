import React from 'react'
import { TWSearchBar, TWSearchBarIcon, TWSearchBarWrapper } from './tw-styled'

const SearchBar: React.FC = () => {
  return (
    <TWSearchBarWrapper>
      <TWSearchBarIcon />
      <TWSearchBar placeholder="Search" style={{ outline: 'none' }} />
    </TWSearchBarWrapper>
  )
}

export default SearchBar
