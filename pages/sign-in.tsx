import { NextPage } from 'next'
import { IoChevronBack } from 'react-icons/io5'
import ShadowButton from '../components/ShadowButton'

const SignIn: NextPage = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 items-center justify-center">
      {/* Left */}
      <div className="z-10 h-screen w-screen lg:w-[50vw] flex justify-center items-center">
        {/* Back button */}
        <div className="absolute top-5 left-5">
          <ShadowButton
            h="2.7rem"
            w="9rem"
            bg="bg-white"
            border="border-black"
            shadow="bg-black"
            href="/"
          >
            <div className="flex justify-center items-center">
              <IoChevronBack size={20} />
              <p>Back Home</p>
            </div>
          </ShadowButton>
        </div>

        {/* Register */}
        <div className="flex flex-col justify-center items-center w-full max-w-[22rem]">
          <h1>Sign in</h1>
        </div>
      </div>

      {/* Right */}
      <div
        className="relative hidden lg:flex self-center items-center float-right w-[50vw] h-screen"
        style={{
          background:
            'linear-gradient(120deg, rgba(255,172,213,1) 0%, rgba(254,250,166,1) 65%, rgba(255,253,210,1) 100%)'
        }}
      />
    </div>
  )
}

export default SignIn
