import React from 'react'
import NextHead from 'next/head'
import { useRouter } from 'next/router'

const Head: React.FC = () => {
  const { pathname } = useRouter()
  const path = pathname.replace('/', ' ')
  const pathText = path.charAt(1).toUpperCase() + path.slice(2)
  return (
    <>
      <NextHead>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{pathname === '/' ? 'News' : pathText} - DarQube Challenge</title>
      </NextHead>
    </>
  )
}

export default Head
