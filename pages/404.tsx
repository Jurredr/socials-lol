import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Custom404 = () => {
  return (
    <div>
      <div className="w-screen h-screen">
        <div
          className="px-6 sm:px-10 xl:px-44 py-3"
          style={{
            background:
              'linear-gradient(120deg, rgba(255,172,213,1) 0%, rgba(254,250,166,1) 65%, rgba(255,253,210,1) 100%)'
          }}
        >
          <NavBar />
        </div>
        <div className="flex flex-col justify-center items-center gap-12 h-5/6">
          <div className="relative flex flex-col justify-center items-center">
            <h1 className="text-[5rem] h-[6.5rem] sm:text-[5.8rem] sm:h-[7.6rem] font-semibold">
              404
            </h1>
            <h2 className="text-[2rem] sm:text-[3rem] font-medium whitespace-nowrap">
              Well, that&apos;s awkward...
            </h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-[3.1rem] absolute rotate-[20deg] top-10 -right-72"
              draggable={false}
              src="/figures/star.svg"
              alt="Drawn star figure"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-[3.1rem] absolute scale-75 -bottom-28 -left-72"
              draggable={false}
              src="/figures/bubble.svg"
              alt="Drawn bubble figure"
            />
          </div>
          <div className="relative w-[21rem] h-[11.5rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="noselect w-full h-full"
              draggable={false}
              src="/images/facepalm.gif"
              alt="GIF of people facepalming"
            />
          </div>
          <Link href="/" passHref>
            <div className="flex gap-2 justify-center items-center border-b-2 border-black h-6">
              <p className="font-medium cursor-pointer text-2xl">
                take me home
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-[0.8rem] w-[0.8rem] mt-[0.2rem]"
                draggable={false}
                src="/icons/arrow-tr.svg"
                alt="Arrow to top right"
              />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Custom404
