import { BlitzPage } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import Footer from 'app/core/components/Footer'
import ShadowButton from 'app/core/components/ShadowButton'
import LandingNav from 'app/core/components/LandingNav'

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
        <div className="pt-16 px-8 sm:px-12 md:px-24 xl:px-44">
          <LandingNav />
          <div className="flex justify-between">
            <div className="flex flex-col gap-12">
              <div className="mt-40">
                <h1 className="font-semibold text-white text-[3.5rem] sm:text-[4rem] md:text-[5rem] leading-tight whitespace-nowrap">
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
              src="/images/landing-hero-phone.png"
              alt="Landing hero phone display"
            />
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-[17rem] absolute -bottom-[5.5rem] left-[20rem]"
          draggable={false}
          src="/figures/arrow-bubble.svg"
          alt="Arrow pointing downwards"
        />
      </div>
      <div className="flex flex-col items-center mt-40 mb-32">
        <h1 className="font-semibold whitespace-nowrap relative text-[5rem] mb-4">
          Share everything.
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-[3.1rem] absolute -top-4 -right-16"
            draggable={false}
            src="/figures/star.svg"
            alt="Drawn star figure"
          />
        </h1>
        <p className="font-medium whitespace-nowrap text-[1.7rem] text-center">
          With socials.lol you can create a shareable card with all<br></br>your socials, links,
          game stats, and more!
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-[70rem] mt-20 mb-10"
          draggable={false}
          src="/images/landing-showcase.png"
          alt="Showcase of card with different social links"
        />
        <ShadowButton
          h="3rem"
          w="14rem"
          bg="bg-white"
          border="border-socialpink"
          shadow="bg-socialpink"
          href="/"
        >
          <p className="noselect text-lg">Create your Card</p>
        </ShadowButton>
      </div>
      <Footer />
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
// @ts-ignore
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
