import { Head, BlitzLayout } from 'blitz'
import WebHead from '../components/WebHead'

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <WebHead />

      {children}
    </>
  )
}

export default Layout
