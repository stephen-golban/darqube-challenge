import React from 'react'
import { AxiosResponse } from 'axios'
import { INews } from '@typings/news'
import { useSearch } from '@lib/hooks'
import { Loader } from '@components/Icons'
import { Layout } from '@components/common'
import { setNewsSlice } from '@store/slices'
import { getNewsRequest } from '@api/requests'
import { UtilityService } from '@lib/services'
import { GetStaticProps, NextPage } from 'next'
import { Card, Pagination } from '@components/web'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { TWNewsLatestSection, TWNewsWrapper, TWNewsWrapperSection } from '@assets/news-tw-styled'

interface IProps {
  latest: INews
  initialNews: INews[]
}

const Index: NextPage<IProps> = ({ latest, initialNews }) => {
  const dispatch = useAppDispatch()
  const { news } = useAppSelector((state) => state.news)
  const { results, setResults } = useSearch({ data: news })

  const [page, setPage] = React.useState<number>(1)

  const pageNews = UtilityService.paginate(
    results.filter((item) => item.id !== latest.id),
    page
  )

  React.useEffect(() => {
    dispatch(setNewsSlice(initialNews))
    setResults(initialNews)
  }, [])

  return (
    <Layout divide_grid>
      <TWNewsLatestSection>
        <React.Suspense fallback={<Loader />}>
          <Card news={latest} is_latest />
        </React.Suspense>
      </TWNewsLatestSection>
      <TWNewsWrapperSection>
        <TWNewsWrapper>
          <React.Suspense fallback={<Loader />}>
            {pageNews.map((item) => (
              <Card key={item.id} news={item} />
            ))}
          </React.Suspense>
        </TWNewsWrapper>
        <Pagination data={initialNews} defaultPageSize={6} onChange={(page) => setPage(page)} current={page} />
      </TWNewsWrapperSection>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data }: AxiosResponse<INews[]> = await getNewsRequest()

  if (!data)
    return {
      notFound: true,
    }

  const format = (index: number) => UtilityService.formatDate(index, data)

  const latest: INews = { ...data[0], datetime: format(0) }

  const initialNews = data.map((item, index) => ({
    ...item,
    datetime: format(index),
  }))

  return {
    props: {
      initialNews,
      latest,
    },
  }
}

export default Index
