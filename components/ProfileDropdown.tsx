import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { FiEdit2, FiLogOut, FiUser } from 'react-icons/fi'

interface Props {
  user?: {
    name?: string | null | undefined
    email?: string | null | undefined
    image?: string | null | undefined
  }
}

const ProfileDropdown: React.FC<Props> = (props) => {
  return (
    <div className="bg-white border-black border-[3px] rounded-xl px-2 py-2 noselect cursor-default flex flex-col gap-1 z-50">
      {/* // TODO: user.username here */}
      <Link href={'/@jurre'} passHref>
        <div className="flex cursor-pointer justify-start items-center gap-2 hover:bg-gray-100 hover:bg-opacity-50 rounded-lg px-1 py-1">
          <FiUser strokeWidth={3} />
          <p className="font-medium">Profile</p>
        </div>
      </Link>
      <Link href="/editor" passHref>
        <div className="flex cursor-pointer justify-start items-center gap-2 hover:bg-gray-100 hover:bg-opacity-50 rounded-lg px-1 py-1">
          <FiEdit2 strokeWidth={3} />
          <p className="font-medium">Editor</p>
        </div>
      </Link>
      <div
        className="flex cursor-pointer justify-start items-center gap-2 hover:bg-gray-100 hover:bg-opacity-50 rounded-lg px-1 py-1"
        onClick={() => signOut()}
      >
        <FiLogOut strokeWidth={3} />
        <p className="font-medium">Sign Out</p>
      </div>
      <div className="absolute flex items-center justify-center top-[2.7rem] left-1/2">
        <div className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white z-10 bottom-10 rotate-180" />
        <div className="absolute w-0 h-0 border-l-[14px] border-r-[14px] border-t-[14px] border-l-transparent border-r-transparent border-t-black bottom-10 rotate-180" />
      </div>
    </div>
  )
}

export default ProfileDropdown
