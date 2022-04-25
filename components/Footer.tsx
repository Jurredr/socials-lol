import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import ShadowButton from './ShadowButton'

const Footer: React.FC = () => {
  return (
    <div className="bg-black w-screen h-[9rem] sm:h-[7rem] flex px-6 sm:px-10 xl:px-44 justify-between items-start pt-4 sm:pt-0 sm:items-center">
      <Link href="/" passHref>
        <div className="flex justify-center items-center gap-3 cursor-pointer noselect">
          <p className="font-newkansas font-semibold text-white text-[2rem] sm:text-[2.7rem]">
            socials.lol
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-6 sm:h-8 noselect"
            draggable={false}
            src="/branding/icon.svg"
            alt="Logo icon of smiling face"
          />
        </div>
      </Link>
      <div className="flex flex-col sm:flex-row sm:gap-2 md:gap-4 lg:gap-10 justify-center items-center">
        <div className="absolute left-[1.5rem] bottom-8 sm:bottom-auto sm:left-auto sm:relative flex text-white font-medium gap-2 lg:gap-6">
          <Link href="/tos" passHref>
            <p className="cursor-pointer noselect sm:w-20 md:w-auto">
              terms of service
            </p>
          </Link>
          <Link href="/privacy-statement" passHref>
            <p className="cursor-pointer noselect sm:w-20 md:w-auto">
              privacy policy
            </p>
          </Link>
        </div>
        <div className="flex gap-5">
          <ShadowButton
            h="3.45rem"
            w="3.6rem"
            bg="bg-white"
            border="border-socialorange"
            shadow="bg-socialorange"
            href="https://jurre.me"
            external
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-7 w-7"
              draggable={false}
              src="/icons/jurre.svg"
              alt="Jurre.me personal portfolio icon"
            />
          </ShadowButton>
          <ShadowButton
            h="3.45rem"
            w="3.6rem"
            bg="bg-white"
            border="border-socialpink"
            shadow="bg-socialpink"
            href="https://github.com/Jurredr/socials-lol"
            external
          >
            <BsGithub className="h-7 w-7" />
          </ShadowButton>
        </div>
      </div>
    </div>
  )
}

export default Footer
