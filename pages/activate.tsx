import { GetServerSidePropsContext, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import { IoMail } from 'react-icons/io5'
import SignInSide from '../components/auth/SignInSide'

const Activate: NextPage = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 items-center justify-center">
      {/* Left */}
      <div className="z-10 h-screen w-screen lg:w-[50vw] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center w-full max-w-[22rem] gap-2 relative">
          <IoMail className="text-5xl fill-socialpink" />
          <h1 className="tracking-normal text-4xl font-semibold mb-1">
            Check your inbox
          </h1>
          <p>
            We sent you an activation link. Please be sure to check your spam
            folder too.
          </p>
        </div>
      </div>

      {/* Right */}
      <div
        className="relative hidden lg:flex self-center items-center float-right w-[50vw] h-screen"
        style={{
          background:
            'linear-gradient(120deg, rgba(255,172,213,1) 0%, rgba(254,250,166,1) 65%, rgba(255,253,210,1) 100%)'
        }}
      >
        <SignInSide />
      </div>
    </div>
  )
}

export default Activate

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)
  if (session) return { redirect: { destination: '/', permanent: false } }
  return { props: {} }
}
