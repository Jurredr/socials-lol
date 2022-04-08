import { BlitzPage, Link } from 'blitz'
import { FiLogIn } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'

const Home: BlitzPage = () => {
  return (
    <div>
      <div
        className="h-screen w-screen"
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
          <div className="flex justify-between">
            <div>
              <div className="font-semibold text-white text-[5rem]">
                <h1 className="leading-tight">
                  One Card,<br></br>All your Socials.
                </h1>
              </div>
              <div>socials.lol/@yourname</div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-[30rem] pr-16"
              draggable={false}
              src="/landing-hero-phone.png"
              alt="Landing hero phone display"
            />
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
      <div className="bg-black w-screen h-[7.5rem] flex px-44 justify-between items-center -z-20">
        <div className="flex justify-center items-center gap-3 cursor-pointer noselect">
          <p className="font-newkansas font-semibold text-white text-[2.7rem]">socials.lol</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="h-8" draggable={false} src="/icon.svg" alt="Logo icon of smiling face" />
        </div>
        <div className="flex gap-10 justify-center items-center">
          <div className="flex text-white font-medium gap-6">
            <p className="cursor-pointer noselect">terms of service</p>
            <p className="cursor-pointer noselect">privacy policy</p>
          </div>
          <div className="flex gap-5">
            <div className="relative cursor-pointer">
              <div className="flex active:top-[0.15rem] justify-center z-10 items-center relative bg-white rounded-2xl h-[3.45rem] w-[3.6rem] border-[0.2rem] border-socialorange">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-7 w-7"
                  draggable={false}
                  src="/jurre.svg"
                  alt="Jurre.me personal portfolio icon"
                />
              </div>
              <div className="absolute h-[3.45rem] w-[3.6rem] rounded-2xl bg-socialorange -bottom-1" />
            </div>
            <div className="relative cursor-pointer">
              <div className="flex active:top-[0.15rem] justify-center z-10 items-center relative bg-white rounded-2xl h-[3.45rem] w-[3.6rem] border-[0.2rem] border-socialpink">
                <BsGithub className="h-7 w-7" />
              </div>
              <div className="absolute h-[3.45rem] w-[3.6rem] rounded-2xl bg-socialpink -bottom-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true

export default Home
