import { API } from './base'

export const getNewsRequest = () =>
  API.get('/company-news?symbol=AAPL&from=2021-03-01&to=2021-03-15&token=bpjsf67rh5r9328ecgvg')
