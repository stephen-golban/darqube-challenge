/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import { INews } from '@typings/news'
import { Card } from '@components/web'
import { useSearch } from '@lib/hooks'
import { Layout } from '@components/common'
import { useAppSelector } from '@store/hooks'
import { UtilityService } from '@lib/services'
import { TWBookmarksEmptyMessage, TWBookmarksEmptyMessageLink, TWBookmarksSection } from '@assets/bookmarks-tw-styled'

const Bookmarks: NextPage = () => {
  const { bookmarks, news } = useAppSelector((state) => state.news)
  const [converted, setConverted] = React.useState<INews[]>(UtilityService.idToObject(bookmarks, news))

  const { results, setResults } = useSearch({ data: converted })

  React.useEffect(() => setConverted(UtilityService.idToObject(bookmarks, news)), [bookmarks])
  React.useEffect(() => setResults(converted), [converted])

  return (
    <Layout>
      <TWBookmarksSection>
        {results.length < 1 ? (
          <TWBookmarksEmptyMessage>
            You haven't saved any news, try adding few{' '}
            <Link href="/" passHref>
              <TWBookmarksEmptyMessageLink>news</TWBookmarksEmptyMessageLink>
            </Link>
          </TWBookmarksEmptyMessage>
        ) : (
          results.map((item) => <Card key={item.id} news={item} />)
        )}
      </TWBookmarksSection>
    </Layout>
  )
}

export default Bookmarks
