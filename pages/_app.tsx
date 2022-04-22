import { AppProps } from 'next/app'
import '../styles/globals.scss'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div className="relative overflow-hidden">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
