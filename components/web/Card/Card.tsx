import { ArrowCircleIcon, FavoriteIcon } from '@components/Icons'
import React from 'react'
import styles from './styles.module.css'
import {
  TWCard,
  TWCardBottom,
  TWCardHeadLine,
  TWCardImportantTag,
  TWCardTag,
  TWCardToolBar,
  TWCardToolBarDate,
  TWCardToolBarReadButton,
  TWCardToolBarReadDivider,
  TWCardToolbarReadWrapper,
  TWCardTop,
} from './tw-styled'

interface IProps {
  tag_text: string
  bg_image: string
  headline: string
  is_latest?: boolean
  publish_date: any
}

const Card: React.FC<IProps> = (props) => {
  return (
    <TWCard
      $latest={props.is_latest}
      className={styles.card}
      style={{
        background: `rgb(0,0,0),linear-gradient(90deg, rgba(0,0,0,0.3393732492997199) 0%, rgba(0,73,101,0.7959558823529411) 100%, rgba(0,0,0,0.7259278711484594) 100%, url('${props.bg_image}')`,
      }}
    >
      <TWCardTop>
        <TWCardTag>{props.tag_text}</TWCardTag>
        {props.is_latest ? <TWCardImportantTag>latest research</TWCardImportantTag> : null}
      </TWCardTop>
      <TWCardBottom>
        <TWCardHeadLine $latest={props.is_latest}>
          {props.headline.length > 69 ? props.headline.slice(0, 70) + '...' : props.headline}
        </TWCardHeadLine>
        <TWCardToolBar>
          {props.is_latest ? (
            <TWCardToolbarReadWrapper>
              <TWCardToolBarReadButton>
                <ArrowCircleIcon className="mr-4" />
                Read the research
              </TWCardToolBarReadButton>
              <TWCardToolBarReadDivider />
              <TWCardToolBarDate>{props.publish_date}</TWCardToolBarDate>
            </TWCardToolbarReadWrapper>
          ) : (
            <TWCardToolBarDate>{props.publish_date}</TWCardToolBarDate>
          )}
          <FavoriteIcon className="opacity-50 cursor-pointer" />
        </TWCardToolBar>
      </TWCardBottom>
    </TWCard>
  )
}

export default Card
