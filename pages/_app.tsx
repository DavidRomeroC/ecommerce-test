import type { AppProps } from 'next/app'
import "../styles/styles.scss";
import { store } from '../app/store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
