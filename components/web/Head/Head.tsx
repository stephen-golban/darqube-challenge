import React from 'react'
import NextHead from 'next/head'
import { useRouter } from 'next/router'

const Head: React.FC = () => {
  const { pathname } = useRouter()
  return (
    <>
      <NextHead>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{pathname === '/' ? 'News' : pathname.toUpperCase()} - DarQube Challenge</title>
      </NextHead>
    </>
  )
}

export default Head
