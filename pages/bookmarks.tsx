import React from 'react'
import { NextPage } from 'next'
import { Card } from '@components/web'
import { Layout } from '@components/common'
import { useAppSelector } from '@store/hooks'

const Bookmarks: NextPage = () => {
  const { bookmarks, news } = useAppSelector((state) => state.news)
  return (
    <Layout>
      {bookmarks
        .map((item) => news?.find((el) => el.id === item))
        .map((item) => (item !== undefined ? <Card key={item.id} news={item} /> : null))}
    </Layout>
  )
}

export default Bookmarks
