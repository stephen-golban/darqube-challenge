import React from 'react'
import { API } from '@api/base'
import { INews } from '@typings/news'
import { Layout } from '@components/common'
import { GetStaticProps, NextPage } from 'next'
import { Card, Pagination } from '@components/web'
import { UtilityService } from '@lib/utility-service'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { TWNewsLatestSection, TWNewsWrapper, TWNewsWrapperSection } from '@assets/news-tw-styled'
import { setInitialNewsSlice } from '@store/slices'

interface IProps {
  latest: INews
  initialNews: INews[]
}

const Index: NextPage<IProps> = ({ latest, initialNews }) => {
  const { news, searched } = useAppSelector((state) => state.news)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(setInitialNewsSlice(initialNews))
    // eslint-disable-next-line
  }, [initialNews])

  return (
    <Layout divide_grid>
      <TWNewsLatestSection>
        <Card news={latest} is_latest />
      </TWNewsLatestSection>
      <TWNewsWrapperSection>
        <TWNewsWrapper>{news !== null && news.map((item) => <Card key={item.id} news={item} />)}</TWNewsWrapper>
        <Pagination news={searched.length > 0 ? searched : initialNews} />
      </TWNewsWrapperSection>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data }: { data: INews[] } = await API
  const format = (index: number) => UtilityService.formatDate(index, data)

  const latest: INews = {
    ...data[0],
    datetime: format(0),
  }

  const initialNews = data
    .map((item, index) => ({
      ...item,
      datetime: format(index),
    }))
    .filter((item) => item.id !== latest.id)

  return {
    props: {
      initialNews,
      latest,
    },
  }
}

export default Index
