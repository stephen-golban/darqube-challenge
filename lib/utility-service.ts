import { INews } from '@typings/news'
import moment from 'moment'

export const UtilityService = {
  formatDate: (index: number, data: INews[]) =>
    moment(new Date(+data[index].datetime * 1000))
      .format('DD/MMM')
      .replace('/', ' ')
      .toString(),

  paginate: (array: INews[], page_number: number) => {
    return array.slice((page_number - 1) * 6, page_number * 6)
  },
}
