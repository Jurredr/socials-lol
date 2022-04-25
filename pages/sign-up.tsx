import { NextPage } from 'next'
import Link from 'next/link'
import { IoChevronBack } from 'react-icons/io5'
import OAuthButtons from '../components/auth/OAuthButtons'
import DividerText from '../components/DividerText'
import ShadowButton from '../components/ShadowButton'

const SignUp: NextPage = () => {
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
          <h1 className="text-[3.3rem] font-semibold whitespace-nowrap">
            Create Account
          </h1>
          <p className="font-medium">
            Already have an account?{' '}
            <Link href="/sign-in" passHref>
              <span className="text-socialpink cursor-pointer hover:underline">
                Sign in
              </span>
            </Link>
          </p>

          <div className="w-full flex flex-col gap-4 mt-6">
            {/* OAuth */}
            <OAuthButtons textPrefix="Sign up with " />

            {/* Or */}
            <DividerText text="or" />
          </div>
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

export default SignUp
