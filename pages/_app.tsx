import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { Router } from 'next/router'
import WebHead from '../components/WebHead'
import NProgress from 'nprogress'
import '../styles/globals.scss'
import '../styles/pageprogress.scss'

// Set up NProgress
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
NProgress.configure({ showSpinner: false })

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
