import { BsGithub } from 'react-icons/bs'

const Footer: React.FC = () => {
  return (
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
          <div className="relative ">
            <a className="cursor-pointer" href="https://jurre.me" rel="noreferrer" target="_blank">
              <div className="flex hover:top-[-0.08rem] active:top-[0.15rem] justify-center z-10 items-center relative bg-white rounded-2xl h-[3.45rem] w-[3.6rem] border-[0.2rem] border-socialorange">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-7 w-7"
                  draggable={false}
                  src="/jurre.svg"
                  alt="Jurre.me personal portfolio icon"
                />
              </div>
            </a>
            <div className="absolute h-[3.45rem] w-[3.6rem] rounded-2xl bg-socialorange -bottom-1" />
          </div>
          <div className="relative">
            <a
              className="cursor-pointer"
              href="https://github.com/jurredr"
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex hover:top-[-0.08rem] active:top-[0.15rem] justify-center z-10 items-center relative bg-white rounded-2xl h-[3.45rem] w-[3.6rem] border-[0.2rem] border-socialpink">
                <BsGithub className="h-7 w-7" />
              </div>
            </a>
            <div className="absolute h-[3.45rem] w-[3.6rem] rounded-2xl bg-socialpink -bottom-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
