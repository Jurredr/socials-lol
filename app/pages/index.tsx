import { BlitzPage, Link } from 'blitz'
import { FiLogIn } from 'react-icons/fi'
import Layout from 'app/core/layouts/Layout'
import Footer from 'app/core/components/Footer'
import ShadowButton from 'app/core/components/ShadowButton'

const Home: BlitzPage = () => {
  return (
    <div>
      <div
        className="h-screen w-screen relative"
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
              <img
                className="h-8"
                draggable={false}
                src="/icon.svg"
                alt="Logo icon of smiling face"
              />
            </div>
            <div className="flex justify-center items-center gap-6">
              <Link href="/" scroll={false} passHref>
                <button
                  className="flex justify-center items-center gap-2 font-medium tracking-tight transition-all hover:gap-[0.35rem] hover:ml-[0.15rem] cursor-pointer whitespace-nowrap"
                  type="button"
                >
                  <FiLogIn strokeWidth={3} />
                  <p className="noselect text-lg">Sign in</p>
                </button>
              </Link>
              <ShadowButton h="[3rem]" w="[9rem]" bg="white" border="black" href="/">
                <p className="noselect text-lg">Sign up</p>
              </ShadowButton>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-12">
              <div className="mt-40 text-white text-[5rem]">
                <h1 className="font-semibold leading-tight whitespace-nowrap">
                  One Card,<br></br>All your Socials.
                </h1>
              </div>
              <div className="relative">
                <div className="flex w-full max-w-full pl-7 pr-2 z-10 items-center relative bg-white rounded-full h-[4rem] border-[0.2rem] border-black">
                  <div className="flex items-center h-full">
                    <span className="noselect text-[1.8rem] tracking-tight font-medium">
                      socials.lol/@
                    </span>
                    <div className="flex-1 pr-1">
                      <input
                        className="outline-none lowercase max-w-[17rem] text-[1.8rem] placeholder-gray-400 placeholder:opacity-80 tracking-tight font-medium h-full"
                        placeholder="yourname"
                        spellCheck={false}
                      />
                    </div>
                  </div>
                  <button
                    className="noselect whitespace-nowrap w-full tracking-tight text-[1.4rem] font-medium rounded-full bg-gray-400 bg-opacity-20 px-4 py-[0.3rem]"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>
                <div className="absolute h-[4rem] w-full rounded-full bg-black -bottom-2" />
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-[30rem] pr-20 mt-32"
              draggable={false}
              src="/landing-hero-phone.png"
              alt="Landing hero phone display"
            />
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-[17rem] absolute -bottom-[5.5rem] left-[20rem]"
          draggable={false}
          src="/arrow-bubble.svg"
          alt="Arrow pointing downwards"
        />
      </div>
      <div className="h-screen flex justify-center pt-40">
        <h1 className="font-semibold text-[5rem]">Share everything.</h1>
      </div>
      <Footer />
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
// @ts-ignore
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
