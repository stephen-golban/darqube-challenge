import moment from 'moment'
import { INews } from '@typings/news'

export const UtilityService = {
  formatDate: (index: number, data: INews[]) =>
    moment(new Date(+data[index].datetime * 1000))
      .format('DD/MMM')
      .replace('/', ' ')
      .toString(),

  paginate: (array: INews[], page_number: number) => array.slice((page_number - 1) * 6, page_number * 6),

  search: (array: INews[], value: string) =>
    array.filter(
      (item: INews) =>
        item.headline.toLowerCase().includes(value.toLowerCase()) ||
        item.summary.toLowerCase().includes(value.toLowerCase())
    ),

  idToObject: (arr1: number[], arr2: INews[]) =>
    arr1.map((item) => arr2.find((el) => el.id === item)).map((item) => item!),
}
