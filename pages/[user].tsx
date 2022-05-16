import { GetServerSidePropsContext, NextPage } from 'next'
import SimpleFooter from '../components/SimpleFooter'

const User: NextPage = () => {
  return (
    <div className="h-screen w-screen relative flex flex-col items-center justify-between">
      <div className="w-full h-full relative flex flex-col items-center">
        <div
          className="flex items-center justify-center w-full h-1/5 relative"
          style={{
            background:
              'linear-gradient(120deg, rgba(255,172,213,1) 0%, rgba(254,250,166,1) 95%, rgba(255,253,210,1) 100%)'
          }}
        >
          <div className="absolute -bottom-12 rounded-[2.5rem] h-28 w-28 bg-gray-200" />
        </div>
        <h1 className="text-3xl mt-16 font-semibold">Jurre de Ruiter</h1>
        <h2 className="text-2xl text-neutral-400">@jurre</h2>
        <hr className="w-[19.5rem] border-neutral-200 border rounded-full my-5" />
        <p className="text-sm text-center min-w-[16rem] w-[16rem] max-w-[16rem] opacity-75">
          Full-time cool person, certified quite epic
        </p>
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
