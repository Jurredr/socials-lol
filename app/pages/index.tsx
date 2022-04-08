import { BlitzPage, Link } from 'blitz'
import { FiChevronDown, FiLogIn, FiUser } from 'react-icons/fi'

const Home: BlitzPage = () => {
  return (
    <div
      className="h-screen w-screen gradi "
      style={{
        background:
          'linear-gradient(120deg, rgba(255,172,213,1) 0%, rgba(254,250,166,1) 65%, rgba(255,253,210,1) 100%)'
      }}
    >
      <div className="pt-16 px-44">
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-3 cursor-pointer noselect">
            <p className="font-newkansas font-semibold text-white text-[2.7rem]">socials.lol</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="h-8" src="/icon.svg" alt="Logo icon of smiling face" />
          </div>
          <div className="flex justify-center items-center">
            <Link href="/sign-in" scroll={false} passHref>
              <div className="flex justify-center items-center gap-2 transition-all hover:gap-[0.35rem] hover:ml-[0.15rem] cursor-pointer whitespace-nowrap">
                <FiLogIn />
                <p>Sign in</p>
              </div>
            </Link>
            <Link href="/sign-up" scroll={false} passHref>
              <p>Sign Up</p>
            </Link>
          </div>
        </div>
        <div>
          <h1>One Card,</h1>
          <h1>All your Socials.</h1>
        </div>
        <div>socials.lol/@yourname</div>
      </div>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true

export default Home
