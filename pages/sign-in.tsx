import { GetServerSidePropsContext, NextPage } from 'next'
import { BuiltInProviderType } from 'next-auth/providers'
import {
  ClientSafeProvider,
  getProviders,
  getSession,
  LiteralUnion
} from 'next-auth/react'
import Link from 'next/link'
import { IoChevronBack } from 'react-icons/io5'
import EmailField from '../components/auth/EmailField'
import OAuthButtons from '../components/auth/OAuthButtons'
import SignInSide from '../components/auth/SignInSide'
import DividerText from '../components/DividerText'
import ShadowButton from '../components/ShadowButton'

interface Props {
  authProviders: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >
}

const SignIn: NextPage<Props> = (props) => {
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
            Sign in
          </h1>
          <p className="font-medium">
            Don&apos;t have an account?{' '}
            <Link href="/sign-up" passHref>
              <span className="text-socialpink cursor-pointer hover:underline">
                Sign up
              </span>
            </Link>
          </p>

          <div className="w-full flex flex-col gap-4 mt-6">
            {/* OAuth */}
            <OAuthButtons
              textPrefix="Continue with "
              authProviders={props.authProviders}
            />

            {/* Or */}
            <DividerText text="or" />

            {/* Input */}
            <EmailField />

            {/* Submit */}
            <div className="mt-2">
              <ShadowButton
                h="2.7rem"
                w="100%"
                bg="bg-white"
                border="border-black"
                shadow="bg-black"
                onClick={() => alert('Sign in with email')}
              >
                <p>Sign in with email</p>
              </ShadowButton>
            </div>
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
      >
        <SignInSide />
      </div>
    </div>
  )
}

export default SignIn

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)
  if (session) return { redirect: { destination: '/', permanent: false } }
  const authProviders = await getProviders()
  return {
    props: {
      authProviders
    }
  }
}
