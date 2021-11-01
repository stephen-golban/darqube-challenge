import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { Layout } from '@components/common'
import { Card } from '@components/web'
import { API } from '@api/base'
import { INews } from '@typings/news'
import moment from 'moment'

interface IProps {
  latest: INews
  news: INews[]
}

const Index: NextPage<IProps> = ({ latest, news }) => {
  console.log(latest)
  return (
    <Layout divide_grid>
      <section>
        <Card
          key={latest.id}
          bg_image={latest.image}
          headline={latest.headline}
          tag_text={latest.related}
          is_latest
          publish_date={latest.datetime as unknown as string}
        />
      </section>
      <section className="col-span-2 grid grid-cols-3 grid-flow-row gap-3">
        {news.map((item) => (
          <Card
            key={item.id}
            bg_image={item.image}
            headline={item.headline}
            tag_text={item.related}
            publish_date={item.datetime as unknown as string}
          />
        ))}
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data }: { data: INews[] } = await API

  const formatDate = (index: number) =>
    moment(new Date(+data[index].datetime * 1000))
      .format('DD/MMM')
      .replace('/', ' ')

  const latest: INews = {
    ...data[0],
    datetime: formatDate(0),
  }
  const news = data.map((item, index) => {
    return {
      ...item,
      datetime: formatDate(index),
    }
  })
  return {
    props: {
      news,
      latest,
    },
    revalidate: 10,
  }
}

export default Index
