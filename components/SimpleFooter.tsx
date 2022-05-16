import Link from 'next/link'

const SimpleFooter: React.FC = () => {
  return (
    <div className="bg-black w-screen h-[5rem] flex items-center justify-center">
      <Link href="/" passHref>
        <div className="flex justify-center items-center gap-3 cursor-pointer noselect">
          <p className="font-newkansas font-semibold text-white text-[2rem]">
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
    </div>
  )
}

export default SimpleFooter
