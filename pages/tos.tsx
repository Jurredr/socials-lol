import { GetServerSidePropsContext, NextPage } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

interface Props {
  session: Session | null
}

const TOS: NextPage<Props> = (props) => {
  return (
    <div className="h-screen w-screen relative flex flex-col items-center justify-between">
      <div
        className="w-screen px-6 sm:px-10 xl:px-44 py-3"
        style={{
          background:
            'linear-gradient(120deg, rgba(255,172,213,1) 0%, rgba(254,250,166,1) 65%, rgba(255,253,210,1) 100%)'
        }}
      >
        <NavBar ssr ssrData={props.session} />
      </div>
      <h1 className="font-semibold text-6xl">TOS</h1>
      <Footer />
    </div>
  )
}

export default TOS

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)
  return {
    props: {
      session
    }
  }
}
