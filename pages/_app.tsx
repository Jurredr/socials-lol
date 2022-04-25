import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import WebHead from '../components/WebHead'
import '../styles/globals.scss'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className="relative overflow-hidden">
        <WebHead />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}

export default MyApp
