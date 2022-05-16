import { GetServerSidePropsContext, NextPage } from 'next'
import SimpleFooter from '../components/SimpleFooter'

const User: NextPage = () => {
  return (
    <div className="h-screen w-screen relative flex flex-col items-center justify-between">
      <div className="w-full h-full relative flex flex-col items-center">
        <div
          className="flex items-center justify-center w-full h-1/4 relative"
          style={{
            background:
              'linear-gradient(120deg, rgba(255,172,213,1) 0%, rgba(254,250,166,1) 95%, rgba(255,253,210,1) 100%)'
          }}
        >
          <div className="absolute -bottom-12 rounded-full h-28 w-28 bg-gray-200" />
        </div>
        <h1 className="text-2xl mt-14 font-medium">@jurre</h1>
      </div>

      <SimpleFooter />
    </div>
  )
}

export default User

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = String(context.query.user)
  if (!user.startsWith('@')) {
    return {
      notFound: true
    }
  }
  return {
    props: {}
  }
}
