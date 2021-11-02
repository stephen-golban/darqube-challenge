import '@assets/main.css'
import 'react-toastify/dist/ReactToastify.css'

import store from '@store/store'
import { Head } from '@components/web'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
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
