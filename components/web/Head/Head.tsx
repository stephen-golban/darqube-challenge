import React from 'react'
import NextHead from 'next/head'
import { useRouter } from 'next/router'

const Head: React.FC = () => {
  const { pathname } = useRouter()
  console.log(pathname)

  return (
    <>
      <NextHead>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
    </>
  )
}

export default Head
