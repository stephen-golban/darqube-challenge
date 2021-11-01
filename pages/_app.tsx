import '@assets/main.css'
import store from '@store/store'
import { Head } from '@components/web'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
