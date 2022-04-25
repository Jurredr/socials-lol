import Link from 'next/link'
import { FiLogIn } from 'react-icons/fi'
import ShadowButton from './ShadowButton'

const NavBar: React.FC = () => {
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
        <Link href="/sign-up" passHref>
          <ShadowButton
            h="3rem"
            w="9rem"
            bg="bg-white"
            border="border-black"
            shadow="bg-black"
            href="/"
          >
            <p className="noselect text-base sm:text-lg">Sign up</p>
          </ShadowButton>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
