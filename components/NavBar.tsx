import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { FiLogIn } from 'react-icons/fi'
import { FaChevronDown } from 'react-icons/fa'
import ShadowButton from './ShadowButton'
import { BeatLoader } from 'react-spinners'

interface Props {
  ssr?: boolean
  ssrData?:
    | {
        name?: string | null | undefined
        email?: string | null | undefined
        image?: string | null | undefined
      }
    | undefined
}

const NavBar: React.FC<Props> = (props) => {
  const session = props.ssr
    ? { data: { user: props.ssrData }, status: 'ssr' }
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useSession()

  return (
    <div className="flex justify-between">
      <Link href="/" passHref>
        <div className="flex justify-center items-center gap-3 cursor-pointer noselect">
          <p className="font-newkansas font-semibold text-white text-[1.7rem] sm:text-[2.7rem]">
            socials.lol
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-5 sm:h-8"
            draggable={false}
            src="/branding/icon.svg"
            alt="Logo icon of smiling face"
          />
        </div>
      </Link>
      {session?.data?.user ? (
        // Signed in
        <div
          className="flex justify-center items-center font-medium gap-2 cursor-pointer hover:bg-black hover:bg-opacity-5 transition-all duration-300 rounded-xl px-2"
          onClick={() => signOut()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-2xl w-12 border-black border-[3px]"
            src={String(session.data?.user?.image) ?? ''}
            alt={String(session.data?.user?.name) ?? 'User'}
          />
          <p>@jurre</p>
          <FaChevronDown size={16} />
        </div>
      ) : session.status === 'loading' ? (
        // Loading
        <div className="flex justify-center items-center">
          <BeatLoader size={10} speedMultiplier={0.7} />
        </div>
      ) : (
        // Not signed in
        <div className="flex justify-center items-center gap-6">
          <Link href="/sign-in" passHref>
            <button
              className="flex justify-center items-center gap-2 font-medium tracking-tight transition-all hover:gap-[0.35rem] hover:ml-[0.15rem] cursor-pointer whitespace-nowrap"
              type="button"
            >
              <FiLogIn strokeWidth={3} />
              <p className="noselect text-base sm:text-lg">Sign in</p>
            </button>
          </Link>
          <ShadowButton
            h="3rem"
            w="9rem"
            bg="bg-white"
            border="border-black"
            shadow="bg-black"
            href="/sign-up"
          >
            <p className="noselect text-base sm:text-lg">Sign up</p>
          </ShadowButton>
        </div>
      )}
    </div>
  )
}

export default NavBar
