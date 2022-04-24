import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import ShadowButton from './ShadowButton'

const Footer: React.FC = () => {
  return (
    <div className="bg-black w-screen h-[7.5rem] flex px-44 justify-between items-center -z-20">
      <Link href="/" passHref>
        <div className="flex justify-center items-center gap-3 cursor-pointer noselect">
          <p className="font-newkansas font-semibold text-white text-[2.7rem]">
            socials.lol
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-8"
            draggable={false}
            src="/branding/icon.svg"
            alt="Logo icon of smiling face"
          />
        </div>
      </Link>
      <div className="flex gap-10 justify-center items-center">
        <div className="flex text-white font-medium gap-6">
          <p className="cursor-pointer noselect">terms of service</p>
          <p className="cursor-pointer noselect">privacy policy</p>
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
            href="https://github.com/jurredr"
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
