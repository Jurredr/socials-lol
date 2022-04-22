import { AppProps } from 'next/app'
import WebHead from '../components/WebHead'
import '../styles/globals.scss'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div className="relative overflow-hidden">
      <WebHead />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
