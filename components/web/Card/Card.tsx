import React from 'react'
import Link from 'next/link'
import { INews } from '@typings/news'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setBookMarkSlice, unsetBookMarkSlice } from '@store/slices'
import { ArrowCircleIcon, FavoriteIcon, UnFavoriteIcon } from '@components/Icons'
import {
  TWCard,
  TWCardTop,
  TWCardTag,
  TWCardBottom,
  TWCardToolBar,
  TWCardSummary,
  TWCardHeadLine,
  TWCardToolBarDate,
  TWCardImportantTag,
  TWCardToolBarReadButton,
  TWCardToolBarReadDivider,
  TWCardToolbarReadWrapper,
} from './tw-styled'

interface IProps {
  news: INews
  is_latest?: boolean
}

const Card: React.FC<IProps> = ({ is_latest, news }) => {
  const dispatch = useAppDispatch()
  const { bookmarks } = useAppSelector((state) => state.news)

  const toggleFav = (fav: boolean) => {
    if (fav) {
      dispatch(unsetBookMarkSlice(news.id))
      toast.warn('Successfully removed from bookmarks!')
    } else {
      dispatch(setBookMarkSlice(news.id))
      toast.success('Successfully added to bookmarks!')
    }
  }

  return (
    <TWCard
      $latest={is_latest}
      style={{
        backgroundImage: `url('${news.image}'), linear-gradient(180deg, rgba(28, 58, 82, 0) 0%, rgba(5, 20, 27, 0.5) 100%)`,
      }}
    >
      <TWCardTop>
        <TWCardTag>{news.related}</TWCardTag>
        {is_latest ? <TWCardImportantTag>latest research</TWCardImportantTag> : null}
      </TWCardTop>
      <TWCardBottom>
        <TWCardHeadLine href={news.url} $latest={is_latest} target="_blank" rel="noreferrer">
          {news.headline}
        </TWCardHeadLine>
        <TWCardSummary>{news.summary.length > 89 ? news.summary.slice(0, 90) + '...' : news.summary}</TWCardSummary>
        <TWCardToolBar>
          {is_latest ? (
            <TWCardToolbarReadWrapper>
              <TWCardToolBarReadButton>
                <ArrowCircleIcon className="mr-4" />
                Read the research
              </TWCardToolBarReadButton>
              <TWCardToolBarReadDivider />
              <TWCardToolBarDate>{news.datetime}</TWCardToolBarDate>
            </TWCardToolbarReadWrapper>
          ) : (
            <TWCardToolBarDate>{news.datetime}</TWCardToolBarDate>
          )}
          {bookmarks.find((item) => item === news.id) ? (
            <UnFavoriteIcon className="cursor-pointer text-white" onClick={() => toggleFav(true)} />
          ) : (
            <FavoriteIcon className="opacity-50 cursor-pointer" onClick={() => toggleFav(false)} />
          )}
        </TWCardToolBar>
      </TWCardBottom>
    </TWCard>
  )
}

export default Card
