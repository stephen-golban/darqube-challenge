import '@assets/main.css'
import '@assets/pagination.css'
import 'rc-pagination/assets/index.css'
import 'react-toastify/dist/ReactToastify.css'

import store from '@store/store'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Provider store={store}>
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
